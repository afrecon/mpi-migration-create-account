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
exports.DocumentFile = exports.DocumentType = void 0;
const typeorm_1 = require("typeorm");
const payout_1 = require("../core/policy/payout");
const policy_claim_1 = require("../core/policy/policy-claim");
const scheme_application_1 = require("../core/scheme-application");
const client_1 = require("../member/client");
let DocumentType = class DocumentType {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DocumentType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DocumentType.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], DocumentType.prototype, "lifetimeDays", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], DocumentType.prototype, "templateID", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], DocumentType.prototype, "mergeNeeded", void 0);
DocumentType = __decorate([
    typeorm_1.Entity()
], DocumentType);
exports.DocumentType = DocumentType;
let DocumentFile = class DocumentFile {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DocumentFile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], DocumentFile.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'longtext' }),
    __metadata("design:type", String)
], DocumentFile.prototype, "documentUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], DocumentFile.prototype, "storageRef", void 0);
__decorate([
    typeorm_1.ManyToOne(type => DocumentType, { nullable: false }),
    __metadata("design:type", DocumentType)
], DocumentFile.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_1.Client, { nullable: true }),
    __metadata("design:type", client_1.Client)
], DocumentFile.prototype, "client", void 0);
__decorate([
    typeorm_1.Column({ default: false, nullable: false }),
    __metadata("design:type", Boolean)
], DocumentFile.prototype, "verified", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], DocumentFile.prototype, "verifiedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], DocumentFile.prototype, "verifiedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], DocumentFile.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.ManyToMany(() => scheme_application_1.SchemeApplication),
    __metadata("design:type", Array)
], DocumentFile.prototype, "applications", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_claim_1.PolicyClaim, { nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", policy_claim_1.PolicyClaim)
], DocumentFile.prototype, "claim", void 0);
__decorate([
    typeorm_1.OneToOne(() => payout_1.PolicyPayout, account => account.proofOfPayment),
    __metadata("design:type", payout_1.PolicyPayout)
], DocumentFile.prototype, "payment", void 0);
DocumentFile = __decorate([
    typeorm_1.Entity()
], DocumentFile);
exports.DocumentFile = DocumentFile;
//# sourceMappingURL=document-file.js.map