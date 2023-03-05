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
exports.BTUScheme = void 0;
const typeorm_1 = require("typeorm");
const table_1 = require("../../base/table");
const enum_1 = require("../../../enums/enum");
const typeorm_2 = require("typeorm");
const BTUSchemePackage_1 = require("./BTUSchemePackage");
const RequiredDocument_1 = require("./RequiredDocument");
const ApplicationChecklistItem_1 = require("./ApplicationChecklistItem");
let BTUScheme = class BTUScheme extends table_1.DbTable {
};
__decorate([
    typeorm_2.Column({ nullable: false, unique: true }),
    __metadata("design:type", String)
], BTUScheme.prototype, "title", void 0);
__decorate([
    typeorm_2.Column({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], BTUScheme.prototype, "description", void 0);
__decorate([
    typeorm_2.Column({ nullable: false }),
    __metadata("design:type", String)
], BTUScheme.prototype, "imageUrl", void 0);
__decorate([
    typeorm_2.Column({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], BTUScheme.prototype, "managementFee", void 0);
__decorate([
    typeorm_2.Column({ nullable: false, type: 'enum', enum: enum_1.BTUSchemeCategory }),
    __metadata("design:type", String)
], BTUScheme.prototype, "category", void 0);
__decorate([
    typeorm_1.OneToMany(() => BTUSchemePackage_1.BTUSchemePackage, btu_package => btu_package.scheme, { cascade: true, nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], BTUScheme.prototype, "packages", void 0);
__decorate([
    typeorm_1.OneToMany(() => RequiredDocument_1.RequiredDocument, doc => doc.applicableSchemes),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], BTUScheme.prototype, "requiredDocuments", void 0);
__decorate([
    typeorm_1.OneToMany(() => ApplicationChecklistItem_1.ApplicationChecklistItem, doc => doc.applicableSchemes, { cascade: true, nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], BTUScheme.prototype, "checklist", void 0);
BTUScheme = __decorate([
    typeorm_2.Entity()
], BTUScheme);
exports.BTUScheme = BTUScheme;
//# sourceMappingURL=BTUScheme.js.map