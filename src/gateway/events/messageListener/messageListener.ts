import { GatewayEvent } from "../../../interfaces/gateway/eventInterface";
const event: GatewayEvent = {
    name: "new_message",
    listener(content: string) {
        console.log(content);


    }
};

export = event;