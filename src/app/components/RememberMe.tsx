"use client"; // クライアントコンポーネントとして指定

import Link from "next/link";

type RememberMeProps = {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  forgotPasswordUrl?: string; // パスワードを忘れた場合のリンクURL
};

const RememberMe = ({
  isChecked,
  onChange,
  forgotPasswordUrl = "#", // デフォルト値として "#" を指定
}: RememberMeProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember_me"
          name="remember_me"
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 bg-gray-800 rounded"
        />
        <label
          htmlFor="remember_me"
          className="ml-2 block text-sm text-gray-300"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <Link href={forgotPasswordUrl} className="font-medium text-indigo-500 hover:text-indigo-400">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default RememberMe;
