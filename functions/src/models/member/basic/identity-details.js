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
exports.IdentityDetails = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../../enums/enum");
const kyc_1 = require("./kyc");
let IdentityDetails = class IdentityDetails {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], IdentityDetails.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], IdentityDetails.prototype, "idNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'enum', enum: enum_1.IdentityType, default: enum_1.IdentityType.OMANG }),
    __metadata("design:type", String)
], IdentityDetails.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], IdentityDetails.prototype, "fileId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], IdentityDetails.prototype, "fileUrl", void 0);
__decorate([
    typeorm_1.OneToOne(type => kyc_1.KnowYourCustomer, kyc => kyc.identityInfo),
    typeorm_1.JoinColumn(),
    __metadata("design:type", kyc_1.KnowYourCustomer)
], IdentityDetails.prototype, "kyc", void 0);
IdentityDetails = __decorate([
    typeorm_1.Entity()
], IdentityDetails);
exports.IdentityDetails = IdentityDetails;
//# sourceMappingURL=identity-details.js.map