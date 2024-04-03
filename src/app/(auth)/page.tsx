'use client'

import MessageList from "@/components/MessageList";

export default function ChatRoomPage () {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-full h-full flex flex-col">
      <MessageList />
    </div>
  );
}
