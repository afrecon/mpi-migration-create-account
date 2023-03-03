import { Entity, Column, ManyToMany } from "typeorm";
import { DbTable } from "../../base/table";
import { BTUScheme } from "./BTUScheme";

@Entity()
 class ApplicationChecklistItem extends DbTable {

  @Column({nullable:false})
  name: string;

  @Column({nullable:true})
  description: string;

  @Column({nullable:false})
  mandatory: boolean;

  @ManyToMany(type => BTUScheme, {nullable:false})
  applicableSchemes?: BTUScheme[];
  

}
export  {ApplicationChecklistItem }
