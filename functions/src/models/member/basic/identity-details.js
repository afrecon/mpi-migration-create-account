"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityDetails = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../../enums/enum");
const kyc_1 = require("./kyc");
let IdentityDetails = class IdentityDetails {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], IdentityDetails.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], IdentityDetails.prototype, "idNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'enum', enum: enum_1.IdentityType, default: enum_1.IdentityType.OMANG })
], IdentityDetails.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], IdentityDetails.prototype, "fileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' })
], IdentityDetails.prototype, "fileUrl", void 0);
__decorate([
    typeorm_1.OneToOne(type => kyc_1.KnowYourCustomer, kyc => kyc.identityInfo),
    typeorm_1.JoinColumn()
], IdentityDetails.prototype, "kyc", void 0);
IdentityDetails = __decorate([
    typeorm_1.Entity()
], IdentityDetails);
exports.IdentityDetails = IdentityDetails;
