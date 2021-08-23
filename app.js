//Express Package : server management
const express = require('express');
//Path package : using the paths
const path = require('path');
//dotenv package : using the .env file
const dotenv = require('dotenv');
//mongoose package: using mongDB
const mongoose = require('mongoose');
//body-parser package: using the form post
const bodyParser = require('body-parser');
const app = express();
//custom routes file
const weightRouter = require('./routes/weightTracker');


/* Middleware Starts */

//setting the views path to views folder
app.set('views', path.join(__dirname, 'views'));
//setting the default view engine to ejs
app.set('view engine', 'ejs');
//setting the public folder for the resources
app.use(express.static('public'));
//setting the body parser
app.use(bodyParser.urlencoded({extended: true}));
//using the dotenv for the .env files
dotenv.config({path: './config.env'});
//connsecting with the mongoDB database
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
// using the routes
app.use(weightRouter);

/* Middleware Ends */


let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server started on port 3000");
});

