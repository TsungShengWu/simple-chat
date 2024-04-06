'use client';

import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { io } from 'socket.io-client';
import { $user } from '@/models/user';
import { allMembers, memberJoin, memberLeave, newMessage } from '@/models/chat';
import { CustomSocket } from '@/socket/types';
import SocketEvent from '@/socket/events';
import MessageList from '@/components/MessageList';
import MessageInput from '@/components/MessageInput';

export default function ChatRoomPage() {
  const [{ token }, onAllMembers, onMemberJoin, onMemberLeave, onNewMessage] =
    useUnit([$user, allMembers, memberJoin, memberLeave, newMessage]);

  useEffect(() => {
    if (token && process.env.NEXT_PUBLIC_API_WS_URL) {
      const newSocket = io(process.env.NEXT_PUBLIC_API_WS_URL, {
        auth: { token },
      }) as CustomSocket;

      newSocket
        .on(SocketEvent.ALL_MEMBERS, onAllMembers)
        .on(SocketEvent.MEMBER_JOIN, onMemberJoin)
        .on(SocketEvent.MEMBER_LEAVE, onMemberLeave)
        .on(SocketEvent.NEW_MESSAGE, onNewMessage);

      return () => newSocket.close();
    }
    return () => {};
  }, [token]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-full h-full flex flex-col">
      <MessageList />
      <MessageInput />
    </div>
  );
}
