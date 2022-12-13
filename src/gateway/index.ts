// import { io } from "../index";
import SavedMessage from "../database/schemas/messageSchema";

SavedMessage.findOne({ id: 1 })

// io.on("connection", (socket) => {
//     console.log(socket.id);

//     socket.on("new_message", (content: string) => {
//         console.log(content);
//     })
// })