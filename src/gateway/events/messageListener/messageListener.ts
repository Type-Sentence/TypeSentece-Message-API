import Users from "../../../database/schemas/usersSchema";
import SavedMessages from "../../../database/schemas/messageSchema"
import { GatewayEvent } from "../../../interfaces/gateway/eventInterface";
import { GatewayMessageRequest } from "../../../interfaces/gateway/gatewayMessageRequest";
import { IUser, IUserWithCredentials } from "../../../interfaces/userInterafaces";
import { Message } from "../../../models/Message";
import { BaseUser } from "../../../models/User";
import { generateSnowFlakes } from "../../../helpers/generateSnowFlakes";
import { IMessage } from "../../../interfaces/messagesInterafaces";

const event: GatewayEvent = {
    name: "new_message",
    async listener(request: GatewayMessageRequest) {
        console.log(`Message: ${request.content} from ${request.authorId}`)

        try {
            const userDb = await Users.findOne<IUserWithCredentials>({ id: request.authorId })

            if (!userDb) {
                return
            }

            const messageAuthorData: IUser = {
                avatar: userDb.avatar,
                banner: userDb.banner,
                discriminator: userDb.discriminator,
                id: userDb.id,
                username: userDb.username
            }
            const messageAuthor = new BaseUser(messageAuthorData)
            const message = new Message("0000", generateSnowFlakes().toString(), request.content, messageAuthor)

            const messageWithSameId = await SavedMessages.findOne<Message>({ id: message.id })
            if (messageWithSameId) {
                throw new Error("Multipe mesasge with same ID")
            }

            const savedMessage = await SavedMessages.create<Message>({ ...message })

            console.log("🚀 ~ file: messageListener.ts:31 ~ listener ~ savedMessage:", savedMessage)
        } catch (err) {
            console.log(err);
        }

    }
};

export = event;