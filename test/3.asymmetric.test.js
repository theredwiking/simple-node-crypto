const encrypt = require('../components/encrypt');
const decrypt = require('../components/decrypt');
const fs = require('fs');

let data = 'This should be encrypted';
let encrypted;

describe('Asymmetric cryptography', () => {
    describe('Encryption', () => {
        it('should encrypt data', done => {
            try {
                encrypted = encrypt('./public.pem', data);
                done();
            } catch (err) {
                done(err);
            }
        });
    });
    describe('Decryption', () => {
        it('should decrypt data', done => {
            let decrypted = decrypt('./private.pem', encrypted);
            if (decrypted.toString() === data) {
                fs.unlinkSync('./public.pem');
                fs.unlinkSync('./private.pem');
                done();
            } else {
                done('Decrypted data should be the same a original data');
            }
        });
    });
});