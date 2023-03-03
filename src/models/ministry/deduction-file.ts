import { Column, Entity,  JoinColumn,  ManyToOne,  OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DbTable } from "../base/table";
import { BTUSchemePackage } from "../core/schemes/BTUSchemePackage";
import { Client } from "../member/client";
 
@Entity()
class DeductionFile extends DbTable  {

    
  @Column()
  month: number; 

  @Column()
  year: number; 

  @Column()
  totalDeductionCount: number; 

  @Column()
  totalAmountDeducted: number; 

  @Column()
  totalReconcilliationCount: number; 


  @Column({nullable:true, type:'longtext'})
  inputFileUrl: string;


  @Column({nullable:true, type:'longtext'})
  outputFileUrl: string;


  @OneToMany(type => EmployeeDeductionRecord, kyc => kyc.deductionFile)
  deductions?: EmployeeDeductionRecord[];

  @OneToMany(type => EmployeePaymentRecord, kyc => kyc.deductionFile)
  payments?: EmployeePaymentRecord[];

}


@Entity()
class EmployeeDeductionRecord  {

@PrimaryGeneratedColumn()
id?: number; 
  
  @Column()
  totalDeductionAmount: number; 

  @Column()
  identityNumber: string; 
 
  @Column()
  fullName: string; 
  
  @Column()
  date: string;

  @ManyToOne(type => DeductionFile, kyc => kyc.deductions)
  deductionFile?: DeductionFile;

  @ManyToOne(type => Client, kyc => kyc.deductions)
  @JoinColumn()
  client?: Client;


}

@Entity()
class EmployeePaymentRecord  {

@PrimaryGeneratedColumn()
id?: number; 
  
  @Column()
  totalPaid: number; 

  @Column()
  identityNumber: string; 
  
  @Column()
  date: Date;

  @Column()
  totalUnallocatedAmount: number; 


  @ManyToOne(type => DeductionFile, kyc => kyc.payments)
  @JoinColumn()
  deductionFile?: DeductionFile;

  @ManyToOne(type => Client, kyc => kyc.deductions)
  @JoinColumn()
  client?: Client;

  @OneToMany(type => PaymentAllocation, kyc => kyc.employeeRecord)
  allocations?: PaymentAllocation[];
}


@Entity()
class PaymentAllocation  {

@PrimaryGeneratedColumn()
id?: number; 
  
  @Column()
  amountPaid: number; 

  @Column()
  description: string; 
  
  @Column()
  date: Date;

  @Column()
  totalUnallocatedAmount: number; 


  @ManyToOne(type => BTUSchemePackage, kyc => kyc.allocations)
  @JoinColumn()
  package?: BTUSchemePackage;

  @ManyToOne(type => EmployeePaymentRecord, kyc => kyc.allocations)
  @JoinColumn()
  employeeRecord?: EmployeePaymentRecord;

}

export { DeductionFile,EmployeeDeductionRecord , PaymentAllocation, EmployeePaymentRecord}
