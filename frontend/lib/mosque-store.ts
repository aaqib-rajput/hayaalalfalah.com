"use client"

import { create } from 'zustand'
import { fetchApi } from './api-client'
import type { Imam, ManagementMember, Mosque } from './types'

interface MosqueState {
  mosques: Mosque[]
  imams: Imam[]
  managementMembers: ManagementMember[]
  loading: boolean
  error: string | null
  mosquesLoaded: boolean
  imamsLoaded: boolean
  managementLoaded: boolean
  loadMosques: (force?: boolean) => Promise<Mosque[]>
  loadImams: (mosqueId?: string, force?: boolean) => Promise<Imam[]>
  loadManagementMembers: (mosqueId?: string, force?: boolean) => Promise<ManagementMember[]>
  addMosque: (mosque: Omit<Mosque, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Mosque>
  updateMosque: (id: string, mosque: Partial<Mosque>) => Promise<Mosque>
  deleteMosque: (id: string) => Promise<void>
  addImam: (imam: Omit<Imam, 'id' | 'createdAt'>) => Promise<Imam>
  updateImam: (id: string, imam: Partial<Imam>) => Promise<Imam>
  deleteImam: (id: string) => Promise<void>
}

function upsertById<T extends { id: string }>(current: T[], incoming: T[]) {
  const items = new Map(current.map((item) => [item.id, item]))

  for (const item of incoming) {
    items.set(item.id, item)
  }

  return Array.from(items.values())
}

function toErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Unknown error'
}

export const useMosqueStore = create<MosqueState>((set, get) => ({
  mosques: [],
  imams: [],
  managementMembers: [],
  loading: false,
  error: null,
  mosquesLoaded: false,
  imamsLoaded: false,
  managementLoaded: false,

  async loadMosques(force = false) {
    if (!force && get().mosquesLoaded) {
      return get().mosques
    }

    set({ loading: true, error: null })

    try {
      const mosques = await fetchApi<Mosque[]>('/mosques')
      set({ mosques, mosquesLoaded: true, loading: false })
      return mosques
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async loadImams(mosqueId, force = false) {
    if (!mosqueId && !force && get().imamsLoaded) {
      return get().imams
    }

    set({ loading: true, error: null })

    try {
      const endpoint = mosqueId ? `/mosques/${mosqueId}/imams` : '/mosques/imams'
      const imams = await fetchApi<Imam[]>(endpoint)
      set((state) => ({
        imams: mosqueId ? upsertById(state.imams, imams) : imams,
        imamsLoaded: !mosqueId,
        loading: false,
      }))
      return imams
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async loadManagementMembers(mosqueId, force = false) {
    if (!mosqueId && !force && get().managementLoaded) {
      return get().managementMembers
    }

    set({ loading: true, error: null })

    try {
      const endpoint = mosqueId ? `/mosques/${mosqueId}/management` : '/mosques/management'
      const managementMembers = await fetchApi<ManagementMember[]>(endpoint)
      set((state) => ({
        managementMembers: mosqueId
          ? upsertById(state.managementMembers, managementMembers)
          : managementMembers,
        managementLoaded: !mosqueId,
        loading: false,
      }))
      return managementMembers
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async addMosque(mosque) {
    const created = await fetchApi<Mosque>('/mosques', {
      method: 'POST',
      body: JSON.stringify(mosque),
    })

    set((state) => ({
      mosques: [created, ...state.mosques],
    }))

    return created
  },

  async updateMosque(id, mosque) {
    const updated = await fetchApi<Mosque>(`/mosques/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mosque),
    })

    set((state) => ({
      mosques: state.mosques.map((item) => (item.id === id ? updated : item)),
    }))

    return updated
  },

  async deleteMosque(id) {
    await fetchApi<void>(`/mosques/${id}`, {
      method: 'DELETE',
    })

    set((state) => ({
      mosques: state.mosques.filter((item) => item.id !== id),
      imams: state.imams.filter((item) => item.mosqueId !== id),
      managementMembers: state.managementMembers.filter((item) => item.mosqueId !== id),
    }))
  },

  async addImam(imam) {
    const created = await fetchApi<Imam>('/imams', {
      method: 'POST',
      body: JSON.stringify(imam),
    })

    set((state) => ({
      imams: [created, ...state.imams],
    }))

    return created
  },

  async updateImam(id, imam) {
    const updated = await fetchApi<Imam>(`/imams/${id}`, {
      method: 'PUT',
      body: JSON.stringify(imam),
    })

    set((state) => ({
      imams: state.imams.map((item) => (item.id === id ? updated : item)),
    }))

    return updated
  },

  async deleteImam(id) {
    await fetchApi<void>(`/imams/${id}`, {
      method: 'DELETE',
    })

    set((state) => ({
      imams: state.imams.filter((item) => item.id !== id),
    }))
  },
}))
