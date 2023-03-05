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
exports.PolicyAmendment = void 0;
const typeorm_1 = require("typeorm");
const comment_1 = require("../../base/comment");
const table_1 = require("../../base/table");
const document_file_1 = require("../../document/document-file");
const dependent_1 = require("../../member/basic/dependent");
const BTUSchemePackage_1 = require("../schemes/BTUSchemePackage");
const OptionAddOn_1 = require("../schemes/OptionAddOn");
const policy_1 = require("./policy");
let PolicyAmendment = class PolicyAmendment extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PolicyAmendment.prototype, "premiumUpdate", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], PolicyAmendment.prototype, "approvedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PolicyAmendment.prototype, "approvedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PolicyAmendment.prototype, "beneficiaryId", void 0);
__decorate([
    typeorm_1.ManyToMany(() => dependent_1.Dependent),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], PolicyAmendment.prototype, "dependentsUpdate", void 0);
__decorate([
    typeorm_1.ManyToMany(() => OptionAddOn_1.OptionAddOn),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], PolicyAmendment.prototype, "addonUpdate", void 0);
__decorate([
    typeorm_1.ManyToMany(() => document_file_1.DocumentFile),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], PolicyAmendment.prototype, "documentUpdate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => BTUSchemePackage_1.BTUSchemePackage, item => item.amendments, { nullable: false }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", BTUSchemePackage_1.BTUSchemePackage)
], PolicyAmendment.prototype, "packageUpdate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_1.Policy, item => item.amendments, { nullable: false }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", policy_1.Policy)
], PolicyAmendment.prototype, "policy", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, client => client.transfer, { nullable: false, cascade: true }),
    __metadata("design:type", Array)
], PolicyAmendment.prototype, "comments", void 0);
PolicyAmendment = __decorate([
    typeorm_1.Entity()
], PolicyAmendment);
exports.PolicyAmendment = PolicyAmendment;
//# sourceMappingURL=policy-amendment.js.map