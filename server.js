var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(4000, function () {
    console.log(`Listening on ${server.address().port}`);
});
