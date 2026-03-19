import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchApi } from '../api-client'

describe('ApiClient', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: 'success' }),
      headers: {
        get: () => 'application/json',
      },
    } as any)
  })

  it('should include credentials for cookie-based auth', async () => {
    await fetchApi('/test')

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/test',
      expect.objectContaining({
        credentials: 'include',
      })
    )
  })

  it('should add a JSON content type when a request body is provided', async () => {
    await fetchApi('/test', {
      method: 'POST',
      body: JSON.stringify({ ok: true }),
    })

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/test',
      expect.objectContaining({
        headers: expect.any(Headers),
      })
    )

    const [, options] = (global.fetch as any).mock.calls[0]
    expect((options.headers as Headers).get('Content-Type')).toBe('application/json')
  })

  it('should return undefined for 204 responses', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 204,
      headers: {
        get: () => '',
      },
    } as any)

    await expect(fetchApi('/test')).resolves.toBeUndefined()
  })

  it('should throw a descriptive error for failed requests', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
      headers: {
        get: () => 'application/json',
      },
      json: () => Promise.resolve({}),
    } as any)

    await expect(fetchApi('/test')).rejects.toThrow('API request failed: 401 Unauthorized')
  })

  it('should not force JSON parsing for non-JSON responses', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: {
        get: () => 'text/plain',
      },
      text: () => Promise.resolve('ok'),
    } as any)

    await expect(fetchApi('/test')).resolves.toBeUndefined()
  })
})
