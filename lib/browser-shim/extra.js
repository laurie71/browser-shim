// COPYRIGHT

//var shim = require('./browser-shim');
var fs = require('fs');

var cache = null;

var loadCache = function() {
    if (cache == null) {
        var file = __dirname + '/browser-shim.js';
        cache = fs.readFileSync(file, 'utf-8');
    }
};

var serveCache = function(httpResponse) {
    loadCache();
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(buffer);
    res.end;
};



// ------------------------------------------------------------------------
// one-line web-server utility function
// usage:
//      var shim = require('browser-shim');
//      var web = shim.shimHttp(12345);
//      console.log('serving browser-shim on http://'
//          web.host + ':' + web.port + web.path;
// result:
//      serves browser-shim to the client as
//      http://localhost:12345/browser-shim.js
// ------------------------------------------------------------------------
(function() {
    var http = require('http');
    var url = require('url');

    var web = provide('shim.web');

    web.shimHttp = function(path, port) {
        var server = { path: '/browser-shim.js', port: 8010 };

        // both args are optional:
        if (typeof(path) === 'number') {
            server.port = path;
        } else {
            if (path) server.path = path;
            if (port) server.port = port;
        }

        server.http = http.createServer(function serve(req, res) {
            var path = url.parse(request.url).pathname;
            if (path == server.path) serveCache(res);
        });

        server.http.listen(server.port);
        this.server = server;
    };
})();

//// ------------------------------------------------------------------------
//// shim middleware for Connect/Express
//// usage:
////      ...
//// ------------------------------------------------------------------------
//(function() {
//    try {
//        var connect = require('connect');
//        var server = connect.createServer
//    } catch (e) {
//
//    }
//})();
