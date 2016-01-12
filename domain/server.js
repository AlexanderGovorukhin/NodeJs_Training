var http = require('http');
var fs = require('fs');



function handler(req,res){
    if(req.url == '/'){
        fs.readFile('no-such-file', function(err,content){
            if(err){
                throw err;  // JSON.parse("invalid!");
                //console.error(err);
                //res.statusCode = 500;
                //res.end("На сервере произошла ошиюка!");
                //return;
            }

            res.end(content);
        })
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}

var server = new http.createServer(handler);
module.exports = server;