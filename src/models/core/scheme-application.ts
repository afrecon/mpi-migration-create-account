import { JoinTable, ManyToMany, OneToOne, OneToMany } from 'typeorm';
import { Column, JoinColumn } from 'typeorm';
import { Client } from '../member/client';
import { ManyToOne } from 'typeorm';
import { DbTable } from '../base/table'; ;
import { Entity, } from 'typeorm';
import { Dependent } from '../member/basic/dependent';
import { OptionAddOn } from './schemes/OptionAddOn';
import { BTUSchemePackage } from './schemes/BTUSchemePackage';
import { DocumentFile } from '../document/document-file';
import { BankDetails } from '../member/basic/bank-details';
import { Policy } from './policy/policy';
import { Comment } from '../base/comment';


@Entity()
class SchemeApplication extends DbTable {

@Column({nullable:true})
applicationNumber?: string;

@Column({nullable:true})
policyNumber?: string;

@Column({nullable:true, default:false})
approved: boolean;

@Column({nullable:true})
approvedAt: Date;

@Column({nullable:true})
approvedBy: number;

@Column({nullable:true, default:'PENDING'})
status?: string;

@Column({nullable:true})
authoristionUrl?: string;
  
@Column({nullable:false, default:0})
vatApplied?: number;

@Column({nullable:false})
deductionAmount: number; // monthly

@Column({nullable:false})
beneficiaryId: number; // 

@Column({nullable:false})
isPolicy: boolean; // monthly

@ManyToMany(() => Dependent, (user) => user.applications)
@JoinTable()
dependents: Dependent[];

@ManyToMany(() => OptionAddOn, (user) => user.applications)
@JoinTable()
addons?: OptionAddOn[];

@ManyToMany(() => DocumentFile, (user) => user.applications)
@JoinTable()
documents: DocumentFile[];

@ManyToOne(type => BTUSchemePackage, _package => _package.applications, {nullable:true, cascade:true})
@JoinColumn()
package: BTUSchemePackage;

@ManyToOne(() => BankDetails, account => account.applications)
@JoinColumn()
refundAccount?: BankDetails;

@OneToOne(() => Policy, account => account.application)
policy?: Policy;

@ManyToOne(type => Client, client => client.applications, {nullable:false})
@JoinColumn()
client: Client;

@OneToMany(type => Comment, app => app.application, {nullable:false, cascade:true})
comments?: Comment[];

}


export { SchemeApplication }




