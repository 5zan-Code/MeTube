import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(db_url)
        console.log(`Database connected !! DB Host: ${connectionInstance} `)    
    } 
    catch (error) {
        console.log("MongoDB Connection error", error)
            process.exit(1)
    }
}

connectDB()





