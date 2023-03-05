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
exports.OptionAddOn = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../../enums/enum");
const table_1 = require("../../base/table");
const scheme_application_1 = require("../scheme-application");
const BTUSchemePackage_1 = require("./BTUSchemePackage");
let OptionAddOn = class OptionAddOn extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: false, unique: true }),
    __metadata("design:type", String)
], OptionAddOn.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], OptionAddOn.prototype, "premium", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], OptionAddOn.prototype, "minAgeRule", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], OptionAddOn.prototype, "maxAgeRule", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_1.AddOnType, nullable: false, default: enum_1.AddOnType.FIXED_PRICE }),
    __metadata("design:type", String)
], OptionAddOn.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToMany(() => BTUSchemePackage_1.BTUSchemePackage),
    __metadata("design:type", Array)
], OptionAddOn.prototype, "packages", void 0);
__decorate([
    typeorm_1.ManyToMany(() => scheme_application_1.SchemeApplication),
    __metadata("design:type", Array)
], OptionAddOn.prototype, "applications", void 0);
OptionAddOn = __decorate([
    typeorm_1.Entity()
], OptionAddOn);
exports.OptionAddOn = OptionAddOn;
//# sourceMappingURL=OptionAddOn.js.map