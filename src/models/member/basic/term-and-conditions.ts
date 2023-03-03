import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Client } from "../client";
 

@Entity()
class TermsAndConditions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateAccepted: Date;

  @Column()
  terms: string; //raw html from tinyMCE

  @OneToOne(type => Client, client => client.terms)
  client: Client;
}

export { TermsAndConditions }