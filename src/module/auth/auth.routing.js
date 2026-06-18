import {addNewUserController,loginUserController} from "./auth.controller.js"
import express from "express"
// TODO : ALL APIS 
const authAPI = express.Router()
// http://localhost:8080/v1/auth/register
authAPI.post("/register",addNewUserController)
// http://localhost:8080/v1/auth/login
authAPI.post("/login",loginUserController)
export default authAPI
