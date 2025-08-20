//create jwt token

const jwt = require('jsonwebtoken');
const secretKey = 'abcde12345';
const token = jwt.sign({
    id:1,
    username:'tank',
    role: 'admin'
},secretKey,{expiresIn:'1h'});
console.log("The obtained jwt token is: " ,token);
console.log(typeof(token))


//verifying jwt token

jwt.verify(token,secretKey,(err,decoded)=>{
    if(err){
        console.log("invalid token");
    }else{
        console.log("decoded token:",decoded)
    }
    // console.log(typeof(decoded));
})