'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'react-toastify'
import { Eye, EyeOff, Shield } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      toast.error(error.message || 'Đăng nhập thất bại')
      setLoading(false)
      return
    }

    toast.success('Đăng nhập thành công')
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md card">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <img src="/logo.png" alt="Sigma Taekwondo" className="w-20 h-20 object-contain mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Đăng Nhập</h1>
          <p className="text-slate-500 text-sm mt-1">Chào mừng bạn quay trở lại</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email / Tên đăng nhập</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Nhập email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pr-10"
                placeholder="Nhập mật khẩu"
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-slate-600 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-gray-300 text-red-600 focus:ring-red-500" />
              Ghi nhớ đăng nhập
            </label>
            <Link href="#" className="text-red-600 hover:underline">Quên mật khẩu?</Link>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary mt-6"
          >
            {loading ? 'Đang xử lý...' : 'Đăng Nhập'}
          </button>
        </form>

        {/* <p className="text-center text-sm text-slate-600 mt-6">
          Chưa có tài khoản? <Link href="/register" className="text-red-600 font-medium hover:underline">Đăng ký ngay</Link>
        </p> */}
      </div>
    </div>
  )
}
