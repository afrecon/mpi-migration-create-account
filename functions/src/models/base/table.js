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
exports.DbTable = void 0;
const typeorm_1 = require("typeorm");
let DbTable = class DbTable {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DbTable.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], DbTable.prototype, "published", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric' }),
    __metadata("design:type", Number)
], DbTable.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], DbTable.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric' }),
    __metadata("design:type", Number)
], DbTable.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], DbTable.prototype, "lastUpdated", void 0);
DbTable = __decorate([
    typeorm_1.Entity()
], DbTable);
exports.DbTable = DbTable;
//# sourceMappingURL=table.js.map