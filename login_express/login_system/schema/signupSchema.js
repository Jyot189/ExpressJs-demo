const mongoose = require('../DBConnect/database.js');
// var Schema = mongoose.Schema;
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/loginsystem_db', {useNewUrlParser: true});
// var conn = mongoose.connection;
// conn.on('connected', function() {
//     console.log('database is connected successfully');
// });
// conn.on('disconnected',function(){
//     console.log('database is disconnected successfully');
// })
// conn.on('error', console.error.bind(console, 'connection error:'));
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

//signup_db