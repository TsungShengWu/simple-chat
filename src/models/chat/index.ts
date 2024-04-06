import { createStore, createEffect, createEvent } from 'effector';
import api from '../api';
import {
  ChatStore,
  SendMessagePayload,
  AllMembersDto,
  MemberJoinDto,
  MemberLeaveDto,
  NewMessageDto,
} from './types';

const unkonwnUser: ChatStore['members'][number] = {
  id: 0,
  username: 'unknown',
  nickname: 'Unknown',
};

const initStore: ChatStore = {
  members: [],
  messages: [],
};

export const $chat = createStore<ChatStore>(initStore);

export const sendMessageFx = createEffect((data: SendMessagePayload) =>
  api.post<void>('chat', data),
);

export const allMembers = createEvent<AllMembersDto>();

export const memberJoin = createEvent<MemberJoinDto>();

export const memberLeave = createEvent<MemberLeaveDto>();

export const newMessage = createEvent<NewMessageDto>();

$chat.on(allMembers, (state, payload) => ({
  ...state,
  ...payload,
}));

$chat.on(memberJoin, (state, payload) => ({
  ...state,
  members: [...state.members, payload],
}));

$chat.on(memberLeave, (state, payload) => ({
  ...state,
  members: state.members.filter((member) => member.id !== payload.id),
}));

$chat.on(newMessage, (state, payload) => ({
  ...state,
  messages: [
    ...state.messages,
    {
      id: state.messages.length + 1,
      content: payload.content,
      createdAt: payload.createdAt,
      user:
        state.members.find(({ id }) => id === payload.userId) ?? unkonwnUser,
    },
  ],
}));
