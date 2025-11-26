'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const otpSchema = z.object({
  otp: z.string().length(6, { message: 'OTP must be 6 digits' }),
})

type OTPFormInputs = z.infer<typeof otpSchema>

export default function VerifyOTPPage() {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<OTPFormInputs>({
    resolver: zodResolver(otpSchema),
  })

  const onSubmit = (data: OTPFormInputs) => {
    console.log('OTP Entered:', data)
    setSubmitted(true)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Verify OTP</h2>

        {submitted ? (
          <p className="text-green-600 text-center">
            OTP verified successfully! You can now <a href="/dashboard" className="underline text-green-600">login</a>.
          </p>
        ) : (
          <>
            <div className="mb-6">
              <label className="block mb-1 font-semibold text-green-700">Enter OTP</label>
              <input
                type="text"
                {...register('otp')}
                className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
            >
              Verify OTP
            </button>
          </>
        )}
      </form>
    </div>
  )
}
