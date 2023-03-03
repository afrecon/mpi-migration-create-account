
import { Entity, Column, ManyToOne, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Comment } from "../../base/comment";
import { DbTable } from "../../base/table";
import { DocumentFile } from "../../document/document-file";
import { Dependent } from "../../member/basic/dependent";
//import { SchemeApplication } from "../scheme-application";
import { BTUSchemePackage } from "../schemes/BTUSchemePackage";
import { OptionAddOn } from "../schemes/OptionAddOn";
import { Policy } from "./policy";

@Entity()
 class PolicyAmendment extends DbTable {
  
  @Column({nullable:true})
  premiumUpdate?: number;

  @Column({type:'date' ,nullable:true})
  approvedAt?: Date;

  @Column({nullable:true})
  approvedBy?: number;

  @Column({nullable:true})
  beneficiaryId?: number;

  // @ManyToOne(() => SchemeApplication, client => client.amendments, {nullable:false})
  // @JoinColumn()
  // policy: SchemeApplication;
 
  @ManyToMany(() => Dependent)
  @JoinTable()
  dependentsUpdate?: Dependent[];

  @ManyToMany(() => OptionAddOn)
  @JoinTable()
  addonUpdate?: OptionAddOn[];

  @ManyToMany(() => DocumentFile)
  @JoinTable()
  documentUpdate?: DocumentFile[];

  @ManyToOne(() => BTUSchemePackage, item => item.amendments, {nullable:false})
  @JoinColumn()
  packageUpdate: BTUSchemePackage;

  @ManyToOne(() => Policy, item => item.amendments, {nullable:false})
  @JoinColumn()
  policy: Policy;

  @OneToMany(() => Comment, client => client.transfer, {nullable:false, cascade:true})
  comments?: Comment[];
}

export  {PolicyAmendment }
