
import { Entity, PrimaryGeneratedColumn,Column,  OneToOne, JoinColumn } from "typeorm";
import { KnowYourCustomer } from './kyc';


/**
 * The List of important people types 
 */
@Entity()
class EmploymentDetails {
  @PrimaryGeneratedColumn()
  id?:number
  
  @Column({nullable:false})
  employerName: string;

  @Column({nullable:false})
  position: string;

  @Column({nullable:true})
  employerContact?: string;

  @Column({nullable:true})
  departmentName?: string;

  @Column({nullable:true})
  employeeNumber?: string;

 @Column({nullable:true})
  payrollId?: string;

  @Column({nullable:true})
  basicSalary?: number;

  @Column({nullable:true})
  yearStart?: string;

  @Column({nullable:true})
  yearEnded?: string;

  @Column({nullable:true})
  payslipFileId?: number;

  @Column({nullable:true})
  employmentLetterFileId?: number;
  @Column({nullable:true, type:'longtext'})
  employmentLetterUrl?: string;
  @Column({nullable:true, type:'longtext'})
  payslipUrl?: string;

  @OneToOne(type => KnowYourCustomer, kyc => kyc.employmentInfo)
  @JoinColumn()
  kyc: KnowYourCustomer;
}

export {EmploymentDetails}