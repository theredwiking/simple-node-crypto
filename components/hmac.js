const { createHmac } = require('crypto');

const Hmac = () => {
    const password = 'password321';
    const hash = "Password123";

    const hmac = createHmac('sha256', password).update(hash).digest('hex');

    console.log(hmac);
};

module.exports = Hmac;
