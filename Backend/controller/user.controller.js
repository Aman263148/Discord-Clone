import { User } from "../models/user.model.js"

export const SignIn = async(req,res)=>{
    try {
        const {userName,email,password} = req.body
        
        const UserExist = await User.findOne({email})
        if(UserExist){
            res.status(401).json({success:true,message:`${UserExist.userName}, go to logIn deshBoard..`})
        }
        const user = await User.create({
            userName,
            email,
            password,
        })
        res.status(200).json({
            success:true,
            message:'user created Successfully...',
            user
        })
    } catch (error) {
        console.log('error in the SignIn function..',error.message)
        res.status(500).json({success:false,message:'Internal Server Error...'})
    }
}