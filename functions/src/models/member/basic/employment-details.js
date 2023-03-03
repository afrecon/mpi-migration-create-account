"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentDetails = void 0;
const typeorm_1 = require("typeorm");
const kyc_1 = require("./kyc");
let EmploymentDetails = class EmploymentDetails {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], EmploymentDetails.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], EmploymentDetails.prototype, "employerName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], EmploymentDetails.prototype, "position", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "employerContact", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "departmentName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "employeeNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "payrollId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "basicSalary", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "yearStart", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "yearEnded", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "payslipFileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], EmploymentDetails.prototype, "employmentLetterFileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], EmploymentDetails.prototype, "employmentLetterUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], EmploymentDetails.prototype, "payslipUrl", void 0);
__decorate([
    typeorm_1.OneToOne(type => kyc_1.KnowYourCustomer, kyc => kyc.employmentInfo),
    typeorm_1.JoinColumn()
], EmploymentDetails.prototype, "kyc", void 0);
EmploymentDetails = __decorate([
    typeorm_1.Entity()
], EmploymentDetails);
exports.EmploymentDetails = EmploymentDetails;
