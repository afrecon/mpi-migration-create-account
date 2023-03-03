import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user";
 
@Entity()
export class UserRole  {
@PrimaryGeneratedColumn()
id?: number; 

@Column({type:'varchar', unique: true}) // authentication ID to be returned when creating new Firebase Auth user instance for member
name: string; 

@Column({type:'numeric',})
securityLevel: number; 

@OneToMany(() => User, (user) => user.role,{nullable:true})
users?: User[]
    
}