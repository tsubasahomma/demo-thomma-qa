'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Heading from '@/app/components/Heading';
import EmailInput from '@/app/components/EmailInput';
import PasswordInput from '@/app/components/PasswordInput';
import Button from '@/app/components/Button';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  // メールアドレスの形式確認
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // パスワードの形式確認
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  // サインアップ処理
  const handleSignUp = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // サインアップ成功 -> ダッシュボードに遷移
    router.push('/onboarding');
  };

  return (
    <div className="flex min-h-screen text-gray-200 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Heading as="h2" className='text-center'>Create a new account</Heading>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{' '}
            <Link href="/signin" className="font-medium text-indigo-500 hover:text-indigo-400">
              sign in to your account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}>
          <div className="rounded-md shadow-sm -space-y-px">
            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" borderRadius='rounded-t-md' />
            <PasswordInput id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <PasswordInput id="password-confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" borderRadius='rounded-b-md' />
          </div>
          {errorMessage && (
            <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}
          <Button type="submit" fullWidth disabled={!email || !password || !confirmPassword}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
