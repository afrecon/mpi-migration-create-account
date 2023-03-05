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
exports.BTUSchemePackage = void 0;
const typeorm_1 = require("typeorm");
const table_1 = require("../../base/table");
const deduction_file_1 = require("../../ministry/deduction-file");
const policy_amendment_1 = require("../policy/policy-amendment");
const scheme_application_1 = require("../scheme-application");
const BTUScheme_1 = require("./BTUScheme");
const OptionAddOn_1 = require("./OptionAddOn");
let BTUSchemePackage = class BTUSchemePackage extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: false, unique: true }),
    __metadata("design:type", String)
], BTUSchemePackage.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], BTUSchemePackage.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], BTUSchemePackage.prototype, "premium", void 0);
__decorate([
    typeorm_1.ManyToOne(type => BTUScheme_1.BTUScheme, client => client.packages),
    typeorm_1.JoinColumn(),
    __metadata("design:type", BTUScheme_1.BTUScheme)
], BTUSchemePackage.prototype, "scheme", void 0);
__decorate([
    typeorm_1.ManyToMany(() => OptionAddOn_1.OptionAddOn),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], BTUSchemePackage.prototype, "addOns", void 0);
__decorate([
    typeorm_1.ManyToMany(() => scheme_application_1.SchemeApplication),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], BTUSchemePackage.prototype, "applications", void 0);
__decorate([
    typeorm_1.ManyToMany(() => policy_amendment_1.PolicyAmendment),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], BTUSchemePackage.prototype, "amendments", void 0);
__decorate([
    typeorm_1.OneToMany(type => deduction_file_1.PaymentAllocation, kyc => kyc.package),
    __metadata("design:type", Array)
], BTUSchemePackage.prototype, "allocations", void 0);
BTUSchemePackage = __decorate([
    typeorm_1.Entity()
], BTUSchemePackage);
exports.BTUSchemePackage = BTUSchemePackage;
//# sourceMappingURL=BTUSchemePackage.js.map