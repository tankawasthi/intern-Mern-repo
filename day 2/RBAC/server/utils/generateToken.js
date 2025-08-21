const jwt = require('jsonwebtoken');
const Token = require('../models/tokenModel');
const { blacklist } = require('validator');

const generateToken= (userId,type='access')=>{
    const payload={
        id: userId,
        type
    };
    let secret, expiresIn;
    if(type ==='access'){
        secret=process.env.JWT_SECRET;
        expiresIn= process.env.JWT_EXPIRE || '15m';
    } else if(type ==='refresh'){
        secret = process.env.JWT_SECRET+'refresh';
        expiresIn='7d';
    }
    const token = jwt.sign(payload,secret,{expiresIn});

    // calculate expiration date
    const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds()+jwt.decode(token).exp);


    // stores token in db(Optional for refresh tokens)
    if(type ==='refresh'){
        Token.create({userId,token,type,expiresAt})
    }
    return token;
};

const verifyToken = async(token, type='access')=>{
    try{
        let secret;
        if(type==='access'){
            secret=process.env.JWT_SECRET;
        }else if(type==='refresh'){
            secret = process.env.JWT_SECRET + 'refresh';

            const storedToken= await Token.findOne({
                token,
                type,
                blacklisted:false
           });
           if(!storedToken){
            throw new Error('Token is not found or blacklisted');
           }
        }
        const decoded = jwt.verify(token,secret);
        return decoded;
    }catch(err){
        throw new Error('invalid token')
    }
};
module.exports={
    generateToken,
    verifyToken
};