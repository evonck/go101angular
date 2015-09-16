//server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    
    // listen (start app with node server.js) ======================================
    // application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
     app.get('/core.js', function(req, res) {
        res.sendfile('./core.js'); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.listen(8080);
    console.log("App listening on port 8080");