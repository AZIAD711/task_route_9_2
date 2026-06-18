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
// TODO : VERIFY TOKEN 
export const verfiyToken = (request,response)=>{
const token = request.header.authorization
if(!token){
    return response.status(400).json({"errorMessage":"Token is required ! (بلاش استهبال 😂)"})
}
try {
    const decoded = JsonWebTokenError.verify(
        token,
        "Ahmed1234"
    )
    user.request = decoded
} catch (error) {
    return response.status(404).json({"errorMessage":"Token is invalid ! (بلاش استهبال 😂)"})
    console.log(`❌ ERROR IN VERFIY TOKEN (MIDDELWARE) : ${error}`)
}
}