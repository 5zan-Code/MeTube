import mongoose from "mongoose";
import express, { application } from "express";
import {DB_NAME} from "./constants"

const app = express();




/*
;(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGO-URL}/${DB_Name}`)
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is start listening at http:localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
})()
*/