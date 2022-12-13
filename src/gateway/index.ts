import { io } from "../index";

io.on("connect", (socket) => {
    console.log(socket.id);
})