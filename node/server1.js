var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url!='/favicon.ico'){
       res.writeHead(200,{
            'Content-Type':'application/json;charset=utf-8',
            'Access-Control-Allow-Origin':'*'
       });
       res.write("你好")
    }
    res.end();
}).listen(1337,"127.0.0.1");