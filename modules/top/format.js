let util = require('util');

let str = util.format('My %s %d %j', 'string', 123, {test: 'obj'}); // %s - string, %d - number, %j - json format

console.log(str);
