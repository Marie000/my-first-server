var express = require('express');
//create express app:
var app = express();
//create route (get requests)

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentification, function(req,res){
    res.send('About us');
});

app.use(express.static(__dirname + "/public"));

//listen to port
app.listen(process.env.PORT || 3000);