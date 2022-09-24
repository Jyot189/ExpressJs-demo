var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/loginsystem_db', {useNewUrlParser: true});

module.exports =mongoose;