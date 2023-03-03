
import { Entity, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Comment } from "../../base/comment";
import { DbTable } from "../../base/table";
import { Beneficiary } from "../../member/basic/beneficiary";
import { Client } from "../../member/client";
import { PolicyRefund } from "./refund";
import { SchemeApplication } from "../scheme-application";
import { PolicyAmendment } from "./policy-amendment";
import { PolicyClaim } from "./policy-claim";

@Entity()
 class Policy extends DbTable {
  
  @Column({nullable:true})
  active?: boolean;

  @Column({nullable:true, default:false})
  isLegacy?: boolean;

  @Column({nullable:true})
  premium?: number;

  @Column({type:'date' ,nullable:true})
  approvedAt?: Date;

  @Column({nullable:true})
  approvedBy?: number;

  
  @Column({nullable:true})
  policyNumber?: string;

  @ManyToOne(() => Client, client => client.policies, {nullable:false})
  @JoinColumn()
  client: Client;

  @OneToMany(() => PolicyAmendment, client => client.policy, {nullable:false})
  @JoinColumn()
  amendments?: PolicyAmendment;

  @ManyToOne(() => Beneficiary, account => account.policies)
  @JoinColumn()
  beneficiary?: Beneficiary;

  @OneToOne(() => SchemeApplication, account => account.policy, { cascade: true,  onDelete:'CASCADE',onUpdate:'CASCADE', nullable:true})
  @JoinColumn()
  application?: SchemeApplication;

  @OneToMany(() => Comment, client => client.policy, {nullable:false, cascade:true})
  comments?: Comment[];

  @OneToMany(type => PolicyRefund, app => app.policy, {nullable:false, cascade:true})
  refunds?: PolicyRefund[];

  @OneToMany(type => PolicyClaim, app => app.policy, {nullable:false, cascade:true})
  claims?: PolicyClaim[];
 

}

export  {Policy }
