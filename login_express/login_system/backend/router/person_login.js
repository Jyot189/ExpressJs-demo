// const express = require('express');
// const path = require('path');
// // const { db } = require('../schema/signupSchema');
// const db=require('../DBConnect/dbconnect');
// const router = express.Router();
// var loginSchema=require('../schema/signupSchema');
// // var MongoClient = require('mongodb').MongoClient;
// // const client= require('../DBConnect/dbconnect');
// // var MongoClient = require('mongodb').MongoClient;
// // const mongoose=require('mongoose');
// // var url = "mongodb://localhost:27017/";

// router.post('/', function (req, res) {
//     const personLogin = req.query;//html form data using retive

//     const check=db.Person_collection.find({email:req.queryemail});
//     console.log(check);
    

    

//     // const db = client.db('star-wars-quotes');
//     // const cursor = db.collection('Person_collection').find();
//     // console.log(cursor);


//     // MongoClient.connect(url, ,function (err, db) {
//     //     if (err) throw err;
//     //     var dbo = db.db("loginsystem_db");
//     //     dbo.collection("Person_collection").find({email:req.params.email}).toArray(function (err, result) {
//     //         if (err) throw err;
//     //         res.json(result);
//     //         db.close();
//     //     });
//     // });


//     // const loginPerson=new loginSchema({
//     //     email:req.query.email,
//     //     Password:req.query.Password,
//     // });


//     // var result = loginSchema.find(loginPerson,function(err, response){
//     //     console.log(err);
//     // })
//     //console.log("result", result);
//     // loginSchema.findOneAndRemove(loginPerson);

//     //    loginSchema.findOne(loginPerson,(err, athletes) => {
//     //         // console.log(athletes.Password);
//     //         if (!err) {
//     //             // res.redirect('/welcome');
//     //         }else{
//     //             res.redirect('/login')
//     //         }
//     //     });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);

router.post('/', function (req, res) {
    async function run() {
        try {
          await client.connect();
          // database and collection code goes here
          const db = client.db("loginsystem_db");
          const coll = db.collection("Person_collection");
      
          // find code goes here
          const cursor = coll.find();
            // console.log(cursor);
          // iterate code goes here
          await cursor.forEach(console.log);
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);
})

module.exports = router;
