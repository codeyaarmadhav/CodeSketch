import express from 'express'
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV != "production"){
    dotenv.config();
}

//connecting to the database
connectDB();

app.use(cors({origin: process.env.FRONTEND_LINK, credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/project", projectRoutes);

app.get("/", (req, res) => {
    res.json({
        hello: "world"
    })
})

app.listen(PORT,  () => {
    console.log("Server Satrted at port 8080");
})