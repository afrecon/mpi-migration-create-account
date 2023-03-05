import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserRole } from "./role";

// Base user class
@Entity()
export class User  {
@PrimaryGeneratedColumn()
id?: number; 

@Column({type:'varchar'}) // authentication ID to be returned when creating new Firebase Auth user instance for member
reference: string; 
    
@Column({type:'varchar'})
firstname: string;

@Column({type:'varchar'})
lastname: string;

@Column({nullable: false,type:'varchar'})
emailAddress: string;

@Column({ nullable: false,type:'numeric'})
createdBy: number;
 
@Column({ nullable: false,type:'date'})
dateCreated: Date;

@Column({ nullable: false,type:'numeric'})
lastUpdatedBy: number;

@Column({ nullable: false,type:'date'})
lastUpdated: Date;

@Column({ nullable: false,type:'bool'})
active: boolean;

@Column({ nullable: false, type:'bool'})
published: boolean;

@ManyToOne(type => UserRole, {nullable:false})
role: UserRole;

}


