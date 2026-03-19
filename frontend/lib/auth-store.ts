import { create } from 'zustand'
import { fetchApi } from './api-client'
import { User } from './types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  initialized: boolean
  error: string | null

  login: (credentials: { email: string; password: string }) => Promise<void>
  register: (data: { name: string; email: string; password: string; role: string }) => Promise<void>
  logout: () => Promise<void>
  initialize: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  initialized: false,
  error: null,

  login: async (credentials) => {
    set({ loading: true, error: null })
    try {
      const { user } = await fetchApi<{ user: User }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      })

      set({
        user,
        isAuthenticated: true,
        loading: false,
        initialized: true,
        error: null,
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed'
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
        initialized: true,
        error: message,
      })
      throw error
    }
  },

  register: async (data) => {
    set({ loading: true, error: null })
    try {
      const { user } = await fetchApi<{ user: User }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      set({
        user,
        isAuthenticated: true,
        loading: false,
        initialized: true,
        error: null,
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed'
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
        initialized: true,
        error: message,
      })
      throw error
    }
  },

  logout: async () => {
    try {
      await fetchApi<void>('/auth/logout', {
        method: 'POST',
      })
    } finally {
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
        initialized: true,
        error: null,
      })
    }
  },

  initialize: async () => {
    set({ loading: true })

    try {
      const user = await fetchApi<User>('/auth/me')
      set({
        user,
        isAuthenticated: true,
        loading: false,
        initialized: true,
        error: null,
      })
    } catch {
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
        initialized: true,
        error: null,
      })
    }
  },
}))
