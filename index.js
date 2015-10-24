var static  = require('node-static');
var fileServer = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(9000);
console.log('服务器监听在'+''+'端口...');
