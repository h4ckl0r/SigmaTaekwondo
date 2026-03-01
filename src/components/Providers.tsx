'use client'

import { Provider } from 'react-redux'
import { store } from '@/lib/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer position="top-left" autoClose={3000} />
    </Provider>
  )
}
