import jwt from "jsonwebtoken"
export const generateToken = (userId)=>{
return jwt.sign(
    {
        userId
    },
    "Ahmed1234",
    {
       expiresIn:"2h" 
    }
)
}