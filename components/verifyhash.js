const { scryptSync, timingSafeEqual } = require('crypto');

const verifyHash = (password, salt, hashed) => {
    const hashedBuffer = scryptSync(password, salt, 64, {N: 16384, r: 8, p: 1});

    const keyBuffer = Buffer.from(hashed, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    return match ? true : false;
};

module.exports = verifyHash;
