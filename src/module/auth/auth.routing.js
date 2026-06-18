import {addNewUserController} from "./auth.controller.js"
import express from "express"
// TODO : ALL APIS 
const authAPI = express.Router()
// http://localhost:8080/v1/auth/register
authAPI.post("/register",addNewUserController)
export default authAPI
