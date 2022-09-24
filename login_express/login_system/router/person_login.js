const express = require('express');
const path = require('path');
const router = express.Router();
var loginSchema=require('../schema/signupSchema');


router.post('/', function (req, res) {
    const personLogin=req.query;

    const loginPerson=new loginSchema({
        email:req.query.email,
        Password:req.query.Password,
    });


    var result = loginSchema.find(loginPerson,function(err, response){
        console.log(err);
    })
    console.log("result",result.length);
    // loginSchema.findOneAndRemove(loginPerson);

//    loginSchema.findOne(loginPerson,(err, athletes) => {
//         // console.log(athletes.Password);
//         if (!err) {
//             // res.redirect('/welcome');
//         }else{
//             res.redirect('/login')
//         }
//     });
});
module.exports = router;