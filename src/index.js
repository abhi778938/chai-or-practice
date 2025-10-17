import dotenv from 'dotenv'
import dataconnection from "./db/db.js";
import { app } from './app.js';
dotenv.config({ path: './env' })


dataconnection().then(
    app.listen(`${process.env.PORT||8000}`,()=>{
        console.log(`server was connected at Port : ${process.env.PORT}`);
        
    })
).catch((err)=>{
    console.log("DATABASE CONNECTION FAILED !!",err);
    
})