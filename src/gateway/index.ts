import fs from "fs"
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const initListeners = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>) => {
    io.on("connection", (socket) => {
        const eventFolder = fs.readdirSync("./events");

        for (const folder of eventFolder) {
            const eventsFiles = fs.readdirSync(`./events/${folder}`);

            for (const file of eventsFiles) {
                if (file.endsWith(".ts") || file.endsWith(".js")) {
                    const event = require(`./events/${folder}/${file}`);


                }
            }
        }
    })
}

export default initListeners;