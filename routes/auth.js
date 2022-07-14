const router = require('express').Router();
const User = require('../model/User'); 
const { registerValidation,loginValidation } = require('./validation');

const bcrypt = require('bcryptjs')


router.post('/register',async(req,res)=>{

//validate the date before we make a user
  const {error}= registerValidation(req.body);
 if(error) return res.status(400).send(error .details [0].  message)

//checking if user i already in the database
 const  emailExist =  await  User.findOne({email:req.body.email }) ;
 if(emailExist) return res.status(400).send('Email alredy Exists')

 //Hash the passwords
    
   const salt  = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password,salt)

//Create a new user
  const user =new User({
    name:req.body.name,
    email:req.body.email,
    password:hashedPassword ,
  });
  try{ 
     const savedUser = await user.save(); 
     res.send(savedUser);
  }catch(err){
    res.status(400).send(err);
  }

});
router.post('/login',(req,res)=>{
    res.send('login')
})


module.exports = router;
