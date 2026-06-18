import UserModel from "../../model/user.model.js"
import {isEmailExiste} from "../../middleware/user.middleware.js"
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