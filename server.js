// set up ========================
    var express  = require('express');
    var app      = express();
    var morgan = require('morgan');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');

    // configuration =================

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());


    /*
      Dummy API Routes
    */

  var dummyItems = [];
  var generateInstructors = function (){
    console.log("Generating 30 Dummy Items...");
    //Nothing important goes on here - we are just generating dummy items.
    //Take note, though, of the keys/attributes of each dummy item - we bind to these using ng-model in our form!
    for(var x = 0; x <30; x++){
      dummyItems.push({'name':'Item'+x,
                      'description':'Instructor'+x+' is very nice',
                      'itemCode': 'IT-'+x,
                      'information':' This is information about the item your are looking at'});
    }
    console.log("Generated All "+dummyItems.length+ " Dummy Items");
    return;
  };

    //Route to get Roles
    app.get('/api/ishlema/items', function (req, res){
      //here you could do great things indeed - but not now...
      console.log("Tutorial-Server: Get-Items -- There are ", dummyItems.length ," Items");
      res.json(dummyItems);
    });

    //route for serving the index.html page (sufficient for our single page app)
    app.get('*', function(req, res) {
      // load the single view file (angular will handle the page changes on the front-end)
      res.sendfile('./public/index.html');
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");
    //just generate the dummy items so long
    generateInstructors();
