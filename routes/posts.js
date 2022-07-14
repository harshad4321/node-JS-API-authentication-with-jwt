const router = require('express').Router();
const User = require('../model/User');
 const verify  = require('./vaifytoken')

router.get('/',verify,(req,res)=>{
    res.json({posts:{
        title:'my first post ',
        description:'random data you shouldnt access'}})
        req.send(req.user)
        User.findOne({_id:req.user})
})


module.exports =router;
