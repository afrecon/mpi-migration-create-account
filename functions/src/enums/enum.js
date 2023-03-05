"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyType = exports.IdentityType = exports.DependentType = exports.AddOnType = exports.Gender = exports.EmploymentStatus = exports.MaritalStatus = exports.PayoutType = exports.PayoutSource = exports.CommentType = exports.CommentStatus = exports.AirtimeProviders = exports.FuneralSchemeType = exports.BTUSchemeCategory = void 0;
var BTUSchemeCategory;
(function (BTUSchemeCategory) {
    BTUSchemeCategory["FUNERAL_SCHEME"] = "Funeral";
    BTUSchemeCategory["AIRTIME"] = "Airtime";
    BTUSchemeCategory["BOREHOLE_DRILLING"] = "Borehole Drilling";
    BTUSchemeCategory["LOAN"] = "Loan";
    BTUSchemeCategory["LEGAL"] = "Legal";
    BTUSchemeCategory["MERCHANDISE"] = "Merchandise";
})(BTUSchemeCategory = exports.BTUSchemeCategory || (exports.BTUSchemeCategory = {}));
var FuneralSchemeType;
(function (FuneralSchemeType) {
    FuneralSchemeType["BOTUBS"] = "BOTUBS";
    FuneralSchemeType["POLOKO"] = "POLOKO";
})(FuneralSchemeType = exports.FuneralSchemeType || (exports.FuneralSchemeType = {}));
var AirtimeProviders;
(function (AirtimeProviders) {
    AirtimeProviders["BTC"] = "BTC";
    AirtimeProviders["Orange"] = "Orange";
})(AirtimeProviders = exports.AirtimeProviders || (exports.AirtimeProviders = {}));
var CommentStatus;
(function (CommentStatus) {
    CommentStatus["DELIVERED"] = "Delivered";
    CommentStatus["READ"] = "Read";
})(CommentStatus = exports.CommentStatus || (exports.CommentStatus = {}));
var CommentType;
(function (CommentType) {
    CommentType["APPLICATION"] = "Application";
    CommentType["POLICY_TRANSFER"] = "Transfer";
    CommentType["POLICY"] = "Policy";
    CommentType["AMENDMENT"] = "Amendment";
    CommentType["KYC"] = "KYC";
    CommentType["REFUND"] = "Refund";
    CommentType["CLAIM"] = "Claim";
})(CommentType = exports.CommentType || (exports.CommentType = {}));
var PayoutSource;
(function (PayoutSource) {
    PayoutSource["CLIENT"] = "Client";
    PayoutSource["SOURCE"] = "Source";
    PayoutSource["NA"] = "Not Applicable";
})(PayoutSource = exports.PayoutSource || (exports.PayoutSource = {}));
var PayoutType;
(function (PayoutType) {
    PayoutType["REFUND"] = "Refund";
    PayoutType["CLAIM"] = "Claim";
    PayoutType["ERROR"] = "Error";
})(PayoutType = exports.PayoutType || (exports.PayoutType = {}));
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus["SINGLE"] = "Single";
    MaritalStatus["MARRIED"] = "Married";
    MaritalStatus["DIVORCED"] = "Divorced";
    MaritalStatus["WIDOWED"] = "Widowed";
    MaritalStatus["SEPARATED"] = "Separated";
    MaritalStatus["DOMESTIC_PARTNERSHIP"] = "Domestic partnership";
    MaritalStatus["CIVIL_UNION"] = "Civil union";
    MaritalStatus["UNMARRIED"] = "Unmarried";
    MaritalStatus["COMMON_LAW_MARRIAGE"] = "Common law marriage";
})(MaritalStatus = exports.MaritalStatus || (exports.MaritalStatus = {}));
var EmploymentStatus;
(function (EmploymentStatus) {
    EmploymentStatus["PERMANENT_PENSIONABLE"] = "Permanent & Pensionable";
    EmploymentStatus["CONTRACT"] = "Contract";
    EmploymentStatus["PROBATION"] = "Probation";
    EmploymentStatus["INDUSTRIAL_CLASS"] = "Industrial Class";
    EmploymentStatus["RETIRED"] = "Retired";
    EmploymentStatus["TEMP"] = "Temporary";
    EmploymentStatus["OTHER"] = "Other (specify)";
})(EmploymentStatus = exports.EmploymentStatus || (exports.EmploymentStatus = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
    Gender["NON_BINARY"] = "Non-binary";
    Gender["PREFER_NOT_TO_DISCLOSE"] = "Prefer not to disclose";
    Gender["OTHER"] = "Other (specify)";
})(Gender = exports.Gender || (exports.Gender = {}));
var AddOnType;
(function (AddOnType) {
    AddOnType["FIXED_PRICE"] = "Fixed Price";
    AddOnType["AGE_BASED"] = "Age Based";
})(AddOnType = exports.AddOnType || (exports.AddOnType = {}));
var DependentType;
(function (DependentType) {
    DependentType["CHILD"] = "Child";
    DependentType["PARENT"] = "Parent";
    DependentType["SPOUSE"] = "Spouse";
    DependentType["EXTENDED_FAMILY"] = "Extended Family";
    DependentType["OTHER"] = "Other";
})(DependentType = exports.DependentType || (exports.DependentType = {}));
var IdentityType;
(function (IdentityType) {
    IdentityType["OMANG"] = "Omang";
    IdentityType["PASSPORT"] = "Passport";
    IdentityType["DRIVERS_LICENSE"] = "Drivers License";
})(IdentityType = exports.IdentityType || (exports.IdentityType = {}));
var TenancyType;
(function (TenancyType) {
    TenancyType["Rental"] = "Rental";
    TenancyType["Owner"] = "Owner";
    TenancyType["Lease"] = "Lease";
})(TenancyType = exports.TenancyType || (exports.TenancyType = {}));
//# sourceMappingURL=enum.js.map