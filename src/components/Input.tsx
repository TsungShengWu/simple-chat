import { InputHTMLAttributes } from 'react';

export default function Input({
  label,
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
}) {
  return (
    <div>
      {label ? <div>{label}</div> : null}
      <input
        {...props}
        className={`rounded bg-transparent border dark:border-gray-300 border-gray-700 flex-1 p-1 outline-none focus-visible:border-blue-500 placeholder:text-gray-500 w-full ${className}`}
      />
    </div>
  );
}
