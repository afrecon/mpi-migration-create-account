import { DbTable } from '../../base/table';
//PIP stand for Prominent Influential Person 
import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { KnowYourCustomer } from './kyc';


/**
 * The List of important people types 
 */
@Entity()
export class PIPType {
  @PrimaryGeneratedColumn()
  id:number
  
  @Column({nullable:false})
  description: string;

  @OneToMany(() => PIPSelfDeclaration, (pip) => pip.type,{nullable:true})
  declarations?: PIPSelfDeclaration[]

}

@Entity()
export class PIPSelfDeclaration extends DbTable {

  @Column({nullable:false})
  title: string;

  @Column({nullable:false})
  jurisdiction: string;

  @Column({type:'year', nullable:false})
  startingYear: number;

  @Column({type:'year', nullable:true})
  endingYear: number;

  @ManyToOne(type => PIPType, {nullable:false})
  type: PIPType;
  
  @OneToOne(type => KnowYourCustomer, kyc => kyc.pip)
  @JoinColumn()
  kyc?: KnowYourCustomer;

}




 