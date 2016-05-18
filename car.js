var mongoose = require('mongoose');

var schema = mongoose.Schema;
var carSchema = mongoose.Schema({
    id: {type: Number, index:1, required: true, unique: true},
    manufacturer: String,
    model: String,
    color: String,
    year: Number
}, { collection: 'cars'});

var carModel = mongoose.model('cars' , carSchema);

module.exports = carModel;