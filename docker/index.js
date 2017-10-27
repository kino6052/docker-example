// Setup basic express server
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || 3000;
var serverName = process.env.NAME || 'Unknown';

// io.adapter(redis({ host: 'redis', port: 6379 }));

server.listen(port, function () {
  console.log('Server listening at port %d', port);
  console.log('Hello, I\'m %s, how can I help?', serverName);
});

// Routing
app.use(express.static(__dirname + '/public'));
