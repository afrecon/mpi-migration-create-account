import { Client } from '../client';

import { Entity, PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";


/**
 * The List of important people types 
 */
@Entity()
class PayrollGroup {
  @PrimaryGeneratedColumn()
  id:number
  
  @Column({nullable:false})
  name: string;


  @OneToMany(() => Client, (pip) => pip.payrollGroup,{nullable:true})
  clients: Client[]
}

export {PayrollGroup}