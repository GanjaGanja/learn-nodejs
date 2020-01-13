let log = require('logger')(module);

let db = require('db');
db.connect();

let user = require('./user'); // outdated 'CommonJS module'

function run() {
    let vasya = new user.User('Vasya');
    let petya = new user.User('Петя');

    vasya.hello(petya);

    log(db.getPhrase('Run successful'));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
