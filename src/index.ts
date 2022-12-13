//Express
import express, { Request, Response } from "express";
import routers from "./routers";

//Cookie and sessions
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoDbStore from "connect-mongo";

//Other
import { config } from "dotenv"
import cors from "cors";

//Socket.io
import http from "http";
import { Server } from "socket.io";

require("./database");
config();

const app = express();
const server = http.createServer(app);

app.use(express.json);
app.use(express.urlencoded({
    extended: false,
}))

app.use(cors({
    origin: ["http://localhost:3000/"],
    credentials: true,
}))

export const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"]
    }
})

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