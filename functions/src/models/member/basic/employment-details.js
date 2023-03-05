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
exports.EmploymentDetails = void 0;
const typeorm_1 = require("typeorm");
const kyc_1 = require("./kyc");
let EmploymentDetails = class EmploymentDetails {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EmploymentDetails.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "employerName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "position", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "employerContact", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "departmentName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "employeeNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "payrollId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], EmploymentDetails.prototype, "basicSalary", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "yearStart", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "yearEnded", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], EmploymentDetails.prototype, "payslipFileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], EmploymentDetails.prototype, "employmentLetterFileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "employmentLetterUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], EmploymentDetails.prototype, "payslipUrl", void 0);
__decorate([
    typeorm_1.OneToOne(type => kyc_1.KnowYourCustomer, kyc => kyc.employmentInfo),
    typeorm_1.JoinColumn(),
    __metadata("design:type", kyc_1.KnowYourCustomer)
], EmploymentDetails.prototype, "kyc", void 0);
EmploymentDetails = __decorate([
    typeorm_1.Entity()
], EmploymentDetails);
exports.EmploymentDetails = EmploymentDetails;
//# sourceMappingURL=employment-details.js.map