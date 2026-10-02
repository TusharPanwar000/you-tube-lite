const express = require('express');
import core from 'cors'
import cookieParser from 'cookie-parser'
const app = express();


app.use(cors({
  origin: process.env.CORS.ORIGIN,
  Credential:true
}))

app.use(express.json({limit: '18kb'}));
app.use(express.urlencoded({extended:true, limit: '18kb'}));
app.use(express.static("public"));
app.use(coockieParser());


export {app}