const { scryptSync, randomBytes } = require('crypto');

const Hash = (hashs, name, password) => {
    const salt = randomBytes(16).toString('hex');
    const hashing = scryptSync(password, salt, 64).toString('hex');

    const hashed = { name, password:  `${salt}:${hashing}` };

    hashs.push(hashed);

    return hashed;
};

module.exports = Hash;
