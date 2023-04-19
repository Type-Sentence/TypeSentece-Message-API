import fs from "fs"
import path from "path"
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { GatewayEvent } from "../interfaces/gateway/eventInterface";

const initListeners = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>) => {
    io.on("connection", (socket) => {
        const eventFolder = fs.readdirSync(path.join(__dirname, "events"));

        for (const folder of eventFolder) {
            const eventsFiles = fs.readdirSync(path.join(__dirname, "events", folder));

            for (const file of eventsFiles) {
                if (file.endsWith(".ts") || file.endsWith(".js")) {
                    const event: GatewayEvent = require(path.join(__dirname, "events", folder, file));

                    socket.on(event.name, (...args) => event.listener(...args))
                }
            }
        }
    })
}

export default initListeners;