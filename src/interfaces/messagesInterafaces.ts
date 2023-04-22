import { IUser } from "./userInterafaces";

export interface IMessage {
    grupId?: string;
    id: string;
    content: string;
    author: IUser;
    createdAt: number;
}