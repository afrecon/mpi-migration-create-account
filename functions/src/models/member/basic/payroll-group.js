"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollGroup = void 0;
const client_1 = require("../client");
const typeorm_1 = require("typeorm");
let PayrollGroup = class PayrollGroup {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], PayrollGroup.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], PayrollGroup.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => client_1.Client, (pip) => pip.payrollGroup, { nullable: true })
], PayrollGroup.prototype, "clients", void 0);
PayrollGroup = __decorate([
    typeorm_1.Entity()
], PayrollGroup);
exports.PayrollGroup = PayrollGroup;
