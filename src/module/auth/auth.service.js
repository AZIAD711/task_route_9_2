import UserModel from "../../model/user.model.js"
import {isEmailExiste} from "../../middleware/auth.middleware.js"
import {verfiyToken} from "../../middleware/auth.middleware.js"
import {generateToken} from "../../token/token.js"
// TODO : ADD NEW USER 
export const addNewUserService = async(userData)=>{
try {
    const userEmail = await isEmailExiste(userData.email)
    return await UserModel.create(userData,{
        validateBeforeSave:true
    })
} catch (error) {
    console.log(`❌ ERROR IN ADD NEW USER (SERVICE) : ${error}`) 
}
}
// TODO : LOGIN USER 
export const loginUserService = async (email, password) => {
    try {

        const user = await UserModel.findOne({ email })

        if (!user) {
            throw new Error("Invalid Email")
        }

        if (user.password !== password) {
            throw new Error("Invalid Password")
        }

        const token = generateToken(user._id)

        return token

    } catch (error) {
        console.log(`❌ ERROR IN LOGIN USER (SERVICE) : ${error}`)
    }
}