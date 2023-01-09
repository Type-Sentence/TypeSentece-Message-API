import mongoose from "mongoose";
import { User } from "../../interfaces/userInterafaces";

const reqStr = {
    type: mongoose.SchemaTypes.String,
    required: true,
}

export const UserSchema = new mongoose.Schema<User>({
    id: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    username: reqStr,
    discriminator: reqStr,
    avatar: reqStr,
    banner: reqStr,
})

export default mongoose.model("Users", UserSchema)