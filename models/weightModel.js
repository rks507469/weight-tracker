// require mongoose package
const mongoose = require('mongoose');

//creating the schema of the document
let weightModelScheme = new mongoose.Schema({
    weight: Number,
    datelabel: String
}, {
    versionKey: false
});

//exporting the module for usning it in other file
module.exports = mongoose.model('WeightModel', weightModelScheme);