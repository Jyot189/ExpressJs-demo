const express = require('express');
const path = require('path');
const { db } = require('../schema/signupSchema');
const router = express.Router();
// var loginSchema=require('../schema/signupSchema');
// var MongoClient = require('mongodb').MongoClient;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/loginsystem_db";

router.post('/', function (req, res) {
    const personLogin = req.query;//html form data using retive




    // MongoClient.connect(url, function (err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("loginsystem_db");
    //     dbo.collection("Person_collection").find({email:req.params.email}).toArray(function (err, result) {
    //         if (err) throw err;
    //         res.json(result);
    //         db.close();
    //     });
    // });


    // const loginPerson=new loginSchema({
    //     email:req.query.email,
    //     Password:req.query.Password,
    // });


    // var result = loginSchema.find(loginPerson,function(err, response){
    //     console.log(err);
    // })
    //console.log("result", result);
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