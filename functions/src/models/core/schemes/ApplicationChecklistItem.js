"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationChecklistItem = void 0;
const typeorm_1 = require("typeorm");
const table_1 = require("../../base/table");
const BTUScheme_1 = require("./BTUScheme");
let ApplicationChecklistItem = class ApplicationChecklistItem extends table_1.DbTable {
};
__decorate([
    typeorm_1.Column({ nullable: false })
], ApplicationChecklistItem.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], ApplicationChecklistItem.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], ApplicationChecklistItem.prototype, "mandatory", void 0);
__decorate([
    typeorm_1.ManyToMany(type => BTUScheme_1.BTUScheme, { nullable: false })
], ApplicationChecklistItem.prototype, "applicableSchemes", void 0);
ApplicationChecklistItem = __decorate([
    typeorm_1.Entity()
], ApplicationChecklistItem);
exports.ApplicationChecklistItem = ApplicationChecklistItem;
