import app from "./app.js";
import {connectionOfDatabase} from "./src/database/connection.js";
const databaseConnction = await connectionOfDatabase();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`✅ SERVER IS RUNNING ON PORT :  ${PORT} 😎`);
});