"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIPSelfDeclaration = exports.PIPType = void 0;
const table_1 = require("../../base/table");
const typeorm_1 = require("typeorm");
const kyc_1 = require("./kyc");
let PIPType = class PIPType {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], PIPType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], PIPType.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => PIPSelfDeclaration, (pip) => pip.type, { nullable: true })
], PIPType.prototype, "declarations", void 0);
PIPType = __decorate([
    typeorm_1.Entity()
], PIPType);
exports.PIPType = PIPType;
let PIPSelfDeclaration = class PIPSelfDeclaration extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: false })
], PIPSelfDeclaration.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], PIPSelfDeclaration.prototype, "jurisdiction", void 0);
__decorate([
    typeorm_1.Column({ type: 'year', nullable: false })
], PIPSelfDeclaration.prototype, "startingYear", void 0);
__decorate([
    typeorm_1.Column({ type: 'year', nullable: true })
], PIPSelfDeclaration.prototype, "endingYear", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PIPType, { nullable: false })
], PIPSelfDeclaration.prototype, "type", void 0);
__decorate([
    typeorm_1.OneToOne(type => kyc_1.KnowYourCustomer, kyc => kyc.pip),
    typeorm_1.JoinColumn()
], PIPSelfDeclaration.prototype, "kyc", void 0);
PIPSelfDeclaration = __decorate([
    typeorm_1.Entity()
], PIPSelfDeclaration);
exports.PIPSelfDeclaration = PIPSelfDeclaration;
