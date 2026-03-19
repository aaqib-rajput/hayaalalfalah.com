"use client"

import { create } from 'zustand'
import { fetchApi } from './api-client'
import type { Announcement } from './types'

interface CommunityState {
  announcements: Announcement[]
  loading: boolean
  error: string | null
  loaded: boolean
  loadAnnouncements: (force?: boolean) => Promise<Announcement[]>
  loadAnnouncementsByMosque: (mosqueId: string) => Promise<Announcement[]>
  addAnnouncement: (announcement: Omit<Announcement, 'id' | 'createdAt' | 'isActive'>) => Promise<Announcement>
  updateAnnouncement: (id: string, updates: Partial<Announcement>) => Promise<Announcement>
  deleteAnnouncement: (id: string) => Promise<void>
}

function toErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Unknown error'
}

export const useCommunityStore = create<CommunityState>((set, get) => ({
  announcements: [],
  loading: false,
  error: null,
  loaded: false,

  async loadAnnouncements(force = false) {
    if (!force && get().loaded) {
      return get().announcements
    }

    set({ loading: true, error: null })

    try {
      const announcements = await fetchApi<Announcement[]>('/community/announcements')
      set({ announcements, loaded: true, loading: false })
      return announcements
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async loadAnnouncementsByMosque(mosqueId) {
    set({ loading: true, error: null })

    try {
      const announcements = await fetchApi<Announcement[]>(`/mosques/${mosqueId}/announcements`)
      set({ announcements, loaded: false, loading: false })
      return announcements
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async addAnnouncement(announcement) {
    const response = await fetchApi<Announcement>('/community/announcements', {
      method: 'POST',
      body: JSON.stringify(announcement),
    })

    const created = {
      ...response,
      isPinned: announcement.isPinned,
      isActive: true,
    }

    set((state) => ({
      announcements: [created, ...state.announcements],
    }))

    return created
  },

  async updateAnnouncement(id, updates) {
    const response = await fetchApi<Announcement>(`/community/announcements/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })

    const updated = {
      ...response,
      ...updates,
      isPinned: updates.isPinned ?? response.isPinned,
    }

    set((state) => ({
      announcements: state.announcements.map((item) => (item.id === id ? updated : item)),
    }))

    return updated
  },

  async deleteAnnouncement(id) {
    await fetchApi<void>(`/community/announcements/${id}`, {
      method: 'DELETE',
    })

    set((state) => ({
      announcements: state.announcements.filter((item) => item.id !== id),
    }))
  },
}))
