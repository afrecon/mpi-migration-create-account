import { DependentType } from '../../../enums/enum';
import { EmploymentStatus, Gender } from '../../../enums/enum';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { MaritalStatus } from '../../../enums/enum';
import { Client } from '../client';
import { SchemeApplication } from '../../core/scheme-application';
import { PolicyTransferRequest } from '../../core/policy/policy-transfer-request';

@Entity()
class Dependent {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({nullable:true})
  identityNumber: string;

  @Column({nullable:false})
  firstName: string;

  @Column({nullable:true})
  middleName?: string;
  
  @Column({nullable:false})
  surname: string;

  @Column({nullable:false})
  dateOfBirth: Date;

  @Column({type:'enum',enum:Gender, nullable:false})
  gender: Gender;

  @Column({type:'enum',enum:DependentType, nullable:false})
  type: DependentType;

  @Column({nullable:true})
  relationship?: string;

  @Column({nullable:true})
  contactNumber?: string;

  @Column({type:'enum',enum:EmploymentStatus,default: EmploymentStatus.PERMANENT_PENSIONABLE})
  employmentStatus?: EmploymentStatus;

  @Column({type:'enum',enum:MaritalStatus,default: MaritalStatus.SINGLE})
  maritalStatus?: MaritalStatus;

  @Column({nullable:true})
  nextOfKin?: string;

  @Column({nullable:true})
  emailAddress?: string;

  @Column({nullable:true})
  numberOfDependents?: number;

  @Column({nullable:true})
  lastUpdatedBy?: number;

  @Column({nullable:true})
  lastUpdated?: Date;

  @Column({nullable:true})
  fileId?: number;

  @Column({nullable:true, type:'longtext'})
  fileUrl?: string;

  @ManyToOne(() => Client, client => client.dependents)
  client: Client;

  @ManyToMany(() => SchemeApplication)
  applications?: SchemeApplication[]
  
  @OneToMany(() => PolicyTransferRequest, item => item.recipient, {nullable:true})
  transferRequests?: PolicyTransferRequest[];
}

export { Dependent  }

