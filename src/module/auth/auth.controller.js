import { request } from "node:http"
import { addNewUserService, loginUserService } from "./auth.service.js"
import { response } from "express"
// TODO : ADD NEW USER 
export const addNewUserController = async (request, response) => {
    try {
        const userData = await addNewUserService(request.body)
        return response.status(201).json({
            "sccuessMessage": "Added New User (ابسط يعم بقيت عندنا سيتسم😊)",
            "data": userData
        })
    } catch (error) {
        return response.status(500).json({
            "errorMessage": "Internal Server Error !",
            "error": error
        })
        console.log(`❌ ERROR IN ADD NEW USER (CONTROLLER) : ${error}`)
    }
}
// TODO : LOGIN USER 
export const loginUserController = async (request, response) => {
    try {
        const email = request.body.email
        const password = request.body.password
        const userData = await loginUserService(email, password)
        if (!userData) {
            return response.status(404).json({
                "errorMessage": "Invalid Email or Password !",
            })
        }
        return response.status(200).json({
            "sccuessMessage": "Login Sccuessfully",
            "data": userData
        })
    } catch (error) {
        return response.status(500).json({
            "errorMessage": "Internal Server Error !",
            "error": error
        })
        console.log(`❌ ERROR IN LOGIN USER (CONTROLLER) : ${error}`)
    }
}