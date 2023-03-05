"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPIService = void 0;
const enum_1 = require("../enums/enum");
const role_1 = require("../models/base/role");
const address_details_1 = require("../models/member/basic/address-details");
const employment_details_1 = require("../models/member/basic/employment-details");
const identity_details_1 = require("../models/member/basic/identity-details");
const kyc_1 = require("../models/member/basic/kyc");
const payroll_group_1 = require("../models/member/basic/payroll-group");
const pip_self_declaration_1 = require("../models/member/basic/pip-self-declaration");
const client_1 = require("../models/member/client");
class MPIService {
    constructor(db, sms, auth, loggerFactory) {
        this.db = db;
        this.sms = sms;
        this.auth = auth;
        this.logger = loggerFactory.getNamedLogger('mpi-fetch-account-service');
    }
    async createAccount(data) {
        console.info('Data IN', data);
        const generatedPassword = this.generatePassword();
        let payrollGroups;
        let group;
        let client;
        const checkExisting = async () => {
            var res = await this.db.getRepository(client_1.Client).findOne({
                where: {
                    kyc: {
                        identityInfo: {
                            idNumber: data.idNumber
                        }
                    }
                }
            });
            if (res != null) {
                throw {
                    code: 403,
                    message: 'Invalid request. User already exists'
                };
            }
            else {
                return;
            }
        };
        const getGroups = async () => {
            const repo = this.db.getRepository(payroll_group_1.PayrollGroup);
            payrollGroups = await repo.find();
            return;
        };
        const getRole = async () => {
            let role;
            switch (data.payrollGroup) {
                case 'BTU Member':
                    group = getPayrollGroup('BTU Member');
                    role = await this.getRole('BTU Member');
                    break;
                case 'MPI Staff':
                    group = getPayrollGroup('MPI Staff');
                    role = await this.getRole('BTU Member');
                    break;
                default:
                    group = getPayrollGroup('External');
                    role = await this.getRole('External/Other');
                    break;
            }
            console.log('User Role', role === null || role === void 0 ? void 0 : role.id);
            return role;
        };
        const save = async (role) => {
            let includeInFile = true;
            switch (data.payrollGroup) {
                case 'BTU Member':
                    break;
                case 'MPI Staff':
                    break;
                default:
                    includeInFile = false;
                    break;
            }
            const c = {
                contactNumber: data.phoneNumber,
                region: '',
                approved: true,
                includeInFile,
                approvedBy: -1,
                approvedAt: new Date(),
                school: '',
                identificationNumber: data.idNumber,
                dateOfBirth: new Date(data.dateOfBirth),
                occupation: '',
                membershipNumber: data.idNumber,
                nationality: '',
                gender: data.gender,
                payrollNumber: '',
                deductionSource: '',
                sector: '',
                district: '',
                payrollGroup: group,
                dependents: [],
                documents: [],
                reference: '',
                firstname: data.firstName,
                lastname: data.lastName,
                emailAddress: data.emailAddress,
                createdBy: -1,
                dateCreated: new Date(),
                lastUpdatedBy: -1,
                lastUpdated: new Date(),
                active: true,
                published: true,
                role
            };
            console.log('Saving', c);
            return this.db.getRepository(client_1.Client).save(c);
        };
        const getPayrollGroup = (ref) => {
            let g = null;
            for (var i = 0; i < payrollGroups.length; i++) {
                var group = payrollGroups[i];
                if (group.name.toLowerCase().includes(ref.toLowerCase())) {
                    g = group;
                    break;
                }
            }
            return g;
        };
        const createKYC = async (_client) => {
            client = _client;
            client.kyc = await this.createKYCProfile(client);
            client.identificationNumber = data.idNumber;
            console.log('KYC Created');
            return client;
        };
        const createFirebaseAccount = async (c) => {
            var res = await this.auth.createUser({
                email: c.emailAddress,
                password: generatedPassword,
                displayName: `${c.firstname} ${c.lastname}`,
                emailVerified: true,
            });
            if (res.uid != null && res.uid != undefined) {
                return res.uid;
            }
            else {
                throw {
                    code: 304,
                    message: 'Unable to create account, please check for duplicate emails'
                };
            }
        };
        const update = async (uid) => {
            console.log('Firebase RSP', uid);
            const repo = this.db.getRepository(client_1.Client);
            client.reference = uid;
            return repo.save;
        };
        const notify = async () => {
            return this.sms.sendMessage(`+267${client.contactNumber}`, `Dumelang ${client.firstname}! Welcome tothe MPI Portal. Please use the following details to login\n\nUsername:${client.emailAddress}\n\nPassword:${generatedPassword}\n\nPlease update you password once you login to keep your Account Secure`).then((res) => {
                this.logger.info('SMS sent', res);
                console.log('SMS SENT', client.contactNumber, client);
                return;
            });
        };
        return checkExisting()
            .then(getGroups)
            .then(getRole)
            .then(save)
            .then(createKYC)
            .then(createFirebaseAccount)
            .then(update)
            .then(notify);
    }
    async getRole(name) {
        const repo = this.db.getRepository(role_1.UserRole);
        return repo.findOne({
            where: {
                name
            }
        });
    }
    createKYCProfile(client) {
        const kycRepo = this.db.getRepository(kyc_1.KnowYourCustomer);
        const idRepo = this.db.getRepository(identity_details_1.IdentityDetails);
        const addressRepo = this.db.getRepository(address_details_1.AddressDetails);
        const empRepo = this.db.getRepository(employment_details_1.EmploymentDetails);
        const pipRepo = this.db.getRepository(pip_self_declaration_1.PIPSelfDeclaration);
        let kyc;
        const createKyc = async () => {
            const item = {
                client: client
            };
            kyc = await kycRepo.save(item);
            return;
        };
        const createIdProfile = async () => {
            const ID = {
                idNumber: client.identificationNumber,
                type: enum_1.IdentityType.OMANG,
                fileId: 0,
                kyc
            };
            await idRepo.save(ID);
            return;
        };
        const createAddressProfile = async () => {
            const ID = {
                fileId: 0,
                kyc,
                plotNo: '',
                city: '',
                type: enum_1.TenancyType.Rental
            };
            await addressRepo.save(ID);
            return;
        };
        const createPIPProfile = async () => {
            const ID = {
                title: '',
                jurisdiction: '',
                startingYear: 0,
                endingYear: 0,
                type: { id: 11, description: 'Not Applicable' },
                published: true,
                kyc: kyc,
                createdBy: -1,
                dateCreated: new Date(),
                lastUpdatedBy: -1,
                lastUpdated: new Date(),
            };
            await pipRepo.save(ID);
            return;
        };
        const createEmploymentProfile = async () => {
            const ID = {
                kyc,
                employerName: '',
                position: ''
            };
            await empRepo.save(ID);
            return kyc;
        };
        return createKyc()
            .then(createIdProfile)
            .then(createAddressProfile)
            .then(createPIPProfile)
            .then(createEmploymentProfile);
    }
    generatePassword() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }
}
exports.MPIService = MPIService;
//# sourceMappingURL=MPIService.js.map