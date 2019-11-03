var user = require('./user'); // outdated 'CommonJS module'

var vasya = new user.User('Vasya');
var petya = new user.User('Петя');

vasya.hello(petya);
