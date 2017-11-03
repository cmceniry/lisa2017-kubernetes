var http = require('http');

var fs = require('fs');
var configvar = fs.readFileSync('/cm/configvar', 'UTF8');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello Kubernetes Tutorial from ' + process.env.PODIP + '!\n' +
    'The configvar from fs is "' + configvar + '"\n'
  );
};
var www = http.createServer(handleRequest);
www.listen(8080);
