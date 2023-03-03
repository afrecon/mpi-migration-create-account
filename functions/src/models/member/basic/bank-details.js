"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDetails = void 0;
const typeorm_1 = require("typeorm");
const scheme_application_1 = require("../../core/scheme-application");
const kyc_1 = require("./kyc");
let BankDetails = class BankDetails {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], BankDetails.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], BankDetails.prototype, "bankName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], BankDetails.prototype, "branchName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], BankDetails.prototype, "branchCode", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], BankDetails.prototype, "accountNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], BankDetails.prototype, "bankStatementFileId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => kyc_1.KnowYourCustomer, kyc => kyc.bankAccounts)
], BankDetails.prototype, "kyc", void 0);
__decorate([
    typeorm_1.OneToMany(type => scheme_application_1.SchemeApplication, kyc => kyc.refundAccount)
], BankDetails.prototype, "applications", void 0);
BankDetails = __decorate([
    typeorm_1.Entity()
], BankDetails);
exports.BankDetails = BankDetails;
