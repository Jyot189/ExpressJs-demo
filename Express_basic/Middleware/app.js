var express = require('express');
var app = express();

//first Middleware function to log request protocol
app.use('/about',function(req, res, next) {
    console.log('new request is coming',Date.now());
    next();
});

//route handlers
app.get('/about',function(req, res,next) {
    res.send('about Middleware');
    next();
});

app.use('/about',function(req, res){
    console.log('end');
})
app.listen(4000);


// third party middleware

var bodyParser=require('body-parser');
// to parser URL encoded data
app.use(bodyParser.urlencoded({ extended:false}));

//to parser json data
app.use(bodyParser.json());


// cookie middle
var cookieParser=require('cookie-parser');
app.use(cookieParser());