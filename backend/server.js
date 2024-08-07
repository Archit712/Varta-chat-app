import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMongoDB.js';
import helmet from 'helmet';
import { app, server } from './socket/socket.js';

// Load environment variables
dotenv.config(); 

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Debugging logs
console.log('MONGO_DB_URI:', process.env.MONGO_DB_URI);
console.log('PORT:', process.env.PORT);

app.use(express.json());
app.use(cookieParser());

// Security settings




app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server started on port " + PORT);
});
