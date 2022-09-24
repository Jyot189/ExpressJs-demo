const mongoose = require('../DBConnect/dbconnect');
// const {mongoose} =('../DBConnect/database.js');
var personSchema =new mongoose.Schema({
    firstName: String,
    lastName:String,
    birthday:String,
    Password:String,
    Gender:String,
    email: String,
    phoneNumber:String,
});

const Person=mongoose.model('Person_collection',personSchema);
module.exports = Person;
