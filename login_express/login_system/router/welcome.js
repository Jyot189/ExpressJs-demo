const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/component'+'/welcome.html'));
})

module.exports = router;