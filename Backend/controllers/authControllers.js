import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const isProd = process.env.NODE_ENV === 'production';

async function signup(req, res){
    //deconstructing the data from the request body
    const {username, email, password} = req.body;

    //checking if the data is present or not
    if(!username || !email || !password){
        return res.json({
            success: false,
            message: "Please provide all the fields"
        })
    }

    //checking if the user already exists or not
    const existUser = await User.findOne({username});
    if(existUser){
        return res.json({
            success: false,
            message: "User already exists"
        })
    }
    
    
    const newUser = new User({
        username,
        email,
        password
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();

    //generating token
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    //setting the cookie with the token
    res.cookie('token', token, {
        httpOnly: true,
        secure: isProd,               // only true in production
        sameSite: isProd ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000
    }).json({success: true, message: 'Logged in successfully' });
}

async function login(req, res) {
    let { email , password} = req.body;

    if(!email || !password){
        return res.json({success: false, message: "Please provide all the fields"});
    }

    const user = await User.findOne({email});

    if(!user){
        return res.json({success: false, message: "User does not exist"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.json({success:false, message: "Invalid credentials"});
    }

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie('token', token, {
        httpOnly: true,
        secure: isProd,               // only true in production
        sameSite: isProd ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000
    }).json({success: true, message: 'Logged in successfully' });
}

async function logout(req, res) {
    res.cookie('token', null, {
        httpOnly: true,
        secure: isProd,               // only true in production
        sameSite: isProd ? 'none' : 'lax',
        maxAge: 0
    });
    res.json({success: true, message: 'Logged out successfully' });
}

async function getMe(req, res) {
    if(!req.user){
        return res.json({success: false, message: "User not found"});
    }
    const user = await User.findById(req.user.id).select("-password -__v");
    if(!user){
        return res.json({success: false, message: "User not found"});
    }
    res.json({success: true, user: req.user, isAdmin: user.admin});
}

export {signup, login, logout, getMe};