var http = require('http');

http.createServer(function(request, response){
    response.writeHeader({
    	'Content-Type': 'text/plain'
    });
    response.end('nodemon frekin is cool');
}).listen(3000);