
import { S3, SQS } from 'aws-sdk'
import Logger = require('bunyan');
import { Auth } from 'firebase-admin/lib/auth/auth';
import { DataSource } from 'typeorm';
import * as XLSX from 'xlsx';
import { IdentityType, TenancyType } from '../enums/enum';
import { LoggerFactory } from '../factories/logger-factory';
import { UserRole } from '../models/base/role';
import { DocumentFile } from '../models/document/document-file';
import { AddressDetails } from '../models/member/basic/address-details';
import { EmploymentDetails } from '../models/member/basic/employment-details';
import { IdentityDetails } from '../models/member/basic/identity-details';
import { KnowYourCustomer } from '../models/member/basic/kyc';
import { PayrollGroup } from '../models/member/basic/payroll-group';
import { PIPSelfDeclaration } from '../models/member/basic/pip-self-declaration';
import { Client } from '../models/member/client';
import { SmsService } from './sms-service';
import { SQSService } from './SQSService';
interface Employee {
  idNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  emailAddress: string;
  phoneNumber: string;
  payrollGroup: string;
  dateOfBirth: string;
}
interface ExcelRow {
  [key: string]: any;
}

class MPIService {
    logger: Logger

    constructor(protected db: DataSource,protected sms:SmsService,protected auth:Auth, loggerFactory:LoggerFactory) {
        this.logger = loggerFactory.getNamedLogger('mpi-fetch-account-service')
    }

    async  createAccount(data:Employee) {
      console.info('Data IN',data)
      const generatedPassword = this.generatePassword()
     
        let payrollGroups:PayrollGroup[]
        let group:PayrollGroup
        let client:Client 

        const getGroups = async()=>{
          const repo = this.db.getRepository(PayrollGroup)
          payrollGroups = await repo.find()
          return
        }

        const getRole = async()=>{
          let role:UserRole | null
          switch(data.payrollGroup){

            case 'BTU Member':
              group= getPayrollGroup('BTU Member')
              role =await this.getRole('BTU Member')
              break
              case 'MPI Staff':
                group= getPayrollGroup('MPI Staff')
                role =await this.getRole('BTU Member')
                break
                default:
                  group= getPayrollGroup('External')
                  role =await this.getRole('External/Other')
                  break
          }
          console.log('User Role',role?.id)

          return role
        }

        const save= async(role:UserRole)=>{
          let includeInFile = true
         
          switch(data.payrollGroup){
            case 'BTU Member':
              break
              case 'MPI Staff':
                break
                default:
                includeInFile = false
                  break
          }
          const c:Client = {
            contactNumber: data.phoneNumber,
            region: '',
            approved: true,
            includeInFile,
            approvedBy: -1,
            approvedAt: new Date(),
            school: '',
            identificationNumber: data.idNumber,
            dateOfBirth: new Date(data.dateOfBirth),
            occupation: '',
            membershipNumber: data.idNumber,
            nationality: '',
            gender: data.gender,
            payrollNumber: '',
            deductionSource: '',
            sector: '',
            district: '',
            payrollGroup:group,
            
            dependents: [],
            documents: [],
            reference: '',
            firstname: data.firstName,
            lastname: data.lastName,
            emailAddress: data.emailAddress,
            createdBy: -1,
            dateCreated: new Date(),
            lastUpdatedBy: -1,
            lastUpdated: new Date(),
            active: true,
            published: true,
            role
          }
          console.log('Saving',c)
          return this.db.getRepository(Client).save(c)
        }
        const getPayrollGroup = (ref:string)=>{
          let g:any = null
          for(var i=0;i<payrollGroups.length;i++){
            var group = payrollGroups[i]
            if(group.name.toLowerCase().includes(ref.toLowerCase())){
              g= group
              break
            }
          }
          return  g as PayrollGroup
        }
        const createKYC = async(_client:Client)=>{
          client  =_client
          client.kyc=  await this.createKYCProfile(client) 
          client.identificationNumber = data.idNumber
          console.log('KYC Created')
          return client
        }

        const createFirebaseAccount = async(c:Client)=>{
    
      
          var res = await this.auth.createUser({
            email:c.emailAddress,
            password:generatedPassword,
            displayName:`${c.firstname} ${c.lastname}`,
            emailVerified:true,
          })
          if(res.uid!=null && res.uid!=undefined){
              return res.uid
          }else{
           throw {
            code:304,
            message:'Unable to create account, please check for duplicate emails'
           } 
          }
        }
        const update = async(uid:string)=>{
          console.log('Firebase RSP',uid)
          const repo = this.db.getRepository(Client)
          client.reference = uid
          return repo.save
        }
        const notify = async()=>{
      
          return this.sms.sendMessage(`+267${client.contactNumber}`,`Dumelang ${client.firstname}! Welcome tothe MPI Portal. Please use the following details to login\n\nUsername:${client.emailAddress}\n\nPassword:${generatedPassword}\n\nPlease update you password once you login to keep your Account Secure`).then((res)=>{
              this.logger.info('SMS sent',res)
              console.log('SMS SENT',client.contactNumber,client)
              return 
          })
      }
       

        return getGroups()
        .then(getRole)
        .then(save)
        .then(createKYC)
        .then(createFirebaseAccount)
        .then(update)
        .then(notify)
      }
     
  
      private async getRole(name:string){
        const repo = this.db.getRepository(UserRole)
        return repo.findOne({
          where:{
            name
          }
        })
      }

  private createKYCProfile(client:Client){
    const kycRepo = this.db.getRepository(KnowYourCustomer)
    const idRepo = this.db.getRepository(IdentityDetails)
    const addressRepo = this.db.getRepository(AddressDetails)
    const empRepo = this.db.getRepository(EmploymentDetails)
    const pipRepo = this.db.getRepository(PIPSelfDeclaration)
   let kyc: KnowYourCustomer

    const createKyc =async()=>{
      const item:KnowYourCustomer={
        client: client
      }
      kyc= await kycRepo.save(item)
      return
    }
    const createIdProfile = async()=>{
      const ID:IdentityDetails={
        idNumber: client.identificationNumber,
        type: IdentityType.OMANG,
        
        fileId: 0,
        kyc
      }
      await idRepo.save(ID)
      return
    }
    const createAddressProfile = async()=>{
      const ID:AddressDetails={
        fileId: 0,
        kyc,
        plotNo: '',
        city: '',
        type:TenancyType.Rental
      }
      await addressRepo.save(ID)
      return
    }
    const createPIPProfile = async()=>{
      const ID:PIPSelfDeclaration={
        title: '',
        jurisdiction: '',
        startingYear: 0,
        endingYear: 0,
        type: {id:11,description:'Not Applicable'},
        published: true,
        kyc:kyc,
        createdBy: -1,
        dateCreated: new Date(),
        lastUpdatedBy: -1,
        lastUpdated: new Date(),
      }
      await pipRepo.save(ID)
      return
    }

    const createEmploymentProfile = async()=>{
      const ID:EmploymentDetails={
        kyc,
        employerName: '',
        position: ''
      }
      await empRepo.save(ID)
      return kyc
    }

    return createKyc()
    .then(createIdProfile)
    .then(createAddressProfile)
    .then(createPIPProfile)
    .then(createEmploymentProfile)


  }

  private generatePassword(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;

  }
}

export { MPIService }