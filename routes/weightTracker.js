const express = require('express');
const router = express.Router();
//importing the WeightModel
const WeightModel = require('../models/weightModel');


// Index/Homepage Route
router.get('/', (req, res)=> {
    //if we are rendering the index route then loop through the database documents
    // return the labels array and weight array, and we don't need entries
    WeightModel.find({},{'_id' : 0}).then(weightEntries => {
        res.render('index', {weightEntries: weightEntries}); 
    }).catch(err => {
        console.log(err)
        res.render('/');
    });
});


// forming a current date string label
let d = new Date();
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let dateString = d.getDate().toString() + ' ' + months[d.getMonth()].toString() + ' ' + d.getFullYear().toString();


//index post route / form submission
router.post('/', (req, res) => {
    let newWeightTrack = {
        weight: req.body.weight,
        datelabel: dateString
    }
    WeightModel.create(newWeightTrack).then(weight => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
});


//exporting the module globally to access in other file
module.exports = router;