const express = require('express');
const path = require('path');
const router = express.Router();

console.log(__dirname);
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/component'+'/login.html'));
});

module.exports = router;