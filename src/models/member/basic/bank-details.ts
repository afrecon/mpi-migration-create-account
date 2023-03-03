
import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, OneToMany } from "typeorm";
import { SchemeApplication } from "../../core/scheme-application";
import { KnowYourCustomer } from './kyc';


/**
 * The List of important people types 
 */
@Entity()
class BankDetails {
  @PrimaryGeneratedColumn()
  id:number
  
  @Column({nullable:false})
  bankName: string;
  @Column({nullable:false})
  branchName: string;
  @Column({nullable:false})
  branchCode: string;

  @Column({nullable:false})
  accountNumber: string;

  @Column({nullable:false})
  bankStatementFileId: number;

  @ManyToOne(type => KnowYourCustomer, kyc => kyc.bankAccounts)
  kyc: KnowYourCustomer;

  @OneToMany(type => SchemeApplication, kyc => kyc.refundAccount)
  applications?: SchemeApplication[];
 
}

export {BankDetails}