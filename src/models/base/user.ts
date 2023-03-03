import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserRole } from "./role";

// Base user class
@Entity()
export class User  {
@PrimaryGeneratedColumn()
id?: number; 

@Column({type:'varchar'}) // authentication ID to be returned when creating new Firebase Auth user instance for member
reference: string; 
    
@Column()
firstname: string;

@Column()
lastname: string;

@Column({nullable: false})
emailAddress: string;

@Column({ nullable: false,type:'numeric'})
createdBy: number;
 
@Column({ nullable: false})
dateCreated: Date;

@Column({ nullable: false,type:'numeric'})
lastUpdatedBy: number;

@Column({ nullable: false})
lastUpdated: Date;

@Column({ nullable: false})
active: boolean;

@Column({ nullable: false})
published: boolean;

@ManyToOne(type => UserRole, {nullable:false})
role: UserRole;

}


