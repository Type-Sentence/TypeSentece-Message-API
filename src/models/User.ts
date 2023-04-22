import { IUser } from "../interfaces/userInterafaces";

export class BaseUser implements IUser {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    banner: string

    constructor(data: IUser) {
        this.id = data.id
        this.username = data.username
        this.discriminator = data.discriminator
        this.avatar = data.avatar
        this.banner = data.banner
    }

    get tag() {
        return `${this.username}#${this.discriminator}`
    }
}