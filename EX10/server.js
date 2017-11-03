var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello Kubernetes Tutorial from ' + process.env.PODIP + '!\n' +
    'The configuration variable is ' + process.env.CONFIGVAR + '\n'
  );
};
var www = http.createServer(handleRequest);
www.listen(8080);
