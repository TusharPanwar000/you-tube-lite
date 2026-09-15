import mongoose from 'mongoose';


import {DB_NAME} from "../constants.js"


const dbConnect = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`\n Mongo db connected !! DB Host: ${ConnectionInstance.connection.host}`)
    
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1)
  }
}

export default dbConnect;