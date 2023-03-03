import { Entity, Column, OneToOne } from "typeorm";
import { DbTable } from "../../base/table";
import { Client } from "../client";

@Entity()
class Spouse extends DbTable {

  @Column({nullable:false})
  firstName: string;

  @Column({nullable:false})
  surname: string;

  @Column({ type: 'varchar', unique: true })
  identificationNumber: string;

  @Column({nullable:true})
  cellphoneNumber: string;

  @Column({nullable:true})
  postalAddress: string;

  @Column({nullable:true})
  dateOfBirth: Date;

  @Column({nullable:true})
  email: string;

  @Column({nullable:true})
  marriageCertificateUrl: string;

  @Column({nullable:true})
  divorceCertificateUrl: string;

  @OneToOne(type => Client, member => member.spouse)
  member: Client;
}

export{ Spouse }
