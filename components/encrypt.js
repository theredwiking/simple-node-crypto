const { publicEncrypt } = require('crypto');
const fs = require('fs');

const Encrypt = (path, data) => {
    const key = fs.readFileSync(path);

    const encrypted = publicEncrypt(
        key,
        Buffer.from(data)
    );

    return encrypted;
}

module.exports = Encrypt;
