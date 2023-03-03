"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    typeorm_1.PrimaryGeneratedColumn()
], Dependent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "identityNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], Dependent.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], Dependent.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], Dependent.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_2.Gender, nullable: false })
], Dependent.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_1.DependentType, nullable: false })
], Dependent.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "relationship", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "contactNumber", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_2.EmploymentStatus, default: enum_2.EmploymentStatus.PERMANENT_PENSIONABLE })
], Dependent.prototype, "employmentStatus", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_3.MaritalStatus, default: enum_3.MaritalStatus.SINGLE })
], Dependent.prototype, "maritalStatus", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "nextOfKin", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "emailAddress", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "numberOfDependents", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Dependent.prototype, "fileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], Dependent.prototype, "fileUrl", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_1.Client, client => client.dependents)
], Dependent.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToMany(() => scheme_application_1.SchemeApplication)
], Dependent.prototype, "applications", void 0);
__decorate([
    typeorm_1.OneToMany(() => policy_transfer_request_1.PolicyTransferRequest, item => item.recipient, { nullable: true })
], Dependent.prototype, "transferRequests", void 0);
Dependent = __decorate([
    typeorm_1.Entity()
], Dependent);
exports.Dependent = Dependent;
