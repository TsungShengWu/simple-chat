import { useState } from 'react';
import { useUnit } from 'effector-react';
import { loginFx } from '@/models/user';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function LoginForm() {
  const [error, setError] = useState<string>();
  const login = useUnit(loginFx);

  const action = (form: FormData) => {
    login({
      username: form.get('username')?.toString() ?? '',
      password: form.get('password')?.toString() ?? '',
    }).catch((e) => setError(e?.message));
  };

  return (
    <form
      className="bg-gray-300 dark:bg-gray-800 rounded flex flex-col p-3 gap-4 w-4/5 max-w-80"
      action={action}
    >
      <Input name="username" label="Username" />
      <Input name="password" label="Password" />
      <div className="text-sm text-red-500">{error}</div>
      <Button buttonType="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
