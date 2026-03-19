"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/auth-store'
import { UserRole } from '@/lib/types'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const router = useRouter()
  const { isAuthenticated, user, loading, initialized } = useAuthStore()

  useEffect(() => {
    if (initialized && !loading) {
      if (!isAuthenticated) {
        router.push('/login')
      } else if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        router.push('/')
      }
    }
  }, [isAuthenticated, user, loading, initialized, allowedRoles, router])

  if (loading || !initialized) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!isAuthenticated) return null
  if (allowedRoles && user && !allowedRoles.includes(user.role)) return null

  return <>{children}</>
}
