'use client'

import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '@/lib/store'

export default function StoreInitializer({ user, role }: { user: any, role: string | null }) {
  const isInitialized = useRef(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isInitialized.current) {
      if (user) {
         dispatch(setUser({ user, role: role as string }))
      }
      isInitialized.current = true
    }
  }, [dispatch, user, role])

  return null
}
