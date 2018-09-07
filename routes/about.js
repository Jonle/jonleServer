const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    res.render('about/index',{title:'About | Jonle',home:"",archives:"",tags:"",about:"active"});
});
module.exports = router;