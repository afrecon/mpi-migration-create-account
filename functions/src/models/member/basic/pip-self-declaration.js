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
exports.PIPSelfDeclaration = exports.PIPType = void 0;
const table_1 = require("../../base/table");
const typeorm_1 = require("typeorm");
const kyc_1 = require("./kyc");
let PIPType = class PIPType {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PIPType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], PIPType.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => PIPSelfDeclaration, (pip) => pip.type, { nullable: true }),
    __metadata("design:type", Array)
], PIPType.prototype, "declarations", void 0);
PIPType = __decorate([
    typeorm_1.Entity()
], PIPType);
exports.PIPType = PIPType;
let PIPSelfDeclaration = class PIPSelfDeclaration extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], PIPSelfDeclaration.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], PIPSelfDeclaration.prototype, "jurisdiction", void 0);
__decorate([
    typeorm_1.Column({ type: 'year', nullable: false }),
    __metadata("design:type", Number)
], PIPSelfDeclaration.prototype, "startingYear", void 0);
__decorate([
    typeorm_1.Column({ type: 'year', nullable: true }),
    __metadata("design:type", Number)
], PIPSelfDeclaration.prototype, "endingYear", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PIPType, { nullable: false }),
    __metadata("design:type", PIPType)
], PIPSelfDeclaration.prototype, "type", void 0);
__decorate([
    typeorm_1.OneToOne(type => kyc_1.KnowYourCustomer, kyc => kyc.pip),
    typeorm_1.JoinColumn(),
    __metadata("design:type", kyc_1.KnowYourCustomer)
], PIPSelfDeclaration.prototype, "kyc", void 0);
PIPSelfDeclaration = __decorate([
    typeorm_1.Entity()
], PIPSelfDeclaration);
exports.PIPSelfDeclaration = PIPSelfDeclaration;
//# sourceMappingURL=pip-self-declaration.js.map