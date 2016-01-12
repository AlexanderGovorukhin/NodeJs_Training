//var fs = require('fs');
//var mongo = require('mongodb');
//var mysql = require('mysql');
var redis = require('redis').createClient();

module.exports = function handler(req,res){
    if(req.url == '/'){
        //fs.readFile('no-such-file', function(err,content){
        //    if(err)  throw err;
        //
        //    res.end(content);
        //});
        redis.get("data", function(err,data){
            throw new Error("redis callback");
        })
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
};