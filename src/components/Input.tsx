import { InputHTMLAttributes } from 'react';

export default function Input({
  label,
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <div>{label}</div>
      <input
        {...props}
        className={`rounded bg-transparent border dark:border-gray-300 border-gray-700 flex-1 p-1 outline-blue-300 w-full ${className}`}
      />
    </div>
  );
};
