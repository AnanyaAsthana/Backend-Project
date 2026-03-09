//require("dotenv").config({path : './env'});

import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({path : './.env'});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!!", err)
})


















/* approach one by making iffi and using async await inside it.

import express from "express";
import dotenv from "dotenv";

const app = express();

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.error("ERROR: ", error);
            throw error
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    }catch(error){
        console.error("ERROR (utils/index.js): ", error);
        throw error
    }
} )()

*/
