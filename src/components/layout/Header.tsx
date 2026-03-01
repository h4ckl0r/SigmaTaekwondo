'use client'

import { Bell, Menu, Search, UserCircle } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

export default function Header() {
  const { user, role } = useSelector((state: RootState) => state.auth)

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-500 hover:text-slate-700">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-1.5 focus-within:ring-2 focus-within:ring-red-500 focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className="bg-transparent border-none outline-none text-sm w-48 text-slate-700"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-slate-500 hover:text-slate-700">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-1"></div>
        
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle className="w-8 h-8 text-slate-400" />
          <div className="hidden md:block text-sm">
            <p className="font-medium text-slate-700 leading-none">{user?.user_metadata?.full_name || 'Admin User'}</p>
            <p className="text-xs text-slate-500 mt-1">{role || 'ADMIN'}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
