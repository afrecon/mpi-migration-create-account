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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const role_1 = require("./role");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "reference", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "emailAddress", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'numeric' }),
    __metadata("design:type", Number)
], User.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'date' }),
    __metadata("design:type", Date)
], User.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'numeric' }),
    __metadata("design:type", Number)
], User.prototype, "lastUpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'date' }),
    __metadata("design:type", Date)
], User.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'bool' }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, type: 'bool' }),
    __metadata("design:type", Boolean)
], User.prototype, "published", void 0);
__decorate([
    typeorm_1.ManyToOne(type => role_1.UserRole, { nullable: false }),
    __metadata("design:type", role_1.UserRole)
], User.prototype, "role", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.js.map