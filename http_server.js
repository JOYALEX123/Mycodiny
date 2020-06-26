var http = require('http');
var port = 3000;

// Start the server instance
let server = http.createServer( function (req, res) {
        res.write( 'Hello World!' ); // Response content
        res.end(); // End response
});
server.listen( port ); // the server object listens on port 3000