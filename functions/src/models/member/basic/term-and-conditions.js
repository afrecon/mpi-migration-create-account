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
exports.TermsAndConditions = void 0;
const typeorm_1 = require("typeorm");
const client_1 = require("../client");
let TermsAndConditions = class TermsAndConditions {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TermsAndConditions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TermsAndConditions.prototype, "dateAccepted", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TermsAndConditions.prototype, "terms", void 0);
__decorate([
    typeorm_1.OneToOne(type => client_1.Client, client => client.terms),
    __metadata("design:type", client_1.Client)
], TermsAndConditions.prototype, "client", void 0);
TermsAndConditions = __decorate([
    typeorm_1.Entity()
], TermsAndConditions);
exports.TermsAndConditions = TermsAndConditions;
//# sourceMappingURL=term-and-conditions.js.map