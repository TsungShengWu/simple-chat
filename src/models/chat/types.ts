import { User } from "../user/types";

export interface ChatStore {
  users: User[];
  messages: Message[];
}

export interface Message {
  id: number;
  content: string;
  createdAt: string;
  user: User;
}
