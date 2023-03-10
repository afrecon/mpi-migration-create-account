"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemeApplication = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const client_1 = require("../member/client");
const typeorm_3 = require("typeorm");
const table_1 = require("../base/table");
;
const typeorm_4 = require("typeorm");
const dependent_1 = require("../member/basic/dependent");
const OptionAddOn_1 = require("./schemes/OptionAddOn");
const BTUSchemePackage_1 = require("./schemes/BTUSchemePackage");
const document_file_1 = require("../document/document-file");
const bank_details_1 = require("../member/basic/bank-details");
const policy_1 = require("./policy/policy");
const comment_1 = require("../base/comment");
let SchemeApplication = class SchemeApplication extends table_1.DbTable {
};
__decorate([
    typeorm_2.Column({ nullable: true })
], SchemeApplication.prototype, "applicationNumber", void 0);
__decorate([
    typeorm_2.Column({ nullable: true })
], SchemeApplication.prototype, "policyNumber", void 0);
__decorate([
    typeorm_2.Column({ nullable: true, default: false })
], SchemeApplication.prototype, "approved", void 0);
__decorate([
    typeorm_2.Column({ nullable: true })
], SchemeApplication.prototype, "approvedAt", void 0);
__decorate([
    typeorm_2.Column({ nullable: true })
], SchemeApplication.prototype, "approvedBy", void 0);
__decorate([
    typeorm_2.Column({ nullable: true, default: 'PENDING' })
], SchemeApplication.prototype, "status", void 0);
__decorate([
    typeorm_2.Column({ nullable: true })
], SchemeApplication.prototype, "authoristionUrl", void 0);
__decorate([
    typeorm_2.Column({ nullable: false, default: 0 })
], SchemeApplication.prototype, "vatApplied", void 0);
__decorate([
    typeorm_2.Column({ nullable: false })
], SchemeApplication.prototype, "deductionAmount", void 0);
__decorate([
    typeorm_2.Column({ nullable: false })
], SchemeApplication.prototype, "beneficiaryId", void 0);
__decorate([
    typeorm_2.Column({ nullable: false })
], SchemeApplication.prototype, "isPolicy", void 0);
__decorate([
    typeorm_1.ManyToMany(() => dependent_1.Dependent, (user) => user.applications),
    typeorm_1.JoinTable()
], SchemeApplication.prototype, "dependents", void 0);
__decorate([
    typeorm_1.ManyToMany(() => OptionAddOn_1.OptionAddOn, (user) => user.applications),
    typeorm_1.JoinTable()
], SchemeApplication.prototype, "addons", void 0);
__decorate([
    typeorm_1.ManyToMany(() => document_file_1.DocumentFile, (user) => user.applications),
    typeorm_1.JoinTable()
], SchemeApplication.prototype, "documents", void 0);
__decorate([
    typeorm_3.ManyToOne(type => BTUSchemePackage_1.BTUSchemePackage, _package => _package.applications, { nullable: true, cascade: true }),
    typeorm_2.JoinColumn()
], SchemeApplication.prototype, "package", void 0);
__decorate([
    typeorm_3.ManyToOne(() => bank_details_1.BankDetails, account => account.applications),
    typeorm_2.JoinColumn()
], SchemeApplication.prototype, "refundAccount", void 0);
__decorate([
    typeorm_1.OneToOne(() => policy_1.Policy, account => account.application)
], SchemeApplication.prototype, "policy", void 0);
__decorate([
    typeorm_3.ManyToOne(type => client_1.Client, client => client.applications, { nullable: false }),
    typeorm_2.JoinColumn()
], SchemeApplication.prototype, "client", void 0);
__decorate([
    typeorm_1.OneToMany(type => comment_1.Comment, app => app.application, { nullable: false, cascade: true })
], SchemeApplication.prototype, "comments", void 0);
SchemeApplication = __decorate([
    typeorm_4.Entity()
], SchemeApplication);
exports.SchemeApplication = SchemeApplication;
