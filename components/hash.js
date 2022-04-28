const { scryptSync, randomBytes } = require('crypto');

const Hash = (password) => {
    const salt = randomBytes(16).toString('hex');
    const hashed = scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 }).toString('hex');

    return {salt: salt, hash: hashed};
};

module.exports = Hash;
