var express, server, swig, path, port;

var rootdir, viewsdir;

path = require('path');
express = require('express');
swig = require('swig');
server = express();

rootdir = path.resolve(__dirname, '.');
viewsdir = path.resolve(rootdir, './views');

port = 3000;

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', viewsdir);

server.get('/', function(req, res) {
	res.render('index');
});

server.listen(port);
console.log('El servidor inicio en el puerto: ' + port);