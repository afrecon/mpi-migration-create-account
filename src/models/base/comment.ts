import { CommentStatus, CommentType } from './../../enums/enum';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Policy } from "../core/policy/policy";
import { PolicyAmendment } from "../core/policy/policy-amendment";
import { PolicyTransferRequest } from "../core/policy/policy-transfer-request";
import { SchemeApplication } from "../core/scheme-application";
import { KnowYourCustomer } from "../member/basic/kyc";
import { Client } from "../member/client";
import { PolicyRefund } from '../core/policy/refund';
import { PolicyClaim } from '../core/policy/policy-claim';
 
@Entity()
export class Comment  {
@PrimaryGeneratedColumn()
id?: number; 

@Column() // authentication ID to be returned when creating new Firebase Auth user instance for member
description: string; 

@Column({type:'enum',enum:CommentStatus,default:CommentStatus.DELIVERED}) // authentication ID to be returned when creating new Firebase Auth user instance for member
status: CommentStatus; 

@Column({type:'enum',enum:CommentType,nullable:true}) // authentication ID to be returned when creating new Firebase Auth user instance for member
type: CommentType; 

@Column() // authentication ID to be returned when creating new Firebase Auth user instance for member
highlight: boolean; 

@Column() // authentication ID to be returned when creating new Firebase Auth user instance for member
published: boolean; 

@Column()
date: Date; 

@ManyToOne(() => Client, (user) => user.comments,{nullable:true})
@JoinColumn()
user: Client

@ManyToOne(() => SchemeApplication, (user) => user.comments,{nullable:true})
@JoinColumn()
application?: SchemeApplication

@ManyToOne(() => Policy, (user) => user.comments,{nullable:true})
@JoinColumn()
policy?: Policy
    
@ManyToOne(() => PolicyTransferRequest, (user) => user.comments,{nullable:true})
@JoinColumn()
transfer?: PolicyTransferRequest

@ManyToOne(() => PolicyAmendment, (user) => user.comments,{nullable:true})
@JoinColumn()
amendment?: PolicyAmendment

@ManyToOne(() => KnowYourCustomer, (user) => user.comments,{nullable:true})
@JoinColumn()
kyc?: KnowYourCustomer

@ManyToOne(() => PolicyRefund, (user) => user.comments,{nullable:true})
@JoinColumn()
refund?: PolicyRefund

@ManyToOne(() => PolicyClaim, (user) => user.comments,{nullable:true})
@JoinColumn()
claim?: PolicyClaim
}