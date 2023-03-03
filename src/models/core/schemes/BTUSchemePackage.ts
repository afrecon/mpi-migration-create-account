import { Entity, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { DbTable } from "../../base/table";
import { PaymentAllocation } from "../../ministry/deduction-file";
import { PolicyAmendment } from "../policy/policy-amendment";
import { SchemeApplication } from "../scheme-application";
import { BTUScheme } from "./BTUScheme";
import { OptionAddOn } from "./OptionAddOn";
 
@Entity()
class BTUSchemePackage extends DbTable {

  @Column({nullable:false, unique:true})
  title: string;

  @Column({nullable:true,type:'longtext'})
  description: string;

  @Column({nullable:false, default:0})
  premium: number;

  @ManyToOne(type => BTUScheme, client => client.packages)
  @JoinColumn()
  scheme: BTUScheme;

  @ManyToMany(() => OptionAddOn)
  @JoinTable()
  addOns?: OptionAddOn[];

  @ManyToMany(() => SchemeApplication)
  @JoinTable()
  applications?: SchemeApplication[];

  @ManyToMany(() => PolicyAmendment)
  @JoinTable()
  amendments?: PolicyAmendment[];

  @OneToMany(type => PaymentAllocation, kyc => kyc.package)
  allocations?: PaymentAllocation[];
}
export {BTUSchemePackage}
