"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferPolicy = exports.PolicyTransferRequest = void 0;
const table_1 = require("./../../base/table");
const typeorm_1 = require("typeorm");
const dependent_1 = require("../../member/basic/dependent");
const client_1 = require("../../member/client");
const comment_1 = require("../../base/comment");
let PolicyTransferRequest = class PolicyTransferRequest extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "approved", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "approvedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "approvedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "recipientEmail", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "recipientPhone", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], PolicyTransferRequest.prototype, "transferLetterUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "transferLetterId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], PolicyTransferRequest.prototype, "deathCertificatUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "deathCertificateId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], PolicyTransferRequest.prototype, "authFileUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], PolicyTransferRequest.prototype, "authFileId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => dependent_1.Dependent, file => file.transferRequests, { cascade: true, }),
    typeorm_1.JoinColumn()
], PolicyTransferRequest.prototype, "recipient", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_1.Client, file => file.transferRequests, { cascade: true, }),
    typeorm_1.JoinColumn()
], PolicyTransferRequest.prototype, "mainMember", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, client => client.transfer, { nullable: false, cascade: true })
], PolicyTransferRequest.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => TransferPolicy, client => client.transfer, { nullable: false, cascade: true })
], PolicyTransferRequest.prototype, "policies", void 0);
PolicyTransferRequest = __decorate([
    typeorm_1.Entity()
], PolicyTransferRequest);
exports.PolicyTransferRequest = PolicyTransferRequest;
let TransferPolicy = class TransferPolicy {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], TransferPolicy.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], TransferPolicy.prototype, "policyId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], TransferPolicy.prototype, "value", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PolicyTransferRequest, client => client.policies),
    typeorm_1.JoinColumn()
], TransferPolicy.prototype, "transfer", void 0);
TransferPolicy = __decorate([
    typeorm_1.Entity()
], TransferPolicy);
exports.TransferPolicy = TransferPolicy;
