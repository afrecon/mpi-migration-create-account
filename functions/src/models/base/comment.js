"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const enum_1 = require("./../../enums/enum");
const typeorm_1 = require("typeorm");
const policy_1 = require("../core/policy/policy");
const policy_amendment_1 = require("../core/policy/policy-amendment");
const policy_transfer_request_1 = require("../core/policy/policy-transfer-request");
const scheme_application_1 = require("../core/scheme-application");
const kyc_1 = require("../member/basic/kyc");
const client_1 = require("../member/client");
const refund_1 = require("../core/policy/refund");
const policy_claim_1 = require("../core/policy/policy-claim");
let Comment = class Comment {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], Comment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], Comment.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_1.CommentStatus, default: enum_1.CommentStatus.DELIVERED })
], Comment.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: enum_1.CommentType, nullable: true })
], Comment.prototype, "type", void 0);
__decorate([
    typeorm_1.Column()
], Comment.prototype, "highlight", void 0);
__decorate([
    typeorm_1.Column()
], Comment.prototype, "published", void 0);
__decorate([
    typeorm_1.Column()
], Comment.prototype, "date", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_1.Client, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => scheme_application_1.SchemeApplication, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "application", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_1.Policy, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "policy", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_transfer_request_1.PolicyTransferRequest, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "transfer", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_amendment_1.PolicyAmendment, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "amendment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => kyc_1.KnowYourCustomer, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "kyc", void 0);
__decorate([
    typeorm_1.ManyToOne(() => refund_1.PolicyRefund, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "refund", void 0);
__decorate([
    typeorm_1.ManyToOne(() => policy_claim_1.PolicyClaim, (user) => user.comments, { nullable: true }),
    typeorm_1.JoinColumn()
], Comment.prototype, "claim", void 0);
Comment = __decorate([
    typeorm_1.Entity()
], Comment);
exports.Comment = Comment;
