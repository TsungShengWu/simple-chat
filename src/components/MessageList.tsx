import { useUnit } from 'effector-react';
import { $chat } from '@/models/chat';

export default function MessageList() {
  const { messages } = useUnit($chat);

  return (
    <div className="flex-1 relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll">
        <ul className="flex flex-col justify-end min-h-full">
          {messages.map((msg, index) => (
            <li key={`${index}${msg.id}`} className="flex p-3">
              <div className="rounded-full bg-gray-500 w-10 min-w-10 h-10 flex justify-center items-center mt-1 mr-2">
                {msg.user.nickname[0]}
              </div>
              <div className="flex-1 [overflow-wrap:anywhere]">
                <div>
                  <span className="font-bold mr-2">{msg.user.nickname}</span>
                  <span className="text-sm text-gray-500">{msg.createdAt}</span>
                </div>
                {msg.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
