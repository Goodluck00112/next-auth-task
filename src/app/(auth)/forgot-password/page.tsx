// app/(auth)/forgot-password/page.tsx
'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

// Validation schema
const forgotSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

type ForgotFormInputs = z.infer<typeof forgotSchema>

export default function ForgotPasswordPage() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotFormInputs>({
    resolver: zodResolver(forgotSchema)
  })

  const onSubmit = (data: ForgotFormInputs) => {
    console.log('Forgot Password Data:', data)
    alert(`OTP sent to ${data.email}`)
    router.push('/otp')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Forgot Password</h2>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-green-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Send OTP
        </button>

        <p className="mt-4 text-center text-sm text-green-700">
          Remembered your password? <a href="/login" className="text-green-600 hover:underline">Login here</a>
        </p>
      </form>
    </div>
  )
}
