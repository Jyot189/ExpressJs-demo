const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname+'/component'+'/signup.html'));
    // res.sendFile('fonted/component/signup.html');
    res.sendFile(path.join(__dirname,'../../'+'fonted/component/signup.html'));
});

module.exports=router;