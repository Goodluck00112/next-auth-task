// app/(auth)/login/page.tsx
'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

// 1️ Validation schema
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

type LoginFormInputs = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false) // state for side effect

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login Data:', data)
    setIsLoggedIn(true) // trigger useEffect
  }

  // 2️⃣ useEffect handles cookie & redirect
  React.useEffect(() => {
    if (isLoggedIn) {
      document.cookie = "auth-token=logged-in; path=/"
      alert('Login successful! Redirecting to dashboard...')
      router.push('/dashboard')
    }
  }, [isLoggedIn, router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-green-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        {/* Password Field */}
    <div className="mb-6">
        <label className="block mb-1 font-semibold text-green-700">Password</label>
        <input
        type="password"
        {...register('password')}
        className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    </div>


        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-green-700">
          Forgot your password? <a href="/forgot-password" className="text-green-600 hover:underline">Reset here</a>
        </p>
      </form>
    </div>
  )
}
