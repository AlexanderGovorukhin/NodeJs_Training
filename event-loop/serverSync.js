var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var info;

    if(req.url == '/'){

        try {
            var info = fs.readFileSync('index.html');
        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("На сервере произошла ошибка!");
            return;
        }

        res.end(info);

    } else if (req.url == '/now') {
        res.end(new Date().toString());
    } else{
      /* 404  */
    }

}).listen(3000);