//  http://127.0.0.1:1337/echo?message=Hello -> Hello

var  http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){

    //console.log(req.headers);

    //console.log(req.method, req.url);
    var urlParsed = url.parse(req.url, true);
    //console.log(urlParsed);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.setHeader('Cache-control', 'no-cache');

        //res.statusCode = 200;  // OK
        res.end(urlParsed.query.message);
    } else{
        res.statusCode = 404;  // Not Found
        res.end("Page not found");
    }
});

// http.Server -> net.Server -> EventEmitter

server.listen(1337,'127.0.0.1');


