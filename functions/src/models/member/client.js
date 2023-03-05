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
exports.Client = void 0;
const payroll_group_1 = require("./basic/payroll-group");
const scheme_application_1 = require("../core/scheme-application");
const typeorm_1 = require("typeorm");
const user_1 = require("../base/user");
const dependent_1 = require("./basic/dependent");
const kyc_1 = require("./basic/kyc");
const spouse_1 = require("./basic/spouse");
const term_and_conditions_1 = require("./basic/term-and-conditions");
const document_file_1 = require("../document/document-file");
const policy_1 = require("../core/policy/policy");
const policy_transfer_request_1 = require("../core/policy/policy-transfer-request");
const comment_1 = require("../base/comment");
const deduction_file_1 = require("../ministry/deduction-file");
let Client = class Client extends user_1.User {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "contactNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "region", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], Client.prototype, "approved", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], Client.prototype, "includeInFile", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Client.prototype, "approvedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Client.prototype, "approvedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "school", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "identificationNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Client.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "occupation", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Client.prototype, "membershipNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "nationality", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "payrollNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "deductionSource", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "sector", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "district", void 0);
__decorate([
    typeorm_1.OneToOne(() => spouse_1.Spouse, spouse => spouse.member, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", spouse_1.Spouse)
], Client.prototype, "spouse", void 0);
__decorate([
    typeorm_1.ManyToOne(() => payroll_group_1.PayrollGroup, group => group.clients, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", payroll_group_1.PayrollGroup)
], Client.prototype, "payrollGroup", void 0);
__decorate([
    typeorm_1.OneToOne(() => kyc_1.KnowYourCustomer, kyc => kyc.client, { cascade: true, nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", kyc_1.KnowYourCustomer)
], Client.prototype, "kyc", void 0);
__decorate([
    typeorm_1.OneToOne(() => term_and_conditions_1.TermsAndConditions, terms => terms.client, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", term_and_conditions_1.TermsAndConditions)
], Client.prototype, "terms", void 0);
__decorate([
    typeorm_1.OneToMany(() => policy_transfer_request_1.PolicyTransferRequest, terms => terms.mainMember, { nullable: true }),
    __metadata("design:type", policy_transfer_request_1.PolicyTransferRequest)
], Client.prototype, "transferRequests", void 0);
__decorate([
    typeorm_1.OneToMany(() => dependent_1.Dependent, (beneficiary) => beneficiary.client),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Client.prototype, "dependents", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, (comment) => comment.user),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Client.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => scheme_application_1.SchemeApplication, (app) => app.client),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Client.prototype, "applications", void 0);
__decorate([
    typeorm_1.OneToMany(() => policy_1.Policy, (app) => app.client),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Client.prototype, "policies", void 0);
__decorate([
    typeorm_1.OneToMany(() => document_file_1.DocumentFile, (app) => app.client, { cascade: true, nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Client.prototype, "documents", void 0);
__decorate([
    typeorm_1.OneToMany(type => deduction_file_1.EmployeeDeductionRecord, kyc => kyc.deductionFile),
    __metadata("design:type", Array)
], Client.prototype, "deductions", void 0);
Client = __decorate([
    typeorm_1.Entity()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map