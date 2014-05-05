var express, server, swig, path, port, bodyParser;

var rootdir, viewsdir, staticdir;

path = require('path');
express = require('express');
bodyParser = require('body-parser');
swig = require('swig');
server = express();

rootdir = path.resolve(__dirname, '.');
viewsdir = path.resolve(rootdir, './views');
staticdir = path.resolve(rootdir, './static');

port = 3000;

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', viewsdir);

server.use(express.static(staticdir));
server.use(bodyParser());

server.get('/', function(req, res) {
	res.render('index');
});

server.post('/parse', function(req, res) {
	res.send('listo');
});

server.listen(port);
console.log('El servidor inicio en el puerto: ' + port);