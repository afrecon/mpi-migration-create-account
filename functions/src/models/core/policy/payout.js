"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyPayout = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../../enums/enum");
const table_1 = require("../../base/table");
const document_file_1 = require("../../document/document-file");
const policy_claim_1 = require("./policy-claim");
const refund_1 = require("./refund");
let PolicyPayout = class PolicyPayout extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PolicyPayout.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'enum', enum: enum_1.PayoutSource }),
    __metadata("design:type", String)
], PolicyPayout.prototype, "payoutSource", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'enum', enum: enum_1.PayoutType }),
    __metadata("design:type", String)
], PolicyPayout.prototype, "payoutType", void 0);
__decorate([
    typeorm_1.OneToOne(() => document_file_1.DocumentFile, account => account.payment, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", document_file_1.DocumentFile)
], PolicyPayout.prototype, "proofOfPayment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => refund_1.PolicyRefund, refund => refund.payouts),
    typeorm_1.JoinColumn(),
    __metadata("design:type", refund_1.PolicyRefund)
], PolicyPayout.prototype, "refund", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_claim_1.PolicyClaim, refund => refund.payouts),
    typeorm_1.JoinColumn(),
    __metadata("design:type", policy_claim_1.PolicyClaim)
], PolicyPayout.prototype, "claim", void 0);
PolicyPayout = __decorate([
    typeorm_1.Entity()
], PolicyPayout);
exports.PolicyPayout = PolicyPayout;
//# sourceMappingURL=payout.js.map