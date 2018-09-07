const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"Jonle",home:"active",archives:"",tags:"",about:""});
});

module.exports = router;
