"use client"

import { create } from 'zustand'
import { fetchApi } from './api-client'
import type { DonationGoal, FinanceRecord } from './types'

interface FinanceState {
  records: FinanceRecord[]
  goals: DonationGoal[]
  loading: boolean
  error: string | null
  goalsLoaded: boolean
  recordsLoaded: boolean
  loadGoals: (mosqueId?: string, force?: boolean) => Promise<DonationGoal[]>
  loadRecords: (mosqueId?: string, force?: boolean) => Promise<FinanceRecord[]>
  addRecord: (record: Omit<FinanceRecord, 'id' | 'createdAt'>) => Promise<FinanceRecord>
  addGoal: (goal: Omit<DonationGoal, 'id'>) => Promise<DonationGoal>
}

function toErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Unknown error'
}

export const useFinanceStore = create<FinanceState>((set, get) => ({
  records: [],
  goals: [],
  loading: false,
  error: null,
  goalsLoaded: false,
  recordsLoaded: false,

  async loadGoals(mosqueId, force = false) {
    if (!mosqueId && !force && get().goalsLoaded) {
      return get().goals
    }

    set({ loading: true, error: null })

    try {
      const endpoint = mosqueId ? `/mosques/${mosqueId}/goals` : '/finance/goals'
      const goals = await fetchApi<DonationGoal[]>(endpoint)
      set({
        goals,
        goalsLoaded: !mosqueId,
        loading: false,
      })
      return goals
    } catch (error) {
      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async loadRecords(mosqueId, force = false) {
    if (!mosqueId && !force && get().recordsLoaded) {
      return get().records
    }

    set({ loading: true, error: null })

    try {
      const endpoint = mosqueId ? `/mosques/${mosqueId}/records` : '/finance/records'
      const records = await fetchApi<FinanceRecord[]>(endpoint)
      set({
        records,
        recordsLoaded: !mosqueId,
        loading: false,
      })
      return records
    } catch (error) {
      if (mosqueId) {
        set({ records: [], loading: false })
        return []
      }

      set({ loading: false, error: toErrorMessage(error) })
      throw error
    }
  },

  async addRecord(record) {
    const created = await fetchApi<FinanceRecord>('/finance/records', {
      method: 'POST',
      body: JSON.stringify(record),
    })

    set((state) => ({
      records: [created, ...state.records],
    }))

    return created
  },

  async addGoal(goal) {
    const created = await fetchApi<DonationGoal>('/finance/goals', {
      method: 'POST',
      body: JSON.stringify(goal),
    })

    set((state) => ({
      goals: [created, ...state.goals],
    }))

    return created
  },
}))
