import { ButtonHTMLAttributes } from 'react';

type ButtonType = 'normal' | 'primary';

const ButtonTypeMap: Record<ButtonType, string> = {
  normal: 'border hover:border-gray-400 hover:text-gray-400',
  primary: 'bg-blue-500 hover:bg-blue-400',
};

export default function Button({
  buttonType = 'normal',
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonType;
}) {
  return (
    <button
      {...props}
      className={`rounded pt-1 pb-1 pl-2 pr-2 ${ButtonTypeMap[buttonType]} ${className}`}
    >
      {children}
    </button>
  );
}
