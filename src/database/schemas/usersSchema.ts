import mongoose from "mongoose";
import { User } from "../../interfaces/userInterafaces";

const reqStr = {
    type: mongoose.SchemaTypes.String,
    required: true,
}

const UserSchema = new mongoose.Schema<User>({
    username: reqStr,
    discriminator: reqStr,
    id: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    avatar: reqStr,
    banner: reqStr,
})

export default mongoose.model("Users", UserSchema)