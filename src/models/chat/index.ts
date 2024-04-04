import { createStore, createEffect } from 'effector';
import { ChatStore, SendMessagePayload } from './types';
import api from '../api';

const initStore: ChatStore = {
  users: [],
  messages: [
    {
      id: 1,
      content: new Array(10).fill('Hello~').join(''),
      createdAt: '2024-01-01 00:00:00',
      user: {
        id: 1,
        username: 'test1',
        nickname: 'Test User 1',
      },
    },
    {
      id: 2,
      content: new Array(10).fill('How are you?').join(' '),
      createdAt: '2024-01-01 00:00:01',
      user: {
        id: 2,
        username: 'test2',
        nickname: 'Test User 2',
      },
    },
  ],
};

export const $chat = createStore<ChatStore>(initStore);

export const sendMessageFx = createEffect((data: SendMessagePayload) =>
  api.post<void>('chat', data),
);
