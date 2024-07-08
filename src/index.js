import MongoDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({ path: "./env" });

MongoDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Running on Port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("Connection Failed", error);
    });

/*
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on((error)=>{
            console.log("Error",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.log("Error",error);
        throw error;
    }
})()

*/
