//  http://127.0.0.1:1337/echo?message=Hello -> Hello

var  http = require('http');
var url = require('url');


var server = new http.Server(function(req, res){

    var urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.end(urlParsed.query.message);
        return;
    }

    res.statusCode = 404;  // Not Found
    res.end("Page not found");
});

// http.Server -> net.Server -> EventEmitter



server.listen(1337,'127.0.0.1');


