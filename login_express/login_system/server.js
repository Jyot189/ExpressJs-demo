const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const login =require('./router/login.js');
const signup= require('./router/signup.js');
const person= require('./router/person_info.js');

app.use('/login',login);
app.use('/signup',signup);

app.use('/person',person);
const port=process.env.PORT || 5000

router.get('/',(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname+'/router/component'+'/index.html'));
});

app.use('/',router);


// router.get('/person',function(req,res) {
//     var personInfo=req.body;
//     var name=req.body.firstName;
//     console.log(name);
// });
// app.use('/person',router);
app.listen(port,()=>{
    console.log(`listening on port http://localhost:5000`)
})


