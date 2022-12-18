import mongoose from "mongoose";
import { Message } from "../../interfaces/messagesInterafaces";
import { User } from "../../interfaces/userInterafaces";

const reqString = {
    type: mongoose.SchemaTypes.String,
    required: true,
}

const Author = new mongoose.Schema<User>({
    id: reqString,
    username: reqString,
    discriminator: reqString,
    avatar: reqString,
    banner: reqString
})

const MessageSchema = new mongoose.Schema<Message>({
    grupId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "0000"
    },
    id: reqString,
    content: reqString,
    author: {
        type: Author,
        required: true,
    }
})

export default mongoose.model("SavedMessage", MessageSchema);