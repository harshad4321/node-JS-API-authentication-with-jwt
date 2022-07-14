const router = require('express').Router();
const User = require('../model/User'); 




const Schema = Joi.object({
    name:Joi.string().min(4).required(),
    email:Joi.string().min(4).required().email(),
    password:Joi.string().min(5).required()
});


router.post('/register',async(req,res)=>{

//validate the date before we make a user
  

 const {error} = Schema.validate(req.body);
 if(error) return res.status(400).send(error .details [0].  message)




  const user =new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
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
