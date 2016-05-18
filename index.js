var express = require('express');    
var app = express(); 
var url = require('url'); 
var mongoose = require('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds025792.mlab.com:25792/carshowroom');

var conn = mongoose.connection;

var Data = require('./car.js');

conn.on('error', function (err) {
    console.log('connection error' + err);
});

conn.once('open', function() {
    console.log('connected.');
});

app.get('/', function (req, res) { 
    res.status(200).json({status:true, message:"Car Show Room app"}); 
}); 

app.get('/getCarById', function (req, res) { 
    var urlParse = url.parse(req.url , true); 
    var query = urlParse.query;
    var carId = query.id;
    Data.find({id: carId}, function(err, user){
        if (err) throw err;
        if (user.length === 0) res.json({"no car found in this id": carId});
        else res.json(user);
    });
}); 

app.get('/getAllCars', function (req, res) { 
    Data.find({}, function(err, user){
        if (err) throw err;
        res.json(user);
    });
}); 
 
app.get('/getCarsByYear/:year', function (req, res) {     
    var carYear = req.params.year;
    Data.find({year: carYear}, function(err, user){
        if (err) throw err;
        if (user.length === 0) res.json({"no cars created on this year": carYear});
        else res.json(user);
    });
});  
 
app.all('*', function (req, res) { 
    res.status(404).json({status:false, message:"Wrong Request"}); 
}); 

app.listen(process.env.PORT || 3000); 
console.log('Node app is running on port', process.env.PORT); 
