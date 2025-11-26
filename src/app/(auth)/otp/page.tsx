// app/(auth)/otp/page.tsx
'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

// Validation schema
const otpSchema = z.object({
  otp: z.string()
    .length(6, { message: 'OTP must be 6 digits' })
    .regex(/^\d+$/, { message: 'OTP must contain only numbers' }),
})

type OtpFormInputs = z.infer<typeof otpSchema>

export default function OtpPage() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<OtpFormInputs>({
    resolver: zodResolver(otpSchema)
  })

  // Mock OTP submit handler
  const onSubmit = (data: OtpFormInputs) => {
    console.log('OTP Data:', data)

    // Use cookie to simulate authentication
    if (typeof window !== 'undefined') {
      document.cookie = "auth-token=logged-in; path=/"
    }

    alert('OTP verified! Redirecting to dashboard...')
    router.push('/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">OTP Verification</h2>

        {/* OTP Field */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-green-700">Enter OTP</label>
          <input
            type="text"
            {...register('otp')}
            className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
          />
          {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Verify OTP
        </button>
      </form>
    </div>
  )
}
