
import { PayrollGroup } from '../models/member/basic/payroll-group';
import { PIPSelfDeclaration, PIPType } from '../models/member/basic/pip-self-declaration';
import { Spouse } from '../models/member/basic/spouse';
import { Dependent } from '../models/member/basic/dependent';
import { DocumentFile, DocumentType } from '../models/document/document-file';
import { SchemeApplication } from '../models/core/scheme-application';
import { OptionAddOn } from '../models/core/schemes/OptionAddOn';
import { Client } from '../models/member/client';
import { DataSource } from 'typeorm'
import { DatabaseConfiguration } from '../models/configuration/database-configuration'
import { BTUSchemePackage } from '../models/core/schemes/BTUSchemePackage';
import { BTUScheme } from '../models/core/schemes/BTUScheme';
import { User } from '../models/base/user';
import { UserRole } from '../models/base/role';
import { KnowYourCustomer } from '../models/member/basic/kyc';
import { TermsAndConditions } from '../models/member/basic/term-and-conditions';
import { RequiredDocument } from '../models/core/schemes/RequiredDocument';
import { ApplicationChecklistItem } from '../models/core/schemes/ApplicationChecklistItem';
import { IdentityDetails } from '../models/member/basic/identity-details';
import { AddressDetails } from '../models/member/basic/address-details';
import { EmploymentDetails } from '../models/member/basic/employment-details';
import { BankDetails } from '../models/member/basic/bank-details';
import { PolicyAmendment } from '../models/core/policy/policy-amendment';
import { Beneficiary } from '../models/member/basic/beneficiary';
import { Policy } from '../models/core/policy/policy';
import { PolicyTransferRequest, TransferPolicy } from '../models/core/policy/policy-transfer-request';
import { Comment } from '../models/base/comment';
import { DeductionFile, EmployeeDeductionRecord, EmployeePaymentRecord, PaymentAllocation } from '../models/ministry/deduction-file';
import { PolicyRefund } from '../models/core/policy/refund';
import { PolicyPayout } from '../models/core/policy/payout';
import { PolicyClaim } from '../models/core/policy/policy-claim';

/**
 * Database Connection Factory handles the generation of connections to a specified database
 */
class DatabaseConnectionFactory {
  /**
   * Get a database instance
   */
  public static  getInstance(configuration: DatabaseConfiguration): DataSource {
    
    return  new DataSource({
      type:'mysql',
      host: configuration.url,
      port: configuration.port,
      username: configuration.username,
      password: configuration.password,
      database: configuration.name,
      synchronize: true,
      logging: false,
      entities: [Client,IdentityDetails,Comment,PolicyRefund,PolicyPayout,PolicyClaim, TransferPolicy, DeductionFile,EmployeeDeductionRecord,EmployeePaymentRecord,PaymentAllocation, AddressDetails,EmploymentDetails,BankDetails,PolicyAmendment,Beneficiary,Policy,
        BTUScheme,BTUSchemePackage,PolicyTransferRequest,RequiredDocument,ApplicationChecklistItem, UserRole, User,DocumentFile,Dependent,PIPSelfDeclaration,PIPType, Spouse,DocumentType,DocumentFile, OptionAddOn,KnowYourCustomer,TermsAndConditions, SchemeApplication , PayrollGroup],
      subscribers: [],
      migrations: [],
  })
  }
}

export { DatabaseConnectionFactory }
