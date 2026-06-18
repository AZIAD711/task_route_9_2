import mongoose from "mongoose"

export const connectionOfDatabase=async()=>{
    // TODO : DATABASE URL 
    const databaseUrl = "mongodb://localhost:27017/route_task_9"
    // TODO :  DATABASE CONNECTION 
    try {
        await mongoose.connect(databaseUrl,{
            serverSelectionTimeoutMS:10000,
            maxPoolSize:10
        })
        console.log("✅ DATABASE IS CONNECTED SCCUESSFULLY 😊")
        
    } catch (databaseError) {
        console.log(`❌ ERROR IN DATABASE CONNECTION (🥲) : ${databaseError}`)
    }
}