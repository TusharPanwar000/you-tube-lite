import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';
import connectdb from './db/index.js'
import dotenv from 'dotenv'


dotenv.config({
  path:'./env'
})



connectdb()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port : ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log('Mongo db connection field')
})





/*import express from 'express';

const app = express();

( async() => {
  try {
    mongoose.connect(`{${process.env.MONGO_URI} / ${DB_NAME}}`);
    app.on("error", (error) => {
      console.log("ERROR", error)
      throw error
    })

    app.listen(process.env.PORT, () => {
       console.log(`App is listning on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR", error)
  }
})()
  */
