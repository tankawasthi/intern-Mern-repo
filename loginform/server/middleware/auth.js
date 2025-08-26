import jwt from 'jsonwebtoken';

export function authenticate(req,res,next){
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startWith('Bearer')?authHeader.slice(7):null;
    if(!token) return res.status(401).json({message:'No token Provided'});

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next()
    }catch(err){
        return res.status(401).json({message:"invalid or expired token"})
    }
}