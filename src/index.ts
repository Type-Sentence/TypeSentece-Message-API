import express, { Request, Response } from "express";
import { Server } from "socket.io";
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.sendStatus(200);
})

app.listen(3001, () => console.log("App listening on port http://localhost:3001/"))