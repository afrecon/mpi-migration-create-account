import { PIPSelfDeclaration } from './pip-self-declaration';
  
import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm";
import { Client } from "../client";
import { BankDetails } from "./bank-details";
import { EmploymentDetails } from "./employment-details";
import { IdentityDetails } from "./identity-details";
import { AddressDetails } from "./address-details";
import { Comment } from '../../base/comment';
 

@Entity()
class KnowYourCustomer {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => AddressDetails, file => file.kyc, { cascade: true , nullable:true})
  addressInfo?: AddressDetails;

  @OneToMany(() => BankDetails, file => file.kyc, { cascade: true , nullable:true})
  bankAccounts?: BankDetails[];

  @OneToOne(() => IdentityDetails, file => file.kyc, { cascade: true , nullable:true})
  identityInfo?: IdentityDetails;

  @OneToOne(() => EmploymentDetails, member => member.kyc, { cascade: true , nullable:true})
  employmentInfo?: EmploymentDetails;

  @OneToOne(() => PIPSelfDeclaration, member => member.kyc, { cascade: true , nullable:true})
  pip?: PIPSelfDeclaration;

  @OneToOne(() => Client, member => member.kyc, )
  client: Client;

  @OneToMany(() => Comment, client => client.kyc, {nullable:false, cascade:true})
  comments?: Comment[];
}

export { KnowYourCustomer }

 
