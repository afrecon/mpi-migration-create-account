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
exports.Spouse = void 0;
const typeorm_1 = require("typeorm");
const table_1 = require("../../base/table");
const client_1 = require("../client");
let Spouse = class Spouse extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Spouse.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Spouse.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Spouse.prototype, "identificationNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Spouse.prototype, "cellphoneNumber", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Spouse.prototype, "postalAddress", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], Spouse.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Spouse.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Spouse.prototype, "marriageCertificateUrl", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Spouse.prototype, "divorceCertificateUrl", void 0);
__decorate([
    typeorm_1.OneToOne(type => client_1.Client, member => member.spouse),
    __metadata("design:type", client_1.Client)
], Spouse.prototype, "member", void 0);
Spouse = __decorate([
    typeorm_1.Entity()
], Spouse);
exports.Spouse = Spouse;
//# sourceMappingURL=spouse.js.map