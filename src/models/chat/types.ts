import { User } from '../user/types';

export interface Message {
  id: number;
  content: string;
  createdAt: string;
  user: User;
}

export interface ChatStore {
  members: User[];
  messages: Message[];
}

export interface SendMessagePayload extends Pick<Message, 'content'> {}

export interface AllMembersDto extends Pick<ChatStore, 'members'> {}

export interface MemberJoinDto extends User {}

export interface MemberLeaveDto extends Pick<User, 'id'> {}

export interface NewMessageDto extends Pick<Message, 'content' | 'createdAt'> {
  userId: Message['user']['id'];
}
