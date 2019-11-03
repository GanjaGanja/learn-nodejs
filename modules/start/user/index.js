var phrases = require('./ru.json');

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(phrases.Hello + ', ' + who.name);
}

console.log('some test string');

exports.User = User; // outdated 'CommonJS module'
