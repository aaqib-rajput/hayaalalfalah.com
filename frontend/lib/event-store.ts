"use client"

import { create } from 'zustand'
import { fetchApi } from './api-client'
import type { Event, PrayerTime } from './types'

interface EventState {
  events: Event[]
  prayerTimes: PrayerTime | null
  loading: boolean
  error: string | null
  eventsLoaded: boolean
  prayerTimesKey: string | null
  loadEvents: (force?: boolean) => Promise<Event[]>
  loadEventsByMosque: (mosqueId: string) => Promise<Event[]>
  loadPrayerTimes: (mosqueId: string, date: string, force?: boolean) => Promise<PrayerTime | null>
  clearPrayerTimes: () => void
  addEvent: (event: Omit<Event, 'id' | 'createdAt' | 'attendeeCount'>) => Promise<Event>
  updateEvent: (id: string, event: Partial<Event>) => Promise<Event>
  deleteEvent: (id: string) => Promise<void>
}

function toErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Unknown error'
}

export const useEventStore = create<EventState>((set, get) => ({
  events: [],
  prayerTimes: null,
  loading: false,
  error: null,
  eventsLoaded: false,
  prayerTimesKey: null,

  async loadEvents(force = false) {
    if (!force && get().eventsLoaded) {
      return get().events
    }

    set({ loading: true, error: null })

    try {
      const events = await fetchApi<Event[]>('/events')
      set({ events, eventsLoaded: true, loading: false })
      return events
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async loadEventsByMosque(mosqueId) {
    set({ loading: true, error: null })

    try {
      const events = await fetchApi<Event[]>(`/mosques/${mosqueId}/events`)
      set({ events, eventsLoaded: false, loading: false })
      return events
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async loadPrayerTimes(mosqueId, date, force = false) {
    const prayerTimesKey = `${mosqueId}:${date}`

    if (!force && get().prayerTimesKey === prayerTimesKey && get().prayerTimes) {
      return get().prayerTimes
    }

    set({ loading: true, error: null })

    try {
      const prayerTimes = await fetchApi<PrayerTime | null>(
        `/prayer-times?mosqueId=${encodeURIComponent(mosqueId)}&date=${encodeURIComponent(date)}`
      )
      set({ prayerTimes, prayerTimesKey, loading: false })
      return prayerTimes
    } catch (error) {
      set({ prayerTimes: null, prayerTimesKey, loading: false, error: toErrorMessage(error) })
      return null
    }
  },

  clearPrayerTimes() {
    set({ prayerTimes: null, prayerTimesKey: null })
  },

  async addEvent(event) {
    const created = await fetchApi<Event>('/events', {
      method: 'POST',
      body: JSON.stringify(event),
    })

    set((state) => ({
      events: [created, ...state.events],
    }))

    return created
  },

  async updateEvent(id, event) {
    const updated = await fetchApi<Event>(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
    })

    set((state) => ({
      events: state.events.map((item) => (item.id === id ? updated : item)),
    }))

    return updated
  },

  async deleteEvent(id) {
    await fetchApi<void>(`/events/${id}`, {
      method: 'DELETE',
    })

    set((state) => ({
      events: state.events.filter((item) => item.id !== id),
    }))
  },
}))
