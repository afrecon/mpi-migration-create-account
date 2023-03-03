
import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { Comment } from "../../base/comment";
import { DbTable } from "../../base/table";
import { Policy } from "./policy";
import { PolicyPayout } from './payout';
import { DocumentFile } from "../../document/document-file";

//Base Database Model
@Entity()
 class PolicyClaim extends DbTable {

@Column({type:'varchar'})
status: string;

@Column()
claimAmount: number;

@Column({nullable:true})
approved?:boolean

@Column({nullable:true})
approvedAt?:Date

@Column({nullable:true})
approvedBy?:number 

@Column({nullable:true})
verified?:boolean

@Column({nullable:true})
verifiedAt?:Date

@Column({nullable:true})
verifiedBy?:number 

@OneToMany(() => Comment, app => app.claim, {nullable:false, cascade:true})
comments?: Comment[];

@OneToMany(() => PolicyPayout, app => app.claim, {nullable:false, cascade:true})
payouts?: PolicyPayout[];

@ManyToOne(() => Policy, policy => policy.claims)
policy?: Policy;

@OneToMany(() => DocumentFile, app => app.claim)
supportingDocuments?: DocumentFile[];
}





export{ PolicyClaim}