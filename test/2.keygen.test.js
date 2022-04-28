const keygen = require('../components/keygen');
const fs = require('fs');

describe('Encryption Keys', () => {
    describe('Keygen', () => {
        it('should generate rsa key pair', done => {
            keygen();
            try {
                if (fs.existsSync('./public.pem') && fs.existsSync('./private.pem')) {
                    done();
                } else {
                    done('Files does not exist');
                }
            } catch (err) {
                done(err);
            }
        });
    });
});