import express from 'express'
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV != "production"){
    dotenv.config();
}

connectDB();

app.use(cors({origin: process.env.FRONTEND_LINK}));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        hello: "world"
    })
})

app.listen(PORT,  () => {
    console.log("Server Satrted at port 8080");
})