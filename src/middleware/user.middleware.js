import UserModel from "../model/user.model.js"
// TODO : CHECK THE EMAIL IS ALREADY EXISTE 
export const isEmailExiste = async(emailUser)=>{
    try {
        const email = await UserModel.findOne({email : emailUser})
        if(email){
         throw new Error("EMAIL USER IS ALREADY EXISTE ! (ونبي بلاش استهبال بقا 😂)")
        }
        return true 
    } catch (emailError) {
        console.log(`❌ ERROR IN EMAIL CHECK : ${emailError}`)
    }
}