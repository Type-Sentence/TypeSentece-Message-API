export interface User {
    id: string;
    username: string;
    email: string;
    discriminator: string;
    avatar: string;
    banner?: string;
}