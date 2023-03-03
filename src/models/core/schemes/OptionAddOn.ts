import { Entity, Column, ManyToMany } from "typeorm";
import { AddOnType } from "../../../enums/enum";
import { DbTable } from "../../base/table";
import { SchemeApplication } from "../scheme-application";
import { BTUSchemePackage } from "./BTUSchemePackage";

@Entity()
 class OptionAddOn extends DbTable {

  @Column({nullable:false, unique:true})
  name: string;
  
  @Column({nullable:false, default:0})
  premium: number;

  @Column({nullable:true, default:0})
  minAgeRule?: number;

  @Column({nullable:true, default:0})
  maxAgeRule?: number;

  @Column({type:'enum',enum:AddOnType, nullable:false, default:AddOnType.FIXED_PRICE})
  type: AddOnType

  @ManyToMany(() => BTUSchemePackage)
  packages?: BTUSchemePackage[]

  @ManyToMany(() => SchemeApplication)
  applications?: SchemeApplication[]

}
export  {OptionAddOn }
