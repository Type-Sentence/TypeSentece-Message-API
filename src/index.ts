import express, { Request, Response } from "express";
import { Server } from "socket.io";
import routers from "./routers";
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoDbStore from "connect-mongo";
import { config } from "dotenv"
import cors from "cors";
import { mongo } from "mongoose";
require("./database");
const app = express();
config();

app.use(express.json);
app.use(express.urlencoded({
    extended: false,
}))

app.use(cors({
    origin: ["https://localhost:3000/"],
    credentials: true,
}))

app.use(session({
    secret: process.env.SESSION_SEECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 60 * 24 * 30
    },
    store: mongoDbStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}))

app.use(cookieParser())

app.use("/api", routers);

app.listen(3001, () => console.log("App listening on port http://localhost:3001/"))