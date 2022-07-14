const mongoose= require('mongoose');


const userScheema =new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:4,
    },
    email:{
        type:String,
        require:true,
        min:4,
        max:12,
    },
    password:{
        type:String,
        require:true,
    },
Date:{
        type:Date,
        default:Date.now,
    }
})

module.exports =mongoose.model('User',userScheema) ;