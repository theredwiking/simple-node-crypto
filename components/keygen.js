const {generateKeyPairSync} = require('crypto');
const fs = require('fs');

const keyGen = () => {
    const { privateKey, publicKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048, // the length of your key in bits
      publicKeyEncoding: {
        type: 'spki', // recommended to be 'spki' by the Node.js docs
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
        format: 'pem',
      },
    });

    const public = fs.writeFileSync('public.pem', publicKey);

    const private = fs.writeFileSync('private.pem', privateKey);
}

module.exports = keyGen;
