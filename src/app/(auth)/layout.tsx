'use client';

import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { $user, getProfileFx, logoutFx } from '@/models/user';
import Button from '@/components/Button';
import LoginForm from '@/components/LoginForm';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, getProfile, logout] = useUnit([$user, getProfileFx, logoutFx]);
  const isLoggedIn = !!user?.token;
  const { nickname } = user;

  useEffect(() => {
    if (isLoggedIn) {
      getProfile();
    }
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col h-screen text-gray-700 dark:text-gray-300">
      <div className="bg-gray-300 dark:bg-gray-800 pt-2 pb-2">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center pl-3 pr-3">
          <div className="text-xl font-bold">Simple Chat</div>
          {isLoggedIn && (
            <div className="flex gap-4 items-center">
              {nickname ? <span>Hi, {nickname}</span> : null}
              <Button onClick={logout}>Logout</Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className="max-w-screen-xl mx-auto h-full">
          {isLoggedIn ? (
            children
          ) : (
            <div className="h-full flex justify-center items-center">
              <LoginForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
