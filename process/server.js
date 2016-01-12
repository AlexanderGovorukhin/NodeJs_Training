// set NODE_ENV=production
// supervisor -- server.js  --port=3000

var http = require('http');

var opts = require('optimist').argv;

//console.log(opts);
console.log(process.env.HOME);

http.createServer(function(req,res){

    if (process.env.NODE_ENV == 'production'){
        // оптимизация
    } else if (process.env.NODE_ENVs == 'development'){
        // дополнительный отладочный вывод
    }
    res.end("The server is running!");

}).listen(opts.port);