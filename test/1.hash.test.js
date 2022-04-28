const verifyHash = require('../components/verifyhash');
const hash = require('../components/hash');

let hashed;

describe('scryptSync', () => {
    describe('Hash', () => {
        it('should return hash and salt', done => {
            hashed = hash('Tester1234');
            if (hashed.salt !== '' && hashed.hash !== '') {
                done();
            } else {
                done('Could not create hash');
            }
        });
    });
    describe('Verify hash', () => {
        it('should verify hash', done => {
            if(verifyHash('Tester1234', hashed.salt, hashed.hash)) {
                done();
            } else {
                done('Failed to verify hash');
            }
        });
    })
});
