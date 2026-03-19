"use client"

import { useEffect } from 'react'
import { useCommunityStore } from '@/lib/community-store'
import { useEventStore } from '@/lib/event-store'
import { useFinanceStore } from '@/lib/finance-store'
import { useMosqueStore } from '@/lib/mosque-store'

export function AdminDataBootstrapper() {
  const loadMosques = useMosqueStore((state) => state.loadMosques)
  const loadImams = useMosqueStore((state) => state.loadImams)
  const loadEvents = useEventStore((state) => state.loadEvents)
  const loadAnnouncements = useCommunityStore((state) => state.loadAnnouncements)
  const loadGoals = useFinanceStore((state) => state.loadGoals)
  const loadRecords = useFinanceStore((state) => state.loadRecords)

  useEffect(() => {
    void loadMosques().catch(() => undefined)
    void loadImams().catch(() => undefined)
    void loadEvents().catch(() => undefined)
    void loadAnnouncements().catch(() => undefined)
    void loadGoals().catch(() => undefined)
    void loadRecords().catch(() => undefined)
  }, [loadAnnouncements, loadEvents, loadGoals, loadImams, loadMosques, loadRecords])

  return null
}
