const { scryptSync, timingSafeEqual } = require('crypto');

const verifyHash = (hashs, name, password) => {
    const hashed = hashs.find(v => v.name === name);

    const [salt, key] = hashed.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'success';
    } else {
        return 'fuck';
    }
};

module.exports = verifyHash;
