"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionFactory = void 0;
const payroll_group_1 = require("../models/member/basic/payroll-group");
const pip_self_declaration_1 = require("../models/member/basic/pip-self-declaration");
const spouse_1 = require("../models/member/basic/spouse");
const dependent_1 = require("../models/member/basic/dependent");
const document_file_1 = require("../models/document/document-file");
const scheme_application_1 = require("../models/core/scheme-application");
const OptionAddOn_1 = require("../models/core/schemes/OptionAddOn");
const client_1 = require("../models/member/client");
const typeorm_1 = require("typeorm");
const BTUSchemePackage_1 = require("../models/core/schemes/BTUSchemePackage");
const BTUScheme_1 = require("../models/core/schemes/BTUScheme");
const user_1 = require("../models/base/user");
const role_1 = require("../models/base/role");
const kyc_1 = require("../models/member/basic/kyc");
const term_and_conditions_1 = require("../models/member/basic/term-and-conditions");
const RequiredDocument_1 = require("../models/core/schemes/RequiredDocument");
const ApplicationChecklistItem_1 = require("../models/core/schemes/ApplicationChecklistItem");
const identity_details_1 = require("../models/member/basic/identity-details");
const address_details_1 = require("../models/member/basic/address-details");
const employment_details_1 = require("../models/member/basic/employment-details");
const bank_details_1 = require("../models/member/basic/bank-details");
const policy_amendment_1 = require("../models/core/policy/policy-amendment");
const beneficiary_1 = require("../models/member/basic/beneficiary");
const policy_1 = require("../models/core/policy/policy");
const policy_transfer_request_1 = require("../models/core/policy/policy-transfer-request");
const comment_1 = require("../models/base/comment");
const deduction_file_1 = require("../models/ministry/deduction-file");
const refund_1 = require("../models/core/policy/refund");
const payout_1 = require("../models/core/policy/payout");
const policy_claim_1 = require("../models/core/policy/policy-claim");
class DatabaseConnectionFactory {
    static getInstance(configuration) {
        return new typeorm_1.DataSource({
            type: 'mysql',
            host: configuration.url,
            port: configuration.port,
            username: configuration.username,
            password: configuration.password,
            database: configuration.name,
            synchronize: true,
            logging: false,
            entities: [client_1.Client, identity_details_1.IdentityDetails, comment_1.Comment, refund_1.PolicyRefund, payout_1.PolicyPayout, policy_claim_1.PolicyClaim, policy_transfer_request_1.TransferPolicy, deduction_file_1.DeductionFile, deduction_file_1.EmployeeDeductionRecord, deduction_file_1.EmployeePaymentRecord, deduction_file_1.PaymentAllocation, address_details_1.AddressDetails, employment_details_1.EmploymentDetails, bank_details_1.BankDetails, policy_amendment_1.PolicyAmendment, beneficiary_1.Beneficiary, policy_1.Policy,
                BTUScheme_1.BTUScheme, BTUSchemePackage_1.BTUSchemePackage, policy_transfer_request_1.PolicyTransferRequest, RequiredDocument_1.RequiredDocument, ApplicationChecklistItem_1.ApplicationChecklistItem, role_1.UserRole, user_1.User, document_file_1.DocumentFile, dependent_1.Dependent, pip_self_declaration_1.PIPSelfDeclaration, pip_self_declaration_1.PIPType, spouse_1.Spouse, document_file_1.DocumentType, document_file_1.DocumentFile, OptionAddOn_1.OptionAddOn, kyc_1.KnowYourCustomer, term_and_conditions_1.TermsAndConditions, scheme_application_1.SchemeApplication, payroll_group_1.PayrollGroup],
            subscribers: [],
            migrations: [],
        });
    }
}
exports.DatabaseConnectionFactory = DatabaseConnectionFactory;
//# sourceMappingURL=database-connection-factory.js.map