import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" }); // Added return
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.json({ success: false, message: "Invalid Credentials." }); // Added return
        }

        const token = createToken(user._id);
        return res.json({ success: true, message: "Logged in successfully", token }); // Added return

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error" }); // Added return
    }
}


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res) =>{
    const {name,email,password} = req.body;
    try {
        //checking if user exists
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.status(400).json({success:false,message: "Email already exists!"});
        }
        //validation of email & password
        if(!validator.isEmail(email)) {
            return res.status(400).json({success:false,message: "Invalid email!"});
        }
        if(password.length < 8) {
            return res.status(400).json({success:false,message: "Password must be at least 8 characters"})
        }

        //Hashing password
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        //saving user to database
        const user = await newUser.save();

        //creating token
        const token = createToken(user._id)
        res.status(200).json({success:true,token});


    } catch (error) {
        console.log(error);
        return res.status(400).json({success:false,message: "Error"})
    }
}

export  {loginUser,registerUser}