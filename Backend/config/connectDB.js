import mongoose from "mongoose";

async function connectDB(){
    try{
        mongoose.connect(process.env.MONGO_CONNECT_LINK).then(()=>{
            console.log("Database Connected");
        }).catch((e) => {
            console.error("mongoDB connection error:", e);
        })
    } catch(e){
        console.log(e);
    }
}

export default connectDB;