import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from "colors"

dotenv.config()

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.DB_URL)
        console.log(`Database connected !! DB Host: ${connectionInstance.connection.host} `.bgGreen.black)    
    } 
    catch (error) {
        console.log("MongoDB Connection error", error)
            process.exit(1)
    }
}

connectDB()





