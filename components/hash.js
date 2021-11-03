const { scryptSync, randomBytes } = require('crypto');

const Hash = (password) => {
    const salt = randomBytes(16).toString('hex');
    const hashed = scryptSync(password, salt, 64).toString('hex');

    return {salt: salt, hash: hashed};
};

module.exports = Hash;
