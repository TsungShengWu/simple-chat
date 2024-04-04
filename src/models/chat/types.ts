import { User } from '../user/types';

export interface Message {
  id: number;
  content: string;
  createdAt: string;
  user: User;
}

export interface ChatStore {
  users: User[];
  messages: Message[];
}

export interface SendMessagePayload extends Pick<Message, 'content'> {}
