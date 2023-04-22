import { Document } from "mongoose";

export interface User extends BaseUser {
    email: string;
    password: string;
}

export interface BaseUser extends Document {
    id: string;
    username: string;
    discriminator: string;
    tag: string;
    avatar: string;
    banner?: string;
}