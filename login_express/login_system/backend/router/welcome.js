const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname+'/component'+'/welcome.html'));
    // res.sendFile('fonted/component/welcome.html');
    res.sendFile(path.join(__dirname,'../../'+'fonted/component/welcome.html'));
})

module.exports = router;