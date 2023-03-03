import { Entity, PrimaryGeneratedColumn,Column, OneToOne, JoinColumn } from "typeorm";
import { IdentityType } from "../../../enums/enum";
import { KnowYourCustomer } from './kyc';


/**
 * The List of important people types 
 */
@Entity()
class IdentityDetails {
  @PrimaryGeneratedColumn()
  id?:number
  
  @Column({nullable:false})
  idNumber: string;
  @Column({nullable:false,type:'enum',enum:IdentityType,default: IdentityType.OMANG})
 
  type: IdentityType;

  @Column({nullable:false})
  fileId: number; // reference
  
  @Column({nullable:true, type:'longtext'})
  fileUrl?: string; // referenceto document file

  @OneToOne(type => KnowYourCustomer, kyc => kyc.identityInfo)
  @JoinColumn()
  kyc: KnowYourCustomer;
 
}

export {IdentityDetails}