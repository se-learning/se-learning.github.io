var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    
    // Remove params string
    if(filePath.indexOf('?')>=0) {
        filePath = filePath.substring(0, filePath.indexOf('?'));
    }
    if(filePath.indexOf('#')>=0) {
        filePath = filePath.substring(0, filePath.indexOf('#'));
    }

    var stats;
    try {
        stats = fs.lstatSync(filePath); // throws if path doesn't exist
    } catch (e) {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 Not Found\n');
        response.end();
        return;
    }

    if (stats.isDirectory()) {
		// Directory, Show index file					
		if (filePath.endsWith('/')) {
			filePath += 'index.html';
		} else {
			filePath += '/index.html';
		}
    }
    
    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(3000, '0.0.0.0', () => {
    console.log(`Node server running on port 3000`);
});

/*
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

http.createServer(function (req, res) {	
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), uri);
    var stats;

    try {
        stats = fs.lstatSync(filename); // throws if path doesn't exist
    } catch (e) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found\n');
        res.end();
        return;
    }
console.log(filename);
    if (stats.isFile()) {
        // path exists, is a file
        var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];
        if (!mimeType) mimeType = "text/plain";
        res.writeHead(200, { 'Content-Type': mimeType });

        var fileStream = fs.createReadStream(filename);
        fileStream.pipe(res);
    } else if (stats.isDirectory()) {
        // path exists, is a directory
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Index of ' + uri + '\n');
        res.write('TODO, show index?\n');
        res.end();
    } else {
        // Symbolic link, other?
        // TODO: follow symlinks?  security?
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('500 Internal server error\n');
        res.end();
    }
}).listen(3000, '0.0.0.0', () => {
    console.log(`Node server running on port 3000`);
});
*/