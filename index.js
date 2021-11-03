const { scryptSync, randomBytes, timingSafeEqual, createHmac } = require('crypto');
const fs = require('fs');

exports.hmac = () => {
    const password = 'password321';
    const hash = "Password123";

    const hmac = createHmac('sha256', password).update(hash).digest('hex');

    console.log(hmac);
};

exports.hash = (name, password) => {
    const salt = randomBytes(16).toString('hex');
    const hashing = scryptSync(password, salt, 64).toString('hex');

    const hashed = { name, password:  `${salt}:${hashing}` };

    hashs.push(hashed);

    return hashed;
}

exports.verifyHash = (name, password) => {
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
}

const hashs = [];
