'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Heading from '@/app/components/Heading';
import EmailInput from '@/app/components/EmailInput';
import PasswordInput from '@/app/components/PasswordInput';
import RememberMe from '@/app/components/RememberMe';
import Button from '@/app/components/Button';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  // 環境変数から読み込む
  const SIGNIN_EMAIL = "foo.bar@example.com";
  const SIGNIN_PASSWORD = "Password123@";

  // サインイン処理
  const handleSignIn = () => {
    if (email === SIGNIN_EMAIL && password === SIGNIN_PASSWORD) {
      // 認証成功 -> ダッシュボードに遷移
      router.push('/dashboard');
    } else {
      // 認証失敗 -> エラーメッセージを表示
      setErrorMessage('Incorrect email or password.');
    }
  };

  return (
    <div className="flex min-h-screen text-gray-200 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Heading as="h2" className='text-center'>Sign in to your account</Heading>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{' '}
            <Link href="/signup" className="font-medium text-indigo-500 hover:text-indigo-400">
              create a new account
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault(); // ページのリロードを防ぐ
            handleSignIn(); // サインイン処理を呼び出す
          }}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              borderRadius='rounded-t-md'
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              borderRadius='rounded-b-md'
            />
          </div>

          {/* エラーメッセージ表示 */}
          {errorMessage && (
            <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}


          <RememberMe
            isChecked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            forgotPasswordUrl="/forgot-password" // パスワードリセットページへのリンクを指定
          />

          <Button type="submit" fullWidth disabled={!email || !password}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
