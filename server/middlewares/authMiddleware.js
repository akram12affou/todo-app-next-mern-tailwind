import jwt from 'jsonwebtoken';

export const verifyUser = async  (req,res,next) => {
      const token = req.headers.token
      if(!token){
       res.status(403).json('not logged in')
      }else{
       const isTokenCorrect = await jwt.verify(token ,"secret");
       if(isTokenCorrect){
         next();
       }else{
        res.status(403).json('false token')
       }
      }  
}

export default verifyUser 