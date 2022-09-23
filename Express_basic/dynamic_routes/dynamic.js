var express = require('express');
var app = express();

// app.get('/:id', function(req, res){
//     res.send(req.params.id);
// });
// app.listen(3000);

//input=http://localhost:3000/123

// app.get('/things/:name/:id', function(req,res){
//     res.send('id'+ req.params.id+'name'+req.params.name);
// })

//pattern matched routes
app.get('/things/:id([0-9]{5})', function(req,res){
    res.send(req.params.id);
})

app.get('*', function(req,res){
    res.send('invalid url');
})

app.listen(3000);