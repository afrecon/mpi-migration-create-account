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
exports.EmployeePaymentRecord = exports.PaymentAllocation = exports.EmployeeDeductionRecord = exports.DeductionFile = void 0;
const typeorm_1 = require("typeorm");
const table_1 = require("../base/table");
const BTUSchemePackage_1 = require("../core/schemes/BTUSchemePackage");
const client_1 = require("../member/client");
let DeductionFile = class DeductionFile extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DeductionFile.prototype, "month", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DeductionFile.prototype, "year", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DeductionFile.prototype, "totalDeductionCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DeductionFile.prototype, "totalAmountDeducted", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DeductionFile.prototype, "totalReconcilliationCount", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], DeductionFile.prototype, "inputFileUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], DeductionFile.prototype, "outputFileUrl", void 0);
__decorate([
    typeorm_1.OneToMany(type => EmployeeDeductionRecord, kyc => kyc.deductionFile),
    __metadata("design:type", Array)
], DeductionFile.prototype, "deductions", void 0);
__decorate([
    typeorm_1.OneToMany(type => EmployeePaymentRecord, kyc => kyc.deductionFile),
    __metadata("design:type", Array)
], DeductionFile.prototype, "payments", void 0);
DeductionFile = __decorate([
    typeorm_1.Entity()
], DeductionFile);
exports.DeductionFile = DeductionFile;
let EmployeeDeductionRecord = class EmployeeDeductionRecord {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EmployeeDeductionRecord.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeDeductionRecord.prototype, "totalDeductionAmount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeDeductionRecord.prototype, "identityNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeDeductionRecord.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeDeductionRecord.prototype, "date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => DeductionFile, kyc => kyc.deductions),
    __metadata("design:type", DeductionFile)
], EmployeeDeductionRecord.prototype, "deductionFile", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_1.Client, kyc => kyc.deductions),
    typeorm_1.JoinColumn(),
    __metadata("design:type", client_1.Client)
], EmployeeDeductionRecord.prototype, "client", void 0);
EmployeeDeductionRecord = __decorate([
    typeorm_1.Entity()
], EmployeeDeductionRecord);
exports.EmployeeDeductionRecord = EmployeeDeductionRecord;
let EmployeePaymentRecord = class EmployeePaymentRecord {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EmployeePaymentRecord.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeePaymentRecord.prototype, "totalPaid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeePaymentRecord.prototype, "identityNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], EmployeePaymentRecord.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeePaymentRecord.prototype, "totalUnallocatedAmount", void 0);
__decorate([
    typeorm_1.ManyToOne(type => DeductionFile, kyc => kyc.payments),
    typeorm_1.JoinColumn(),
    __metadata("design:type", DeductionFile)
], EmployeePaymentRecord.prototype, "deductionFile", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_1.Client, kyc => kyc.deductions),
    typeorm_1.JoinColumn(),
    __metadata("design:type", client_1.Client)
], EmployeePaymentRecord.prototype, "client", void 0);
__decorate([
    typeorm_1.OneToMany(type => PaymentAllocation, kyc => kyc.employeeRecord),
    __metadata("design:type", Array)
], EmployeePaymentRecord.prototype, "allocations", void 0);
EmployeePaymentRecord = __decorate([
    typeorm_1.Entity()
], EmployeePaymentRecord);
exports.EmployeePaymentRecord = EmployeePaymentRecord;
let PaymentAllocation = class PaymentAllocation {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PaymentAllocation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PaymentAllocation.prototype, "amountPaid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PaymentAllocation.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PaymentAllocation.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PaymentAllocation.prototype, "totalUnallocatedAmount", void 0);
__decorate([
    typeorm_1.ManyToOne(type => BTUSchemePackage_1.BTUSchemePackage, kyc => kyc.allocations),
    typeorm_1.JoinColumn(),
    __metadata("design:type", BTUSchemePackage_1.BTUSchemePackage)
], PaymentAllocation.prototype, "package", void 0);
__decorate([
    typeorm_1.ManyToOne(type => EmployeePaymentRecord, kyc => kyc.allocations),
    typeorm_1.JoinColumn(),
    __metadata("design:type", EmployeePaymentRecord)
], PaymentAllocation.prototype, "employeeRecord", void 0);
PaymentAllocation = __decorate([
    typeorm_1.Entity()
], PaymentAllocation);
exports.PaymentAllocation = PaymentAllocation;
//# sourceMappingURL=deduction-file.js.map