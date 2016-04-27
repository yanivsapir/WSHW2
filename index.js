var express = require('express');    
var app = express(); 
var url = require('url'); 
var carShowRoowModel = require('./carModelsModule');  

app.get('/', function (req, res) { 
    res.status(200).json({status:true, message:"Car Show Room app"}); 
}); 

app.get('/getCarById', function (req, res) { 
    var urlParse = url.parse(req.url , true); 
    var query = urlParse.query; 
    var car = carShowRoowModel.getCarById(query.id); 
    res.set('getCarById', 'ok'); 
    res.json(car); 
}); 

app.get('/getAllCars', function (req, res) { 
  var allCars = carShowRoowModel.getAllCars(); 
  res.set('getAllCars', 'ok'); 
  res.json(allCars); 
}); 
 
app.get('/getCarsByYear/:year', function (req, res) {     
    var getCarsByYear = carShowRoowModel.getCarsByYear(req.params.year); 
    res.set('getCarsByYear', 'ok'); 
    res.json(getCarsByYear); 
});  
 
app.all('*', function (req, res) { 
    res.status(404).json({status:false, message:"Wrong Request"}); 
}); 

app.listen(process.env.PORT || 3000); 
console.log('Node app is running on port', process.env.PORT); 
