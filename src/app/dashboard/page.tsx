// app/(auth)/dashboard/page.tsx
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if auth-token exists
    const cookies = document.cookie.split(';').map(c => c.trim())
    const authToken = cookies.find(c => c.startsWith('auth-token='))

    if (!authToken) {
      alert('You must be logged in to access the dashboard!')
      router.push('/login')
    }
  }, [router])

  const handleLogout = () => {
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    router.push('/login')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Dashboard</h1>
      <p className="text-green-800 mb-4">Welcome! You are logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Logout
      </button>
    </div>
  )
}
