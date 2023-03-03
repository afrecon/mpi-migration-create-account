"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    typeorm_1.Column()
], DeductionFile.prototype, "month", void 0);
__decorate([
    typeorm_1.Column()
], DeductionFile.prototype, "year", void 0);
__decorate([
    typeorm_1.Column()
], DeductionFile.prototype, "totalDeductionCount", void 0);
__decorate([
    typeorm_1.Column()
], DeductionFile.prototype, "totalAmountDeducted", void 0);
__decorate([
    typeorm_1.Column()
], DeductionFile.prototype, "totalReconcilliationCount", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], DeductionFile.prototype, "inputFileUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], DeductionFile.prototype, "outputFileUrl", void 0);
__decorate([
    typeorm_1.OneToMany(type => EmployeeDeductionRecord, kyc => kyc.deductionFile)
], DeductionFile.prototype, "deductions", void 0);
__decorate([
    typeorm_1.OneToMany(type => EmployeePaymentRecord, kyc => kyc.deductionFile)
], DeductionFile.prototype, "payments", void 0);
DeductionFile = __decorate([
    typeorm_1.Entity()
], DeductionFile);
exports.DeductionFile = DeductionFile;
let EmployeeDeductionRecord = class EmployeeDeductionRecord {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], EmployeeDeductionRecord.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], EmployeeDeductionRecord.prototype, "totalDeductionAmount", void 0);
__decorate([
    typeorm_1.Column()
], EmployeeDeductionRecord.prototype, "identityNumber", void 0);
__decorate([
    typeorm_1.Column()
], EmployeeDeductionRecord.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column()
], EmployeeDeductionRecord.prototype, "date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => DeductionFile, kyc => kyc.deductions)
], EmployeeDeductionRecord.prototype, "deductionFile", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_1.Client, kyc => kyc.deductions),
    typeorm_1.JoinColumn()
], EmployeeDeductionRecord.prototype, "client", void 0);
EmployeeDeductionRecord = __decorate([
    typeorm_1.Entity()
], EmployeeDeductionRecord);
exports.EmployeeDeductionRecord = EmployeeDeductionRecord;
let EmployeePaymentRecord = class EmployeePaymentRecord {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], EmployeePaymentRecord.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], EmployeePaymentRecord.prototype, "totalPaid", void 0);
__decorate([
    typeorm_1.Column()
], EmployeePaymentRecord.prototype, "identityNumber", void 0);
__decorate([
    typeorm_1.Column()
], EmployeePaymentRecord.prototype, "date", void 0);
__decorate([
    typeorm_1.Column()
], EmployeePaymentRecord.prototype, "totalUnallocatedAmount", void 0);
__decorate([
    typeorm_1.ManyToOne(type => DeductionFile, kyc => kyc.payments),
    typeorm_1.JoinColumn()
], EmployeePaymentRecord.prototype, "deductionFile", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_1.Client, kyc => kyc.deductions),
    typeorm_1.JoinColumn()
], EmployeePaymentRecord.prototype, "client", void 0);
__decorate([
    typeorm_1.OneToMany(type => PaymentAllocation, kyc => kyc.employeeRecord)
], EmployeePaymentRecord.prototype, "allocations", void 0);
EmployeePaymentRecord = __decorate([
    typeorm_1.Entity()
], EmployeePaymentRecord);
exports.EmployeePaymentRecord = EmployeePaymentRecord;
let PaymentAllocation = class PaymentAllocation {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], PaymentAllocation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], PaymentAllocation.prototype, "amountPaid", void 0);
__decorate([
    typeorm_1.Column()
], PaymentAllocation.prototype, "description", void 0);
__decorate([
    typeorm_1.Column()
], PaymentAllocation.prototype, "date", void 0);
__decorate([
    typeorm_1.Column()
], PaymentAllocation.prototype, "totalUnallocatedAmount", void 0);
__decorate([
    typeorm_1.ManyToOne(type => BTUSchemePackage_1.BTUSchemePackage, kyc => kyc.allocations),
    typeorm_1.JoinColumn()
], PaymentAllocation.prototype, "package", void 0);
__decorate([
    typeorm_1.ManyToOne(type => EmployeePaymentRecord, kyc => kyc.allocations),
    typeorm_1.JoinColumn()
], PaymentAllocation.prototype, "employeeRecord", void 0);
PaymentAllocation = __decorate([
    typeorm_1.Entity()
], PaymentAllocation);
exports.PaymentAllocation = PaymentAllocation;
