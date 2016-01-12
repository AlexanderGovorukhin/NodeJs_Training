//  http://127.0.0.1:1337/echo?message=Hello -> Hello

var http = require('http');

var log = require('./log')(module);


var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

log.info("Server is running");


