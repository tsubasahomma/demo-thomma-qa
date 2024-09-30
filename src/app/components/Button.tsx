'use client';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean; // Full Width のオプションを追加
  disabled?: boolean;
};

const Button = ({
  children,
  type = 'button',
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false, // デフォルトは false（フル幅でない）
  disabled = false, // デフォルトは false（無効でない）
}: ButtonProps) => {
  // Tailwind CSS のスタイルを variant によって変更
  const baseStyles = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed',
    secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500 disabled:bg-indigo-50 disabled:cursor-not-allowed',
    danger: 'text-white bg-red-600 hover:bg-red-500 focus:ring-red-500 disabled:bg-red-300 disabled:cursor-not-allowed',
  };
  // Tailwind CSS のスタイルを size によって変更
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-sm',
    large: 'py-3 px-6 text-base',
  };
  // fullWidth が true の場合、w-full を適用
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
