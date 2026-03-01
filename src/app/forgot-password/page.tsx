'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'react-toastify'
import { Eye, EyeOff, KeyRound, Mail, ShieldCheck } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const router = useRouter()
  const supabase = createClient()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return toast.error('Vui lòng nhập email')
    
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    setLoading(false)

    if (error) {
      toast.error(error.message || 'Lỗi gửi mã OTP')
      return
    }

    toast.success('Mã OTP đã được gửi đến email của bạn')
    setStep(2)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp) return toast.error('Vui lòng nhập mã OTP')

    setLoading(true)
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'recovery'
    })
    setLoading(false)

    if (error) {
      toast.error('Mã OTP không hợp lệ hoặc đã hết hạn')
      return
    }

    toast.success('Xác thực thành công. Vui lòng đặt mật khẩu mới.')
    setStep(3)
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return toast.error('Mật khẩu nhập lại không khớp')
    }
    if (password.length < 6) {
      return toast.error('Mật khẩu tối thiểu 6 ký tự')
    }

    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (error) {
      toast.error(error.message || 'Tạo mật khẩu thất bại')
      return
    }

    toast.success('Đổi mật khẩu thành công! Vui lòng đăng nhập lại.')
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md card">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <img src="/logo.png" alt="Sigma Taekwondo" className="w-20 h-20 object-contain mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Quên Mật Khẩu</h1>
          <p className="text-slate-500 text-sm mt-1 text-center">
            {step === 1 && 'Nhập email để nhận mã xác thực OTP'}
            {step === 2 && 'Nhập mã 6 số OTP từ hòm thư của bạn'}
            {step === 3 && 'Thiết lập mật khẩu bảo mật mới'}
          </p>
        </div>

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email của bạn</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="name@email.com"
                />
              </div>
            </div>
            
            <button type="submit" disabled={loading} className="w-full btn-primary mt-6">
              {loading ? 'Đang gửi...' : 'Gửi Mã Xác Thực'}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mã OTP (6 Số)</label>
              <div className="relative">
                <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="input-field pl-10 text-center tracking-[0.5em] font-bold text-lg"
                  placeholder="••••••"
                />
              </div>
            </div>
            
            <button type="submit" disabled={loading} className="w-full btn-primary bg-blue-600 hover:bg-blue-700 mt-6">
              {loading ? 'Đang xác thực...' : 'Xác Thực Mã OTP'}
            </button>
            <p className="text-center text-sm text-slate-500 mt-4 cursor-pointer hover:text-red-500" onClick={() => setStep(1)}>
              Nhập lại Email
            </p>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu mới</label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10 pr-10"
                  placeholder="Mật khẩu mới (Tối thiểu 6 ký tự)"
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

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Xác nhận mật khẩu</label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
            </div>
            
            <button type="submit" disabled={loading} className="w-full btn-primary bg-green-600 hover:bg-green-700 mt-6">
              {loading ? 'Đang cập nhật...' : 'Đổi Mật Khẩu'}
            </button>
          </form>
        )}

        <p className="text-center text-sm text-slate-600 mt-8 pt-6 border-t border-slate-100">
          <Link href="/login" className="text-slate-500 font-medium hover:text-slate-800 transition-colors flex items-center justify-center">
             &larr; Quay lại Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  )
}
