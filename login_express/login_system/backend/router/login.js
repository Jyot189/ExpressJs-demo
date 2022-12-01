const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../../'+'fonted/component/login.html'));
    // res.sendFile('fonted/component/login.html');
    // res.sendFile("../fonted/component/login.html");
});

module.exports = router;