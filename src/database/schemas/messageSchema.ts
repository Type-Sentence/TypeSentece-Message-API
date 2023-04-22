import mongoose, { Schema } from "mongoose";
import { IMessage } from "../../interfaces/messagesInterafaces";
import { IUserWithCredentials } from "../../interfaces/userInterafaces";
import { UserSchema } from "./usersSchema";
import { Message } from "../../models/Message";

const reqString = {
    type: mongoose.SchemaTypes.String,
    required: true,
}

const MessageSchema: Schema = new mongoose.Schema<Message>({
    grupId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "0000"
    },
    id: reqString,
    content: reqString,
    author: {
        type: UserSchema,
        required: true,
    }
})

export default mongoose.model("SavedMessage", MessageSchema);