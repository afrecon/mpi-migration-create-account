"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    typeorm_2.Column({ nullable: false, unique: true })
], BTUScheme.prototype, "title", void 0);
__decorate([
    typeorm_2.Column({ nullable: true, type: 'longtext' })
], BTUScheme.prototype, "description", void 0);
__decorate([
    typeorm_2.Column({ nullable: false })
], BTUScheme.prototype, "imageUrl", void 0);
__decorate([
    typeorm_2.Column({ nullable: true, default: 0 })
], BTUScheme.prototype, "managementFee", void 0);
__decorate([
    typeorm_2.Column({ nullable: false, type: 'enum', enum: enum_1.BTUSchemeCategory })
], BTUScheme.prototype, "category", void 0);
__decorate([
    typeorm_1.OneToMany(() => BTUSchemePackage_1.BTUSchemePackage, btu_package => btu_package.scheme, { cascade: true, nullable: true }),
    typeorm_1.JoinColumn()
], BTUScheme.prototype, "packages", void 0);
__decorate([
    typeorm_1.OneToMany(() => RequiredDocument_1.RequiredDocument, doc => doc.applicableSchemes),
    typeorm_1.JoinColumn()
], BTUScheme.prototype, "requiredDocuments", void 0);
__decorate([
    typeorm_1.OneToMany(() => ApplicationChecklistItem_1.ApplicationChecklistItem, doc => doc.applicableSchemes, { cascade: true, nullable: true }),
    typeorm_1.JoinColumn()
], BTUScheme.prototype, "checklist", void 0);
BTUScheme = __decorate([
    typeorm_2.Entity()
], BTUScheme);
exports.BTUScheme = BTUScheme;
