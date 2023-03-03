import { PayrollGroup } from './basic/payroll-group';
import { SchemeApplication } from '../core/scheme-application';

import { Entity, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../base/user';
import { Dependent } from './basic/dependent';
import { KnowYourCustomer } from './basic/kyc';
import { Spouse } from './basic/spouse';
import { TermsAndConditions } from './basic/term-and-conditions';
import { DocumentFile } from '../document/document-file';
import { Policy } from '../core/policy/policy';
import { PolicyTransferRequest } from '../core/policy/policy-transfer-request';
import { Comment } from '../base/comment';
import { EmployeeDeductionRecord } from '../ministry/deduction-file';

@Entity()
class Client extends User{

  @Column()
  contactNumber: string;

  @Column({nullable:true})
  region: string;

  @Column({nullable:true})
  approved: boolean;

  // flag for determining which clients to query for Minitry Output file
  @Column({nullable:true})
  includeInFile: boolean;

  @Column({nullable:true})
  approvedBy: number;

  @Column({nullable:true})
  approvedAt: Date;

  @Column({nullable:true})
  school: string;

  @Column({ type: 'varchar',  nullable:true })
  identificationNumber: string;


  @Column({nullable:true})
  dateOfBirth: Date;

  @Column({nullable:true})
  occupation: string;

  @Column({nullable:true, type: 'varchar', unique: true})
  membershipNumber: string;

  @Column({nullable:true})
  nationality: string;

  @Column({nullable:true})
  gender: string;

  @Column({nullable:true})
  payrollNumber: string;

  @Column({nullable:true})
  deductionSource: string;

  @Column({nullable:true})
  sector: string;

  @Column({nullable:true})
  district: string;

  @OneToOne(() => Spouse, spouse => spouse.member, { cascade: true,  onDelete:'CASCADE',onUpdate:'CASCADE',  nullable:true })
  @JoinColumn()
  spouse: Spouse;

  @ManyToOne(() => PayrollGroup, group => group.clients, { cascade: true,  onDelete:'CASCADE',onUpdate:'CASCADE',nullable:true })
  @JoinColumn()
  payrollGroup: PayrollGroup;

  @OneToOne(() => KnowYourCustomer, kyc => kyc.client, { cascade: true, nullable:true })
  @JoinColumn()
  kyc: KnowYourCustomer;
  
  @OneToOne(() => TermsAndConditions, terms => terms.client, { cascade: true,  onDelete:'CASCADE',onUpdate:'CASCADE', nullable:true})
  @JoinColumn()
  terms: TermsAndConditions;

  @OneToMany(() => PolicyTransferRequest, terms => terms.mainMember, {  nullable:true})
  transferRequests?: PolicyTransferRequest;

  @OneToMany(() => Dependent, (beneficiary) => beneficiary.client)
  @JoinColumn()
  dependents: Dependent[];

  @OneToMany(() => Comment, (comment) => comment.user)
  @JoinColumn()
  comments?: Comment[];

  @OneToMany(() => SchemeApplication, (app) => app.client)
  @JoinColumn()
  applications?: SchemeApplication[];

  @OneToMany(() => Policy, (app) => app.client)
  @JoinColumn()
  policies?: Policy[];

  @OneToMany(() => DocumentFile, (app) => app.client, { cascade: true ,nullable:true})
  @JoinColumn()
  documents: DocumentFile[];


  @OneToMany(type => EmployeeDeductionRecord, kyc => kyc.deductionFile)
  deductions?: EmployeeDeductionRecord[];


}


export {Client}

