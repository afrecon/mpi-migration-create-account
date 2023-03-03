import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToOne, JoinColumn } from "typeorm";
import { PolicyPayout } from "../core/policy/payout";
import { PolicyClaim } from "../core/policy/policy-claim";

import { SchemeApplication } from "../core/scheme-application";
import { Client } from '../member/client';


@Entity()
export class DocumentType {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column({nullable: false})
  lifetimeDays: number;

  @Column({nullable:true})
  templateID?: string;

  @Column({default:false})
  mergeNeeded: boolean;

}

@Entity()
class DocumentFile {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({nullable:true})
  lastUpdatedBy: number;

  @Column({nullable:false, type:'longtext'})
  documentUrl: string;

  @Column({nullable:false})
  storageRef: string;

  @ManyToOne(type => DocumentType ,{nullable:false})
  type: DocumentType;

  @ManyToOne(type => Client, {nullable:true})
  client?: Client;

  @Column({default:false, nullable:false})
  verified: boolean;

  @Column({nullable:true})
  verifiedBy?: number;

  @Column({nullable:true})
  verifiedAt?: Date;

  @Column({nullable:true})
  lastUpdated?: Date;

  @ManyToMany(() => SchemeApplication)
  applications?: SchemeApplication[]

  @ManyToOne(() => PolicyClaim, {nullable:true})
  @JoinColumn()
  claim?: PolicyClaim;

  @OneToOne(() => PolicyPayout, account => account.proofOfPayment)
  payment?: PolicyPayout;

}
export { DocumentFile}

