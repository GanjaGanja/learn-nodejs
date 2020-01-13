let log = require('logger')(module);

let db = require('db');

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(`${db.getPhrase('Hello')}, ${who.name}`);
};

console.log('some test string');

exports.User = User; // outdated 'CommonJS module'
