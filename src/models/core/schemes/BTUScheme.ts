
import {  JoinColumn, OneToMany } from 'typeorm';
import { DbTable } from '../../base/table';
import { BTUSchemeCategory } from '../../../enums/enum';

import { Entity, Column, } from 'typeorm';
import { BTUSchemePackage } from './BTUSchemePackage';
import { RequiredDocument } from './RequiredDocument';
import {  ApplicationChecklistItem } from './ApplicationChecklistItem';


@Entity()
class BTUScheme extends DbTable {

  @Column({nullable:false, unique:true})
  title: string;

  @Column({nullable:true, type:'longtext'})
  description: string;

  @Column({nullable:false})
  imageUrl: string;

  @Column({nullable:true, default:0})
  managementFee?: number;

  @Column({nullable:false, type:'enum',enum:BTUSchemeCategory})
  category: BTUSchemeCategory;

  // the available packages 
  @OneToMany(() => BTUSchemePackage, btu_package => btu_package.scheme, { cascade: true , nullable:true})
  @JoinColumn()
  packages?: BTUSchemePackage[];


  @OneToMany(() => RequiredDocument, doc => doc.applicableSchemes)
  @JoinColumn()
  requiredDocuments?: RequiredDocument[];

  @OneToMany(() => ApplicationChecklistItem, doc => doc.applicableSchemes, { cascade: true , nullable:true})
  @JoinColumn()
  checklist?: ApplicationChecklistItem[];

}

export { BTUScheme }


