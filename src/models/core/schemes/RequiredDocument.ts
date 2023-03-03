import { Entity, Column, ManyToMany } from "typeorm";
import { DbTable } from "../../base/table";
import { BTUScheme } from "./BTUScheme";

@Entity()
 class RequiredDocument extends DbTable {

  @Column({nullable:false})
  downloadUrl: string;

  @Column({nullable:false})
  name: string;

  @Column({nullable:false})
  downloadable: boolean;

  @ManyToMany(type => BTUScheme, {nullable:false})
  applicableSchemes?: BTUScheme[];
  

}
export  {RequiredDocument }
