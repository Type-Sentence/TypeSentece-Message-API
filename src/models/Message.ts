import { BaseUser } from "./User";

export class Message {
    readonly grupId: string;
    public id: string;
    public content: string;
    public author: BaseUser

    constructor(grupId: string, id: string, content: string, user: BaseUser) {
        this.grupId = grupId;
        this.id = id
        this.content = content
        this.author = user
    }
}