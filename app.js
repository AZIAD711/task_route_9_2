// TODO : ALL IMPORTS 
import express from "express";
import authRoutes from "./src/module/auth/auth.routing.js";
const app = express();
app.use(express.json());
// TODO : ALL ROUTES 
app.use("/v1/auth", authRoutes);
export default app;