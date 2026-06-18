import {addNewUserService} from "./auth.service.js"
// TODO : ADD NEW USER 
export const addNewUserController = async(request,response)=>{
    try {
        const userData = await addNewUserService(request.body)
        return response.status(201).json({
            "sccuessMessage" : "Added New User (ابسط يعم بقيت عندنا سيتسم😊)",
            "data":userData
        })
    } catch (error) {
        return response.status(500).json({
            "errorMessage" : "Internal Server Error !",
            "error":error
        })
          console.log(`❌ ERROR IN ADD NEW USER (CONTROLLER) : ${error}`) 
    }
}