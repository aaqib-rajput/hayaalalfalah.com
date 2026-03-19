"use client"

import { create } from 'zustand'
import { fetchApi } from './api-client'
import type { BookCategory, BookCondition, LibraryBook } from './types'

interface LibraryState {
  books: LibraryBook[]
  loading: boolean
  error: string | null
  loadedMosqueId: string | null
  loadBooksByMosque: (mosqueId: string, force?: boolean) => Promise<LibraryBook[]>
}

function toErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Unknown error'
}

export const useLibraryStore = create<LibraryState>((set, get) => ({
  books: [],
  loading: false,
  error: null,
  loadedMosqueId: null,

  async loadBooksByMosque(mosqueId, force = false) {
    if (!force && get().loadedMosqueId === mosqueId) {
      return get().books
    }

    set({ loading: true, error: null })

    try {
      const books = await fetchApi<LibraryBook[]>(`/mosques/${mosqueId}/books`)
      set({ books, loadedMosqueId: mosqueId, loading: false })
      return books
    } catch (error) {
      set({ books: [], loadedMosqueId: mosqueId, loading: false, error: toErrorMessage(error) })
      return []
    }
  },
}))

export const bookCategoryLabels: Record<BookCategory, string> = {
  quran: 'Quran',
  hadith: 'Hadith',
  fiqh: 'Fiqh (Jurisprudence)',
  tafseer: 'Tafseer',
  seerah: 'Seerah (Biography)',
  arabic: 'Arabic Language',
  islamic_history: 'Islamic History',
  spirituality: 'Spirituality & Tasawwuf',
  children: "Children's Books",
  youth: 'Youth Books',
  women: "Women's Section",
  comparative_religion: 'Comparative Religion',
  general_islamic: 'General Islamic',
  other: 'Other',
}

export const conditionLabels: Record<BookCondition, string> = {
  new: 'New',
  excellent: 'Excellent',
  good: 'Good',
  fair: 'Fair',
  poor: 'Poor',
}
