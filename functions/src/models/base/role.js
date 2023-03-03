"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
let UserRole = class UserRole {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], UserRole.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', unique: true })
], UserRole.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric', })
], UserRole.prototype, "securityLevel", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_1.User, (user) => user.role, { nullable: true })
], UserRole.prototype, "users", void 0);
UserRole = __decorate([
    typeorm_1.Entity()
], UserRole);
exports.UserRole = UserRole;
