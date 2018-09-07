const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    res.render('tags/index',{title:'Tags | Jonle',home:"",archives:"",tags:"active",about:""});
});
module.exports = router;