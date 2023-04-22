import mongoose, { Model } from "mongoose";
import { IUserWithCredentials } from "../../interfaces/userInterafaces";

const reqStr = {
    type: mongoose.SchemaTypes.String,
    required: true,
}

export const UserSchema = new mongoose.Schema<IUserWithCredentials>({
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
    password: reqStr,
    username: reqStr,
    discriminator: reqStr,
    tag: reqStr,
    avatar: reqStr,
    banner: reqStr,
})

export default mongoose.model<IUserWithCredentials>("Users", UserSchema)