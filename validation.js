const joi = require('@hapi/joi');

// Register validation

const registerValidation = (data) => {
    let registerSchema = joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    });

    return registerSchema.validate(data);
};

const loginValidation = (data) => {
    let loginSchema = joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    });

    return loginSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;