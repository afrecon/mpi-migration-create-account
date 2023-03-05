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
exports.Dependent = void 0;
const enum_1 = require("../../../enums/enum");
const enum_2 = require("../../../enums/enum");
const typeorm_1 = require("typeorm");
const enum_3 = require("../../../enums/enum");
const client_1 = require("../client");
const scheme_application_1 = require("../../core/scheme-application");
const policy_transfer_request_1 = require("../../core/policy/policy-transfer-request");
let Dependent = class Dependent {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Dependent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Dependent.prototype, "identityNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Dependent.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Dependent.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Dependent.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Date)
], Dependent.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_2.Gender, nullable: false }),
    __metadata("design:type", String)
], Dependent.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_1.DependentType, nullable: false }),
    __metadata("design:type", String)
], Dependent.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Dependent.prototype, "relationship", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Dependent.prototype, "contactNumber", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_2.EmploymentStatus, default: enum_2.EmploymentStatus.PERMANENT_PENSIONABLE }),
    __metadata("design:type", String)
], Dependent.prototype, "employmentStatus", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_3.MaritalStatus, default: enum_3.MaritalStatus.SINGLE }),
    __metadata("design:type", String)
], Dependent.prototype, "maritalStatus", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Dependent.prototype, "nextOfKin", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Dependent.prototype, "emailAddress", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Dependent.prototype, "numberOfDependents", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Dependent.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Dependent.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Dependent.prototype, "fileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], Dependent.prototype, "fileUrl", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_1.Client, client => client.dependents),
    __metadata("design:type", client_1.Client)
], Dependent.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToMany(() => scheme_application_1.SchemeApplication),
    __metadata("design:type", Array)
], Dependent.prototype, "applications", void 0);
__decorate([
    typeorm_1.OneToMany(() => policy_transfer_request_1.PolicyTransferRequest, item => item.recipient, { nullable: true }),
    __metadata("design:type", Array)
], Dependent.prototype, "transferRequests", void 0);
Dependent = __decorate([
    typeorm_1.Entity()
], Dependent);
exports.Dependent = Dependent;
//# sourceMappingURL=dependent.js.map