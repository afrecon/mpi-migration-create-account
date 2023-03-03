import { DbTable } from './../../base/table';
  
import { Entity, Column, JoinColumn, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Dependent } from '../../member/basic/dependent';
import { Client } from '../../member/client';
import { Comment } from '../../base/comment';
 

@Entity()
class PolicyTransferRequest extends DbTable {

  @Column({nullable:true})
  approved?: boolean;

  @Column({nullable:true})
  approvedAt?: Date;
  @Column({nullable:true})
  status?: string;

  @Column({nullable:true})
  approvedBy?: number;
 
  @Column({nullable:true})
  recipientEmail?: string;

  @Column({nullable:true})
  recipientPhone?: string;


  @Column({nullable:true,type:'longtext'})
  transferLetterUrl: string;

  @Column({nullable:true})
  transferLetterId: number;

  @Column({nullable:true, type:'longtext'})
  deathCertificatUrl: string;

  @Column({nullable:true})
  deathCertificateId: number;

  @Column({nullable:true, type:'longtext'})
  authFileUrl: string;

  @Column({nullable:true})
  authFileId: number;

  @ManyToOne(() => Dependent, file => file.transferRequests, {cascade: true,})
  @JoinColumn()
  recipient: Dependent;

  @ManyToOne(() => Client, file => file.transferRequests, { cascade: true,})
  @JoinColumn()
  mainMember: Client;
  
  @OneToMany(() => Comment, client => client.transfer, {nullable:false, cascade:true})
  comments?: Comment[];

  @OneToMany(() => TransferPolicy, client => client.transfer, {nullable:false, cascade:true})
  policies?: TransferPolicy[];

}
@Entity()
class TransferPolicy  {

  @PrimaryGeneratedColumn()
  id?: number; 

  @Column({nullable:true})
  policyId: number;

  @Column({nullable:true})
  value: number;

  

  @ManyToOne(() => PolicyTransferRequest, client => client.policies)
  @JoinColumn()
  transfer: PolicyTransferRequest;

}

export { PolicyTransferRequest, TransferPolicy }

 
