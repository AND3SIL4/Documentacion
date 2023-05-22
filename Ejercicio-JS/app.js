const http = require("http");
const datetime = require ("./date.js");
const greet = require ("./date");

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`${greet.greet()} la hora actual es: ${datetime.myDateTime()}`);
}).listen(3000);