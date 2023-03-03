"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beneficiary = void 0;
const enum_1 = require("../../../enums/enum");
const enum_2 = require("../../../enums/enum");
const typeorm_1 = require("typeorm");
const policy_1 = require("../../core/policy/policy");
let Beneficiary = class Beneficiary {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], Beneficiary.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Beneficiary.prototype, "identityNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], Beneficiary.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Beneficiary.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], Beneficiary.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], Beneficiary.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_2.Gender, nullable: false })
], Beneficiary.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_1.DependentType, nullable: false })
], Beneficiary.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Beneficiary.prototype, "relationship", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Beneficiary.prototype, "contactNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Beneficiary.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Beneficiary.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Beneficiary.prototype, "fileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], Beneficiary.prototype, "fileUrl", void 0);
__decorate([
    typeorm_1.OneToMany(type => policy_1.Policy, kyc => kyc.beneficiary)
], Beneficiary.prototype, "policies", void 0);
Beneficiary = __decorate([
    typeorm_1.Entity()
], Beneficiary);
exports.Beneficiary = Beneficiary;
