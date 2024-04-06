import type { Socket } from 'socket.io-client';
import {
  AllMembersDto,
  MemberJoinDto,
  MemberLeaveDto,
  NewMessageDto,
} from '@/models/chat/types';
import type SocketEvent from './events';

export interface ListenEventMap {
  [SocketEvent.ALL_MEMBERS]: (payload: AllMembersDto) => void;
  [SocketEvent.MEMBER_JOIN]: (payload: MemberJoinDto) => void;
  [SocketEvent.MEMBER_LEAVE]: (payload: MemberLeaveDto) => void;
  [SocketEvent.NEW_MESSAGE]: (payload: NewMessageDto) => void;
}

export interface EmitEventMap {}

export type CustomSocket = Socket<ListenEventMap, EmitEventMap>;
