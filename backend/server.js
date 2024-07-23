import express from  'express';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMongoDB.js';

const app =express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send("hello");
})

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/messages",messageRoute);
app.use("/api/users",userRoute);

app.listen(PORT,()=> {
    connectToMongoDB();
    console.log("Server Started");

});