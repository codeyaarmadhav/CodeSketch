import './config/envConfig.js';
import express from 'express'
import connectDB from './config/connectDB.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;

//connecting to the database
connectDB();

app.use(cors({origin: process.env.FRONTEND_LINK, credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/project", projectRoutes);
app.use("/api/v2/payment", paymentRoutes);

app.get("/", (req, res) => {
    res.json({
        hello: "world"
    })
})

app.listen(PORT,  () => {
    console.log("Server Satrted at port 8080");
})