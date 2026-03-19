"use client"

import { useEffect } from 'react'
import { useAuthStore } from '@/lib/auth-store'

export function StoreInitializer() {
  const initAuth = useAuthStore((state) => state.initialize)

  useEffect(() => {
    void initAuth()
  }, [initAuth])

  return null
}
