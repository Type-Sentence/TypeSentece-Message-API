export interface Message {
    grupId?: string;
    id: string;
    content: string;
    author: MessageAuthor;
}

export interface MessageAuthor {
    id: string;
    username: string;
    discriminator: string;
    avatar: string
    banner?: string;
}