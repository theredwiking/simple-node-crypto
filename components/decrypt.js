const { privateDecrypt } = require('crypto');
const fs = require('fs');

const Decrypt = (path, data) => {
    const key = fs.readFileSync(path)

    const decrypted = privateDecrypt(
        key,
        data
    );

    return decrypted;
}

module.exports = Decrypt;
