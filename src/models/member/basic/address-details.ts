import { TenancyType } from './../../../enums/enum';
import { Entity, PrimaryGeneratedColumn,Column, OneToOne, JoinColumn } from "typeorm";
import { KnowYourCustomer } from './kyc';


/**
 * The List of important people types 
 */
@Entity()
class AddressDetails {
  @PrimaryGeneratedColumn()
  id?:number
  
  @Column({nullable:true})
  plotNo: string;

  @Column({nullable:true})
  streetName?: string;

  @Column({nullable:true})
  ward?: string;

  @Column({nullable:true})
  city: string;

  @Column({nullable:true})
  district?: string;

  @Column({nullable:false,type:'enum',enum:TenancyType,default: TenancyType.Rental })
  type: TenancyType;

  @Column({nullable:true})
  fileId?: number; // reference to document file - proof of residence

  @Column({nullable:true, type:'longtext'})
  fileUrl?: string; // referenceto document file

  @OneToOne(type => KnowYourCustomer, kyc => kyc.addressInfo)
  @JoinColumn()
  kyc: KnowYourCustomer;
 
}

export {AddressDetails}