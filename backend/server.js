import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMongoDB.js';
import helmet from 'helmet';
import {app,server} from './socket/socket.js';


dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname =path.resolve();
app.use(express.json());
app.use(cookieParser());

// Set Content Security Policy
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "data:"],
      imgSrc: ["'self'", "data:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
    }
  }));
  

// Additional security headers
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));

app.get('/', (req, res) => {
  res.send("hello");
});

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server Started on port " + PORT);
});
