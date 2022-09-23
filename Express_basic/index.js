var express = require('express');
var app = express();

// var things= require('./router/things.js');

// app.use('/things',things);


//pug use
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'))
app.get('/about', function(req, res){
    res.render('test');
})
app.listen(3000);





// app.get('/', function(req, res){
//     res.send('welcome express');
// })

// app.post('/', function(req, res){
//     res.send('welcome');
// })
// app.listen(3000,function(){
//     console.log('lisening server');
// })