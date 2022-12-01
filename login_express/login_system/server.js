const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const login =require('./backend/router/login.js');
const signup= require('./backend/router/signup.js');
const person= require('./backend/router/person_info.js');
const personLogin=require('./backend/router/person_login.js');
const welcomePerson=require('./backend/router/welcome.js');

app.use('/login',login);
app.use('/signup',signup);
app.use('/person',person);
app.use('/personLogin',personLogin);
app.use('/welcome',welcomePerson);

const port=process.env.PORT || 5000

router.get('/',(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname+'/fonted/component'+'/index.html'));
});

app.use('/',router);

app.listen(port,()=>{
    console.log(`listening on port http://localhost:5000`)
})


