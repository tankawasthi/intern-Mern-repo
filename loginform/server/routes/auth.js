import {Router} from 'express';
import {body, validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/roles.js';

const router = Router();

// register

router.post(
    '/register',
    [
        body('name').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({min:6}),
        body('role').optional().isIn(['user','editor','admin'])
    ],
    async (req , res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()});

        const {name,email,password,role="user"}= req.body;
        const exists= await User.findOne({email});
        if(exists) return res.status(409).json({message:'Email already registered..'})

        const user = await User.create({name,email,password,role});

 res.status(201).json({ id: user._id, name: user.name, email: user.email, role: user.role });

    }
);

// login

router.post(
    '/login',
    [body('email').isEmail(),body('password').notEmpty()],
    async(req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()});

        const {email, password}= req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({message:'invalid Credentials'});

        const ok = await user.comparePassword(password);
        if(!ok) return res.status(401).json({message:'invalid credentials'})

        const payload = {id: user._id,role:user.role,name:user.name};
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES || '1d'});
        res.json({token,user:payload});
    }
);

// profile for any logged users
router.get('/me',authenticate,async(req,res)=>{
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
});

// Admin toutes
router.get('/admin-stats',authenticate,authorizeRoles('admin'),async(req,res)=>{
    const counts= await User.aggregate([
        {$group:{_id:'$role',count:{$sum:1}}}
    ]);
    res.json({message:'Secret admin stats', counts})
});
// Editor or Admin route 
router.get('/editor-tools', authenticate, authorizeRoles('editor', 'admin'), (req, res) => {
  res.json({ tools: ['publish', 'unpublish', 'edit'] });
});

export default router;