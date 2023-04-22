import { BaseUser } from "./userInterafaces";

export interface Message {
    grupId?: string;
    id: string;
    content: string;
    author: BaseUser;
    createdAt: number;
}