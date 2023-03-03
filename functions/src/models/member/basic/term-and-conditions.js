"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsAndConditions = void 0;
const typeorm_1 = require("typeorm");
const client_1 = require("../client");
let TermsAndConditions = class TermsAndConditions {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], TermsAndConditions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], TermsAndConditions.prototype, "dateAccepted", void 0);
__decorate([
    typeorm_1.Column()
], TermsAndConditions.prototype, "terms", void 0);
__decorate([
    typeorm_1.OneToOne(type => client_1.Client, client => client.terms)
], TermsAndConditions.prototype, "client", void 0);
TermsAndConditions = __decorate([
    typeorm_1.Entity()
], TermsAndConditions);
exports.TermsAndConditions = TermsAndConditions;
