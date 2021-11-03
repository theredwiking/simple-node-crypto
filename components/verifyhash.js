const { scryptSync, timingSafeEqual } = require('crypto');

const verifyHash = (password, salt, hashed) => {
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(hashed, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'success';
    } else {
        return 'fuck';
    }
};

module.exports = verifyHash;
