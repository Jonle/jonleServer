const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    res.render('archives/index',{title:'Archive | Jonle',home:"",archives:"active",tags:"",about:""});
});

module.exports = router;
