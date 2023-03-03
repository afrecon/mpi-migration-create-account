
import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { Comment } from "../../base/comment";
import { DbTable } from "../../base/table";
import { Policy } from "./policy";
import { PolicyPayout } from './payout';

//Base Database Model
@Entity()
 class PolicyRefund extends DbTable {

@Column({type:'varchar'})
status: string;
@Column({type:'longtext'})
evidenceFileUrl: string;
@Column()
evidenceFileId: number;
@Column()
refundAmount: number;
@Column()
finalRefundAmount?: number;
@Column({nullable:true})
excessPaymentVerified?:boolean
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
@OneToMany(() => Comment, app => app.refund, {nullable:false, cascade:true})
comments?: Comment[];

@OneToMany(() => PolicyPayout, app => app.refund, {nullable:false, cascade:true})
payouts?: PolicyPayout[];

@ManyToOne(() => Policy, policy => policy.refunds)
policy: Policy;

}





export{ PolicyRefund}