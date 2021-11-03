# simple-node-crypto
## Description
simple-node-crypto is a encryption and hashing module made using crypto, the build in cryption module.

## How to implement
Command to install module
```bash
npm install simple-node-crypto
```
Usage:
#### How to hash
```js
const {Hash} = require('simple-node-crypto');

const hash = Hash('password123');

console.log(hash);
```
It will return data like this
```js
{
  salt: '7d46c204b7d6b4d424cfff05637ecafc',
  hash: 'dbd09781221f14e81c96591b6f2d02315e18b7fe790f59ccfca54d67fb59e615281559f8214ade59502f9a32771c4b90b1ee5e5bc6c2a1f3b95624de0c5a5dea'
}
```

### How to verify hash
```js
const {Hash, verifyHash} = require('simple-node-crypto');

const hash = Hash('password123');

console.log(verifyHash('password123', hash.salt, hash.hash));
```
It will return either
```js
success
or
failed
```
