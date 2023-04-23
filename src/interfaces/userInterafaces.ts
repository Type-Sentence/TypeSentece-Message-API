import { Document } from "mongoose";

export interface IUserWithCredentials extends IUser {
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    username: string;
    discriminator: string;
    tag?: string;
    avatar: string;
    banner: string;
}