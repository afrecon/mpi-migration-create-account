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
exports.KnowYourCustomer = void 0;
const pip_self_declaration_1 = require("./pip-self-declaration");
const typeorm_1 = require("typeorm");
const client_1 = require("../client");
const bank_details_1 = require("./bank-details");
const employment_details_1 = require("./employment-details");
const identity_details_1 = require("./identity-details");
const address_details_1 = require("./address-details");
const comment_1 = require("../../base/comment");
let KnowYourCustomer = class KnowYourCustomer {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], KnowYourCustomer.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => address_details_1.AddressDetails, file => file.kyc, { cascade: true, nullable: true }),
    __metadata("design:type", address_details_1.AddressDetails)
], KnowYourCustomer.prototype, "addressInfo", void 0);
__decorate([
    typeorm_1.OneToMany(() => bank_details_1.BankDetails, file => file.kyc, { cascade: true, nullable: true }),
    __metadata("design:type", Array)
], KnowYourCustomer.prototype, "bankAccounts", void 0);
__decorate([
    typeorm_1.OneToOne(() => identity_details_1.IdentityDetails, file => file.kyc, { cascade: true, nullable: true }),
    __metadata("design:type", identity_details_1.IdentityDetails)
], KnowYourCustomer.prototype, "identityInfo", void 0);
__decorate([
    typeorm_1.OneToOne(() => employment_details_1.EmploymentDetails, member => member.kyc, { cascade: true, nullable: true }),
    __metadata("design:type", employment_details_1.EmploymentDetails)
], KnowYourCustomer.prototype, "employmentInfo", void 0);
__decorate([
    typeorm_1.OneToOne(() => pip_self_declaration_1.PIPSelfDeclaration, member => member.kyc, { cascade: true, nullable: true }),
    __metadata("design:type", pip_self_declaration_1.PIPSelfDeclaration)
], KnowYourCustomer.prototype, "pip", void 0);
__decorate([
    typeorm_1.OneToOne(() => client_1.Client, member => member.kyc),
    __metadata("design:type", client_1.Client)
], KnowYourCustomer.prototype, "client", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_1.Comment, client => client.kyc, { nullable: false, cascade: true }),
    __metadata("design:type", Array)
], KnowYourCustomer.prototype, "comments", void 0);
KnowYourCustomer = __decorate([
    typeorm_1.Entity()
], KnowYourCustomer);
exports.KnowYourCustomer = KnowYourCustomer;
//# sourceMappingURL=kyc.js.map