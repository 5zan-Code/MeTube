import dotenv from "dotenv"
import app from './app.js'
import connectDB from "./db/index.js"
import colors from 'colors'


dotenv.config()
connectDB
.then( () => {
    app.on ("error", (error)=> {
        console.log("ERROR :", error)
        throw error
    })

    app.listen(process.env.PORT || 5000, ()=> {
        console.log(`-> Server start spinning at http://localhost:${process.env.PORT}`.bgCyan.black )
    })
})
.catch(err => {
    console.log("MONGO DB connection failed !!!", err)
})