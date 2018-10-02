var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	fs.writeFile('hello-world.txt', 'Hello to this great world', function (err) {
		if (err) throw err;
		console.log('The file has been saved!');
		res.end();
	});
}).listen(3000);
