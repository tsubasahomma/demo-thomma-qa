'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Heading from '@/app/components/Heading';
import EmailInput from '@/app/components/EmailInput';
import Button from '@/app/components/Button';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null);

  // サインイン処理
  const handleSignIn = () => {
    if (!email) {
      setMessage({ text: 'Please enter your email.', type: 'error' });
    } else if (email === 'foo.bar@example.com') {
      setMessage({ text: 'Password reset email sent successfully!', type: 'success' });
      // 実際の処理がある場合、ここに追加
    } else {
      setMessage({ text: 'That email address does not exist.', type: 'error' });
    }
  };

  return (
    <div className="flex min-h-screen text-gray-200 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Heading as="h2" className="text-center">
            Reset your password
          </Heading>
          <p className="mt-2 text-center text-sm text-gray-400">
            Enter your email to receive a password reset link.
          </p>

          {/* メッセージ表示 */}
          {message && (
            <div
              className={`mt-4 p-4 ${message.type === 'error'
                ? 'bg-red-100 border-l-4 border-red-500 text-red-700'
                : 'bg-green-100 border-l-4 border-green-500 text-green-700'
                } rounded`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          )}
        </div>

        {/* 成功時は非表示にする */}
        {message?.type !== 'success' && (
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault(); // ページのリロードを防ぐ
              handleSignIn(); // サインイン処理を呼び出す
            }}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <EmailInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                borderRadius="rounded-b-md rounded-t-md"
              />
            </div>

            <Button type="submit" fullWidth disabled={!email}>
              Send password reset email
            </Button>
          </form>
        )}


        {/* 成功時は非表示にする */}
        {message?.type !== 'success' && (
          <p className="mt-2 text-left text-sm text-gray-400">
            Remember your password?{' '}
            <Link href="/signin" className="font-medium text-indigo-500 hover:text-indigo-400">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
