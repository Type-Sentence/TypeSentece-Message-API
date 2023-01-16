export interface User {
    id: string;
    username: string;
    email: string;
    discriminator: string;
    tag: string;
    avatar: string;
    banner?: string;
}