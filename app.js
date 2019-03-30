const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");

const app = express();


// mongodb
// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/logindb",{useNewUrlParser : true})
    .then(()=>console.log('database connected ..'))
    .catch(err=> console.log(err) ); 


//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Bodyparser
app.use(express.urlencoded({extended : false}))

//Routes
app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));

app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
