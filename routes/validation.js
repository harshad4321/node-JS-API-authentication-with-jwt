//Validation
const Joi = require('@hapi/joi');


//Register Validation
const Schema = Joi.object({
    name:Joi.string().min(4).required(),
    email:Joi.string().min(4).required().email(),
    password:Joi.string().min(5).required()
});