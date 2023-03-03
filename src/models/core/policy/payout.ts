import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { PayoutSource,PayoutType } from "../../../enums/enum";
import { DbTable } from "../../base/table";
import { DocumentFile } from "../../document/document-file";
import { PolicyClaim } from "./policy-claim";
import { PolicyRefund } from "./refund";

@Entity()
export class PolicyPayout extends DbTable {
 
  @Column({nullable:true})
  amount: number;

  @Column({nullable:false, type:'enum',enum: PayoutSource})
  payoutSource: PayoutSource;

  @Column({nullable:false, type:'enum',enum: PayoutType})
  payoutType: PayoutType;
  
  @OneToOne(() => DocumentFile, account => account.payment, { cascade: true,  onDelete:'CASCADE',onUpdate:'CASCADE', nullable:true})
  @JoinColumn()
  proofOfPayment?: DocumentFile;


  @ManyToOne(() => PolicyRefund, refund => refund.payouts)
  @JoinColumn()
  refund?: PolicyRefund;

  @ManyToOne(() => PolicyClaim, refund => refund.payouts)
  @JoinColumn()
  claim?: PolicyClaim;

}