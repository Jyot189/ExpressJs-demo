const express = require('express');
const path = require('path');
const router = express.Router();
const signupSchema = require('../schema/signupSchema')

router.get('/', function (req, res) {
    var personInfo = req.query;
    
    const newPerson = new signupSchema({
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        birthday: req.query.birthday,
        Password: req.query.Password,
        Gender: req.query.Gender,
        email: req.query.email,
        phoneNumber: req.query.phoneNumber,

    });

    newPerson.save((err, doc)=> {
        console.log(err);
        if (!err){
            // req.flash('success', 'User added successfully!');
            res.redirect('/login');
        }
        else{
            console.log('Error during record insertion : ' + err);
        }
    });
});
module.exports = router;