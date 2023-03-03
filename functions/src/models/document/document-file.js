"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentFile = exports.DocumentType = void 0;
const typeorm_1 = require("typeorm");
const payout_1 = require("../core/policy/payout");
const policy_claim_1 = require("../core/policy/policy-claim");
const scheme_application_1 = require("../core/scheme-application");
const client_1 = require("../member/client");
let DocumentType = class DocumentType {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], DocumentType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], DocumentType.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], DocumentType.prototype, "lifetimeDays", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], DocumentType.prototype, "templateID", void 0);
__decorate([
    typeorm_1.Column({ default: false })
], DocumentType.prototype, "mergeNeeded", void 0);
DocumentType = __decorate([
    typeorm_1.Entity()
], DocumentType);
exports.DocumentType = DocumentType;
let DocumentFile = class DocumentFile {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], DocumentFile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], DocumentFile.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'longtext' })
], DocumentFile.prototype, "documentUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], DocumentFile.prototype, "storageRef", void 0);
__decorate([
    typeorm_1.ManyToOne(type => DocumentType, { nullable: false })
], DocumentFile.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_1.Client, { nullable: true })
], DocumentFile.prototype, "client", void 0);
__decorate([
    typeorm_1.Column({ default: false, nullable: false })
], DocumentFile.prototype, "verified", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], DocumentFile.prototype, "verifiedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], DocumentFile.prototype, "verifiedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], DocumentFile.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.ManyToMany(() => scheme_application_1.SchemeApplication)
], DocumentFile.prototype, "applications", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_claim_1.PolicyClaim, { nullable: true }),
    typeorm_1.JoinColumn()
], DocumentFile.prototype, "claim", void 0);
__decorate([
    typeorm_1.OneToOne(() => payout_1.PolicyPayout, account => account.proofOfPayment)
], DocumentFile.prototype, "payment", void 0);
DocumentFile = __decorate([
    typeorm_1.Entity()
], DocumentFile);
exports.DocumentFile = DocumentFile;
