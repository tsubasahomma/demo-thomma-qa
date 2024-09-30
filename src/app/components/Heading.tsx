"use client"; // クライアントコンポーネントとして指定

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // タグを指定
  children: React.ReactNode;
  className?: string; // 任意で追加のクラス名を指定可能
};

const Heading = ({ as = 'h1', children, className = '' }: HeadingProps) => {
  const baseStyles = 'font-bold';

  // 各見出しに対応する Tailwind CSS のスタイル
  const sizeStyles = {
    h1: 'text-4xl sm:text-5xl',
    h2: 'text-3xl sm:text-4xl',
    h3: 'text-2xl sm:text-3xl',
    h4: 'text-xl sm:text-2xl',
    h5: 'text-lg sm:text-xl',
    h6: 'text-base sm:text-lg',
  };

  // 適切なタグとスタイルを動的に選択
  const Tag = as;
  const appliedStyles = `${baseStyles} ${sizeStyles[as]} ${className}`;

  return <Tag className={appliedStyles}>{children}</Tag>;
};

export default Heading;
