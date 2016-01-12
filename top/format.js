var util = require('util');

var str = util.format("My %s %d %j", "string", "1", {test:"obj"});

console.log(str);