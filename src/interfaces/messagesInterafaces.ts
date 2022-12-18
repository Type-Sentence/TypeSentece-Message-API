import { User } from "./userInterafaces";

export interface Message {
    grupId?: string;
    id: string;
    content: string;
    author: User;
}