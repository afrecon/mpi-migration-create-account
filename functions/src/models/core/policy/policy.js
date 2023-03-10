"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = void 0;
const typeorm_1 = require("typeorm");
const comment_1 = require("../../base/comment");
const table_1 = require("../../base/table");
const beneficiary_1 = require("../../member/basic/beneficiary");
const client_1 = require("../../member/client");
const refund_1 = require("./refund");
const scheme_application_1 = require("../scheme-application");
const policy_amendment_1 = require("./policy-amendment");
const policy_claim_1 = require("./policy-claim");
let Policy = class Policy extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: true })
], Policy.prototype, "active", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: false })
], Policy.prototype, "isLegacy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Policy.prototype, "premium", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true })
], Policy.prototype, "approvedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Policy.prototype, "approvedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Policy.prototype, "policyNumber", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_1.Client, client => client.policies, { nullable: false }),
    typeorm_1.JoinColumn()
], Policy.prototype, "client", void 0);
__decorate([
    typeorm_1.OneToMany(() => policy_amendment_1.PolicyAmendment, client => client.policy, { nullable: false }),
    typeorm_1.JoinColumn()
], Policy.prototype, "amendments", void 0);
__decorate([
    typeorm_1.ManyToOne(() => beneficiary_1.Beneficiary, account => account.policies),
    typeorm_1.JoinColumn()
], Policy.prototype, "beneficiary", void 0);
__decorate([
    typeorm_1.OneToOne(() => scheme_application_1.SchemeApplication, account => account.policy, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true }),
    typeorm_1.JoinColumn()
], Policy.prototype, "application", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, client => client.policy, { nullable: false, cascade: true })
], Policy.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(type => refund_1.PolicyRefund, app => app.policy, { nullable: false, cascade: true })
], Policy.prototype, "refunds", void 0);
__decorate([
    typeorm_1.OneToMany(type => policy_claim_1.PolicyClaim, app => app.policy, { nullable: false, cascade: true })
], Policy.prototype, "claims", void 0);
Policy = __decorate([
    typeorm_1.Entity()
], Policy);
exports.Policy = Policy;
