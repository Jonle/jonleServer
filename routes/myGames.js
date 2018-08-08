const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    res.render('2018/06/30/myGames/index',{title:'MyGames | Jonle\'s Blog',home:"",archives:"active",tags:"",about:""});
});
module.exports = router;