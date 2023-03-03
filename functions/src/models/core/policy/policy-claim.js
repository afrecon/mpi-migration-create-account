"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyClaim = void 0;
const typeorm_1 = require("typeorm");
const comment_1 = require("../../base/comment");
const table_1 = require("../../base/table");
const policy_1 = require("./policy");
const payout_1 = require("./payout");
const document_file_1 = require("../../document/document-file");
let PolicyClaim = class PolicyClaim extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ type: 'varchar' })
], PolicyClaim.prototype, "status", void 0);
__decorate([
    typeorm_1.Column()
], PolicyClaim.prototype, "claimAmount", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyClaim.prototype, "approved", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyClaim.prototype, "approvedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyClaim.prototype, "approvedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyClaim.prototype, "verified", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyClaim.prototype, "verifiedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyClaim.prototype, "verifiedBy", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, app => app.claim, { nullable: false, cascade: true })
], PolicyClaim.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => payout_1.PolicyPayout, app => app.claim, { nullable: false, cascade: true })
], PolicyClaim.prototype, "payouts", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_1.Policy, policy => policy.claims)
], PolicyClaim.prototype, "policy", void 0);
__decorate([
    typeorm_1.OneToMany(() => document_file_1.DocumentFile, app => app.claim)
], PolicyClaim.prototype, "supportingDocuments", void 0);
PolicyClaim = __decorate([
    typeorm_1.Entity()
], PolicyClaim);
exports.PolicyClaim = PolicyClaim;
