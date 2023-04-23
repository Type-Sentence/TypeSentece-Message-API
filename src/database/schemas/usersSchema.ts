import mongoose, { Model } from "mongoose";
import { BaseUser, UserWithCredentials } from "../../models/User";
import { IUser, IUserWithCredentials } from "../../interfaces/userInterafaces";

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

export default mongoose.model<UserWithCredentials>("Users", UserSchema)