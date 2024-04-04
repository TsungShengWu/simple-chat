import { useUnit } from 'effector-react';
import { sendMessageFx } from '@/models/chat';
import Input from './Input';
import Button from './Button';

export default function MessageInput() {
  const sendMessage = useUnit(sendMessageFx);

  const action = (form: FormData) => {
    const content = form.get('message')?.toString();
    if (content) {
      sendMessage({ content }).catch((e) => console.log(e?.message));
    }
  };

  return (
    <form className="p-3 bg-gray-300 dark:bg-gray-800" action={action}>
      <div className="flex gap-3 [&>div:first-child]:flex-1">
        <Input
          className=" bg-gray-100 dark:bg-gray-900 border-gray-100 dark:border-gray-900 focus-visible:border-blue-500"
          name="message"
          placeholder="Message"
        />
        <Button type="submit" buttonType="primary">
          Send
        </Button>
      </div>
    </form>
  );
}
