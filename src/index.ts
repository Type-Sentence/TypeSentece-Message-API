//Express
import express, { NextFunction, Request, Response } from "express";
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
import "./database";
import passport from "passport";
import "./strategies/local";


config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}))

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}))

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        credentials: true,
    }
})

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("new_message", (content: string) => {
        console.log(content);
    })
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

// app.use((req: Request, res: Response, next: NextFunction) => {
//     console.log(`${req.method}: ${req.url}`)
//     next()
// })

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routers);

server.listen(3001, () => console.log("App listening on port http://localhost:3001/"))