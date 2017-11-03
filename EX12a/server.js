var http = require('http');
var fs = require('fs');

var password = fs.readFileSync('/data/password', 'UTF8');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello Kubernetes Tutorial from ' + process.env.PODIP + '!\n' +
    'The secret password from env is "' + process.env.PW + '"\n' +
    'The secret password from fs is "' + password +'"\n'
  );
};
var www = http.createServer(handleRequest);
www.listen(8080);
