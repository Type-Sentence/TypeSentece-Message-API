import mongoose, { Schema } from "mongoose";
import { IUser } from "../../interfaces/userInterafaces";
import { Message } from "../../models/Message";

const reqString = {
    type: mongoose.SchemaTypes.String,
    required: true,
}

export const MessageUserSchema = new mongoose.Schema<IUser>({
    id: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    username: reqString,
    discriminator: reqString,
    tag: reqString,
    avatar: reqString,
    banner: reqString,
})

const MessageSchema: Schema = new mongoose.Schema<Message>({
    grupId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "0000"
    },
    id: reqString,
    content: reqString,
    author: {
        type: MessageUserSchema,
        required: true,
    },

})

export default mongoose.model("SavedMessage", MessageSchema);