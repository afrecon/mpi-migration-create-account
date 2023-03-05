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
exports.PolicyRefund = void 0;
const typeorm_1 = require("typeorm");
const comment_1 = require("../../base/comment");
const table_1 = require("../../base/table");
const policy_1 = require("./policy");
const payout_1 = require("./payout");
let PolicyRefund = class PolicyRefund extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], PolicyRefund.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ type: 'longtext' }),
    __metadata("design:type", String)
], PolicyRefund.prototype, "evidenceFileUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PolicyRefund.prototype, "evidenceFileId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PolicyRefund.prototype, "refundAmount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PolicyRefund.prototype, "finalRefundAmount", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], PolicyRefund.prototype, "excessPaymentVerified", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], PolicyRefund.prototype, "approved", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], PolicyRefund.prototype, "approvedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PolicyRefund.prototype, "approvedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], PolicyRefund.prototype, "verified", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], PolicyRefund.prototype, "verifiedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PolicyRefund.prototype, "verifiedBy", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, app => app.refund, { nullable: false, cascade: true }),
    __metadata("design:type", Array)
], PolicyRefund.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => payout_1.PolicyPayout, app => app.refund, { nullable: false, cascade: true }),
    __metadata("design:type", Array)
], PolicyRefund.prototype, "payouts", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_1.Policy, policy => policy.refunds),
    __metadata("design:type", policy_1.Policy)
], PolicyRefund.prototype, "policy", void 0);
PolicyRefund = __decorate([
    typeorm_1.Entity()
], PolicyRefund);
exports.PolicyRefund = PolicyRefund;
//# sourceMappingURL=refund.js.map