import { IUser, IUserWithCredentials } from "../interfaces/userInterafaces";

export class BaseUser implements IUser {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    banner: string;
    tag: string;

    constructor(data: IUser) {
        this.id = data.id
        this.username = data.username
        this.discriminator = data.discriminator
        this.avatar = data.avatar
        this.banner = data.banner
        this.tag = `${this.username}${this.discriminator}` // Discriminator has arlady the hasthag (#)
    }
}

export class UserWithCredentials extends BaseUser implements IUserWithCredentials {
    password: string;
    email: string;

    constructor(data: IUserWithCredentials) {
        super(
            {
                id: data.id,
                username: data.id,
                avatar: data.avatar,
                banner: data.banner,
                discriminator: data.discriminator,
                tag: `${data.username}${data.discriminator}`
            }
        );
        this.password = data.password;
        this.email = data.email;
    }
}