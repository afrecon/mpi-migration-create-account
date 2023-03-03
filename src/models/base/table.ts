import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//Base Database Model
@Entity()
export class DbTable {
@PrimaryGeneratedColumn()
id?: number; 

@Column({type:'boolean'})
published: boolean;

  @Column({type:'numeric'})
  createdBy: number;
 
  @Column()
  dateCreated: Date;

  @Column({type:'numeric'})
  lastUpdatedBy: number;

  @Column()
  lastUpdated: Date;
}

