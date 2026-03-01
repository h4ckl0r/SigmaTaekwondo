'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, UserSquare2, Trophy, Shield, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { logout } from '@/lib/store'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Quản lý Đơn vị', href: '/units', icon: Shield },
  { name: 'Vận động viên', href: '/athletes', icon: Users },
  { name: 'Nội dung thi đấu', href: '/categories', icon: Trophy },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    dispatch(logout())
    router.push('/login')
  }

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-slate-200 flex flex-col">
      <div className="flex flex-col items-center justify-center p-6 border-b border-slate-200">
        <Link href="/dashboard" className="flex flex-col items-center gap-2">
          <img src="/logo.png" alt="Sigma Taekwondo" className="w-20 h-20 object-contain" />
          <span className="text-lg font-bold text-slate-800">Sigma Taekwondo</span>
        </Link>
      </div>
      
      <div className="overflow-y-auto overflow-x-hidden flex-grow py-4">
        <ul className="space-y-2 font-medium px-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname.startsWith(item.href)
            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg transition-colors group ${
                    isActive ? 'bg-red-50 text-red-600' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-red-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="p-4 border-t border-slate-200">
        <button 
          onClick={handleLogout}
          className="flex items-center w-full p-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-red-600 transition-colors group"
        >
          <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-600" />
          <span className="ml-3">Đăng xuất</span>
        </button>
      </div>
    </aside>
  )
}
