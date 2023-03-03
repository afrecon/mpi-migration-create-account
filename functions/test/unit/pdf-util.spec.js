"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const pdf_util_1 = require("../../src/auth/pdf-util");
const expectedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5ZTdiMDJmN2NjZTI2OWJiYjkyYmE4NWEyMWE4NzRkZTBiODljNDUwNDE1YjA0ODM0OWJjOGNlYzgyMDdmZDRjIiwic3ViIjoiaWt5QGFmcmVjb24uaW8iLCJleHAiOjE2NTE2MDA2MDN9.OkyCZTa9JA5BtBvBsMTf9kdoSvThy7eUpqVU3nk97zk';
describe('Pdf Util Test', () => {
    let pdfUtil;
    beforeEach(() => {
        pdfUtil = new pdf_util_1.PDFUtil();
    });
    describe('#Sign', () => {
        it('Given valid payload, correct signatur is returned', () => {
            const sign = pdfUtil.sign('9e7b02f7cce269bbb92ba85a21a874de0b89c450415b048349bc8cec8207fd4c', '881b23a4a4aa1f4047cff17b403ef01ab216855c255a3846bc383728178d2615', 1651600603);
            console.log(sign);
            chai_1.expect(sign).to.eql(expectedToken);
        });
    });
});
