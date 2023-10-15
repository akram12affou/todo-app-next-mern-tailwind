import userModal from "../models/userModal.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
 
export const register  = async (req,res) => {
     const {username,email,password} = req.body;
     if(username=='' || email=='' || password==''){
      res.json('all fields are required')
      return;
     } 
     const user = await userModal.findOne({username})
     if(user){
         res.status(401).json('user or email already in use')
     }else{
         const hashedPassword = await bcrypt.hash(password,10)
         const newUser = new userModal({
            username,
            email, 
            password:hashedPassword
         }); 
         newUser.save();
         const token = await jwt.sign({id :newUser._id} , "secret")
         res.cookie('acces-token',token) 
         res.json({newUser , token})
     }
}
 
export const login  = async (req,res) => {
     const {email,password} = req.body;
     const user = await userModal.findOne({email})
     if(user){ 
        const matchPassword = await bcrypt.compare(password,user.password)
        if(matchPassword){
           const token = await jwt.sign({id :user._id} , "secret")
           res.cookie('acces-token',token) 
           res.json(token) 
        }else{
            res.json('email or password is incorrect')
        }
     }else{
        res.status(401).json("user d'ont exist")
     }
}