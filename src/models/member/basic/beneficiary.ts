import { DependentType } from '../../../enums/enum';
import {  Gender } from '../../../enums/enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from 'typeorm';
import { Policy } from '../../core/policy/policy';
//import { SchemeApplication } from '../../core/scheme-application'; 

@Entity()
class Beneficiary {
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


  @Column({nullable:true})
  lastUpdatedBy?: number;

  @Column({nullable:true})
  lastUpdated?: Date;

  @Column({nullable:true})
  fileId?: number;

  @Column({nullable:true, type:'longtext'})
  fileUrl?: string;

  @OneToMany(type => Policy, kyc => kyc.beneficiary)
  policies?: Policy[];


  // @OneToOne(type => PolicyAmendment, kyc => kyc.beneficiary)
  // @JoinColumn()
  // amendment?: PolicyAmendment;

}

export { Beneficiary  }

