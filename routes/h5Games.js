const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    res.render('tags/h5-Games/index',{title:'h5-Games | Jonle\'s Blog',home:"",archives:"active",tags:"",about:""})
});
module.exports = router;