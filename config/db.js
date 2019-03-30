const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
export const connect=  mongoose.connect("mongodb://localhost:27017/logindb");

//module.exports = connect;