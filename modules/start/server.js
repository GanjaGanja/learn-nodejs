let user = require('./user'); // outdated 'CommonJS module'

let vasya = new user.User('Vasya');
let petya = new user.User('Петя');

vasya.hello(petya);
