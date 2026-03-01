'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'react-toastify'
import { Eye, EyeOff, Shield } from 'lucide-react'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const { error: signUpError, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    })

    if (signUpError) {
      toast.error(signUpError.message || 'Đăng ký thất bại')
      setLoading(false)
      return
    }

    // Since Confirm Email is disabled, data.user is immediately signed in.
    if (data?.user) {
      try {
        await fetch('/api/auth/register-profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
             id: data.user.id,
             full_name: fullName,
             email: email
          })
        })
      } catch (err) {
        console.error('Failed to auto-create profile', err)
      }
    }

    toast.success('Đăng ký thành công! Đang chuyển hướng...')
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md card">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <img src="/logo.png" alt="Sigma Taekwondo" className="w-20 h-20 object-contain mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Đăng Ký</h1>
          <p className="text-slate-500 text-sm mt-1">Tạo tài khoản Sigma Taekwondo</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Họ và Tên</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input-field"
              placeholder="Nhập họ tên"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Nhập email hợp lệ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pr-10"
                placeholder="Tối thiểu 6 ký tự"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary mt-6"
          >
            {loading ? 'Đang xử lý...' : 'Đăng Ký Khởi Tạo'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          Đã có tài khoản? <Link href="/login" className="text-red-600 font-medium hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  )
}
