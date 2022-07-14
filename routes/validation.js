//Validation
const Joi = require('@hapi/joi');
const { Schema } = require('mongoose');
const { schema } = require('../model/User');


//Register Validation 

const registerValidation=data=>{
    const schema = Joi.object({
        name:Joi.string().min(4).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    return  schema.validate(data );
};

const loginValidation=data=>{
    const Schema = Joi.object({
       
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    return Schema.validate(data );
};
module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation; 