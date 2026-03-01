import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import { getUserAndRole } from '@/lib/auth'
import StoreInitializer from '@/components/StoreInitializer'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, role } = await getUserAndRole()
  
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Store Initializer is a client component to dispatch user to Redux on first load */}
      <StoreInitializer user={user} role={role} />
      
      <Sidebar />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
