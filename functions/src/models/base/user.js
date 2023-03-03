"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const role_1 = require("./role");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' })
], User.prototype, "reference", void 0);
__decorate([
    typeorm_1.Column()
], User.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column()
], User.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], User.prototype, "emailAddress", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'numeric' })
], User.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], User.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'numeric' })
], User.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], User.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], User.prototype, "active", void 0);
__decorate([
    typeorm_1.Column({ nullable: false })
], User.prototype, "published", void 0);
__decorate([
    typeorm_1.ManyToOne(type => role_1.UserRole, { nullable: false })
], User.prototype, "role", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
