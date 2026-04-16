import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})



connectDB()





/*
import express from "express"
const app = express()
// database i always in another continent, use async await;


( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}`)
       app.on("error", () => {
        console.log("errr", error)
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening in port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
})()

*/