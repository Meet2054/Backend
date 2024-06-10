import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});

import connectDB from './db/index.js';


connectDB();



















// Create an express app
/*
import mongoos from 'mongoose';
import { DB_NAME } from './constants';
import express from  'express';
const app = express();  
;(async ()=>{
    try{
        await mongoos.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        app.on("error",(error)=>{
            console.error("Error: ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(` Server is running on port ${process.env.PORT}`);
        })

    }
    catch(error){
        console.error("error :",error);
        throw error;
    }
})()
*/