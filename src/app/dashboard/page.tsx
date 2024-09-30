'use client';

import Heading from '@/app/components/Heading';
import Link from 'next/link';
import Button from '@/app/components/Button';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      {/* サイドバー */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="text-xl font-bold text-white">Admin Dashboard</div>
        <nav className="mt-10 space-y-4">
          <Link href="/dashboard/overview" className="block text-gray-400 hover:text-white">
            Overview
          </Link>
          <Link href="/dashboard/users" className="block text-gray-400 hover:text-white">
            Manage Users
          </Link>
          <Link href="/dashboard/settings" className="block text-gray-400 hover:text-white">
            Settings
          </Link>
        </nav>
        <div className="mt-10">
          <Button type="button" fullWidth>
            <Link href="/logout">Logout</Link>
          </Button>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 p-6">
        <div className="mb-6">
          <Heading as="h2">Dashboard Overview</Heading>
        </div>

        {/* カードのコンテナ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ダッシュボードカード */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-gray-400 mt-1">+24 in the last week</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold">87</p>
            <p className="text-gray-400 mt-1">+5 in the last hour</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Server Load</h3>
            <p className="text-3xl font-bold">72%</p>
            <p className="text-gray-400 mt-1">Normal</p>
          </div>
        </div>

        {/* その他のコンテンツ */}
        <div className="mt-8">
          <Heading as="h3" className="mb-4">Recent Activity</Heading>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <ul className="divide-y divide-gray-700">
              <li className="py-2 flex justify-between">
                <span>User JohnDoe123 signed in</span>
                <span className="text-sm text-gray-400">5 minutes ago</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Server CPU usage increased</span>
                <span className="text-sm text-gray-400">10 minutes ago</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>User JaneDoe signed out</span>
                <span className="text-sm text-gray-400">30 minutes ago</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
