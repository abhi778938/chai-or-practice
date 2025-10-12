import mongoose from "mongoose";
import { db_name } from "../constant.js";

const dataconnection= async()=> {
    try {
        const dbconnection=await mongoose.connect(`${process.env.MONGODB_URL}/ ${db_name}`)
        console.log(`Database is connected !! Host is : ${dbconnection.connection.host}`);
        
    } catch (error) {
        console.log(" CONNECTION ERROR",error);
        process.exit(1)
}
}

export default dataconnection;