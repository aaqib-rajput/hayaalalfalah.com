import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useAuthStore } from '../auth-store'

vi.mock('../api-client', () => ({
  fetchApi: vi.fn(),
}))

import { fetchApi } from '../api-client'

describe('AuthStore', () => {
  beforeEach(() => {
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      loading: true,
      initialized: false,
      error: null,
    })
    vi.clearAllMocks()
  })

  it('should initialize with default values', () => {
    const state = useAuthStore.getState()
    expect(state.user).toBeNull()
    expect(state.isAuthenticated).toBe(false)
    expect(state.loading).toBe(true)
    expect(state.initialized).toBe(false)
  })

  it('should login successfully', async () => {
    const mockUser = { id: '1', email: 'test@test.com', name: 'Test', role: 'MEMBER' }

    ;(fetchApi as any).mockResolvedValue({ user: mockUser })

    await useAuthStore.getState().login({ email: 'test@test.com', password: 'password' })

    const state = useAuthStore.getState()
    expect(state.user).toEqual(mockUser)
    expect(state.isAuthenticated).toBe(true)
    expect(state.initialized).toBe(true)
    expect(state.loading).toBe(false)
  })

  it('should initialize as unauthenticated when /auth/me fails', async () => {
    ;(fetchApi as any).mockRejectedValue(new Error('Unauthorized'))

    await useAuthStore.getState().initialize()

    const state = useAuthStore.getState()
    expect(state.user).toBeNull()
    expect(state.isAuthenticated).toBe(false)
    expect(state.initialized).toBe(true)
    expect(state.loading).toBe(false)
  })

  it('should logout correctly', async () => {
    ;(fetchApi as any).mockResolvedValue(undefined)
    useAuthStore.setState({
      user: { id: '1', email: 'test@test.com', name: 'Test', role: 'MEMBER', createdAt: '' },
      isAuthenticated: true,
      loading: false,
      initialized: true,
      error: null,
    })

    await useAuthStore.getState().logout()

    const state = useAuthStore.getState()
    expect(state.user).toBeNull()
    expect(state.isAuthenticated).toBe(false)
    expect(state.initialized).toBe(true)
  })
})
