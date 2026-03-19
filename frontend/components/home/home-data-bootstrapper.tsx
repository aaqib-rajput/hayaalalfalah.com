"use client"

import { useEffect } from 'react'
import { useEventStore } from '@/lib/event-store'
import { useMosqueStore } from '@/lib/mosque-store'

function getToday() {
  return new Date().toISOString().split('T')[0]
}

export function HomeDataBootstrapper() {
  const loadMosques = useMosqueStore((state) => state.loadMosques)
  const loadEvents = useEventStore((state) => state.loadEvents)
  const loadPrayerTimes = useEventStore((state) => state.loadPrayerTimes)

  useEffect(() => {
    void loadEvents().catch(() => undefined)

    void loadMosques()
      .then((mosques) => {
        if (mosques[0]?.id) {
          void loadPrayerTimes(mosques[0].id, getToday()).catch(() => undefined)
        }
      })
      .catch(() => undefined)
  }, [loadEvents, loadMosques, loadPrayerTimes])

  return null
}
