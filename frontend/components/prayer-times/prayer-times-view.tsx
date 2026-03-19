"use client"

import { useEffect, useMemo, useState } from 'react'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Loader2,
  MapPin,
  Moon,
  RefreshCw,
  Sun,
  Sunrise,
  Sunset,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEventStore } from '@/lib/event-store'
import { useMosqueStore } from '@/lib/mosque-store'
import { cn } from '@/lib/utils'

interface DisplayPrayer {
  name: string
  arabicName: string
  rawTime: string
  time: string
  iqama?: string
  icon: React.ElementType
}

function toIsoDate(date: Date) {
  return date.toISOString().split('T')[0]
}

function formatPrayerTime(rawTime: string) {
  const [hours, minutes] = rawTime.split(':').map(Number)

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return rawTime
  }

  return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

function toMinutes(rawTime: string) {
  const [hours, minutes] = rawTime.split(':').map(Number)
  return hours * 60 + minutes
}

export function PrayerTimesView() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [selectedDate, setSelectedDate] = useState(() => new Date())
  const [selectedMosqueId, setSelectedMosqueId] = useState('')

  const mosques = useMosqueStore((state) => state.mosques)
  const mosquesLoading = useMosqueStore((state) => state.loading)
  const loadMosques = useMosqueStore((state) => state.loadMosques)

  const prayerTimes = useEventStore((state) => state.prayerTimes)
  const prayerTimesLoading = useEventStore((state) => state.loading)
  const loadPrayerTimes = useEventStore((state) => state.loadPrayerTimes)

  useEffect(() => {
    setCurrentTime(new Date())

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    void loadMosques()
      .then((loadedMosques) => {
        if (!selectedMosqueId && loadedMosques[0]?.id) {
          setSelectedMosqueId(loadedMosques[0].id)
        }
      })
      .catch(() => undefined)
  }, [loadMosques, selectedMosqueId])

  useEffect(() => {
    if (!selectedMosqueId) {
      return
    }

    void loadPrayerTimes(selectedMosqueId, toIsoDate(selectedDate)).catch(() => undefined)
  }, [loadPrayerTimes, selectedDate, selectedMosqueId])

  const selectedMosque = useMemo(
    () => mosques.find((mosque) => mosque.id === selectedMosqueId),
    [mosques, selectedMosqueId]
  )

  const prayers = useMemo<DisplayPrayer[]>(() => {
    if (!prayerTimes) {
      return []
    }

    return [
      {
        name: 'Fajr',
        arabicName: 'Ø§Ù„ÙØ¬Ø±',
        rawTime: prayerTimes.fajr,
        time: formatPrayerTime(prayerTimes.fajr),
        iqama: prayerTimes.fajrIqama ? formatPrayerTime(prayerTimes.fajrIqama) : undefined,
        icon: Sunrise,
      },
      {
        name: 'Sunrise',
        arabicName: 'Ø§Ù„Ø´Ø±ÙˆÙ‚',
        rawTime: prayerTimes.sunrise,
        time: formatPrayerTime(prayerTimes.sunrise),
        icon: Sun,
      },
      {
        name: 'Dhuhr',
        arabicName: 'Ø§Ù„Ø¸Ù‡Ø±',
        rawTime: prayerTimes.dhuhr,
        time: formatPrayerTime(prayerTimes.dhuhr),
        iqama: prayerTimes.dhuhrIqama ? formatPrayerTime(prayerTimes.dhuhrIqama) : undefined,
        icon: Sun,
      },
      {
        name: 'Asr',
        arabicName: 'Ø§Ù„Ø¹ØµØ±',
        rawTime: prayerTimes.asr,
        time: formatPrayerTime(prayerTimes.asr),
        iqama: prayerTimes.asrIqama ? formatPrayerTime(prayerTimes.asrIqama) : undefined,
        icon: Sun,
      },
      {
        name: 'Maghrib',
        arabicName: 'Ø§Ù„Ù…ØºØ±Ø¨',
        rawTime: prayerTimes.maghrib,
        time: formatPrayerTime(prayerTimes.maghrib),
        iqama: prayerTimes.maghribIqama ? formatPrayerTime(prayerTimes.maghribIqama) : undefined,
        icon: Sunset,
      },
      {
        name: 'Isha',
        arabicName: 'Ø§Ù„Ø¹Ø´Ø§Ø¡',
        rawTime: prayerTimes.isha,
        time: formatPrayerTime(prayerTimes.isha),
        iqama: prayerTimes.ishaIqama ? formatPrayerTime(prayerTimes.ishaIqama) : undefined,
        icon: Moon,
      },
    ]
  }, [prayerTimes])

  const currentPrayer = useMemo(() => {
    if (!currentTime || prayers.length === 0) {
      return null
    }

    const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes()

    for (let i = prayers.length - 1; i >= 0; i--) {
      if (nowMinutes >= toMinutes(prayers[i].rawTime)) {
        return prayers[i].name
      }
    }

    return prayers[prayers.length - 1]?.name ?? null
  }, [currentTime, prayerTimes, prayers])

  const nextPrayer = useMemo(() => {
    if (!currentTime || prayers.length === 0) {
      return null
    }

    const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes()

    for (const prayer of prayers) {
      if (prayer.name === 'Sunrise') continue
      const prayerMinutes = toMinutes(prayer.rawTime)
      if (nowMinutes < prayerMinutes) {
        const diff = prayerMinutes - nowMinutes
        const hours = Math.floor(diff / 60)
        const minutes = diff % 60
        return {
          name: prayer.name,
          time: prayer.time,
          remaining: hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`,
        }
      }
    }

    return {
      name: prayers[0]?.name ?? 'Fajr',
      time: prayers[0]?.time ?? '--',
      remaining: 'Tomorrow',
    }
  }, [currentTime, prayerTimes, prayers])

  const changeDate = (days: number) => {
    setSelectedDate((current) => {
      const nextDate = new Date(current)
      nextDate.setDate(nextDate.getDate() + days)
      return nextDate
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-primary/10 to-transparent">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Time</p>
                <p className="text-2xl font-bold tabular-nums">
                  {currentTime
                    ? currentTime.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })
                    : '--:--:--'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <MapPin className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">Selected Mosque</p>
                <p className="truncate font-semibold">
                  {selectedMosque?.name || (mosquesLoading ? 'Loading...' : 'Select a mosque')}
                </p>
                {selectedMosque && (
                  <p className="truncate text-xs text-muted-foreground">
                    {[selectedMosque.city, selectedMosque.state].filter(Boolean).join(', ') || selectedMosque.address}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {nextPrayer && (
          <Card className="bg-gradient-to-br from-accent/20 to-transparent">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <Sun className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Next Prayer</p>
                  <p className="font-semibold">
                    {nextPrayer.name} at {nextPrayer.time}
                  </p>
                  <p className="text-xs text-muted-foreground">in {nextPrayer.remaining}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Calendar className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Schedule Date</p>
                <p className="font-semibold">
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => changeDate(-1)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="min-w-[220px] text-center">
                <p className="font-semibold">
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <Button variant="outline" size="icon" onClick={() => changeDate(1)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Select value={selectedMosqueId} onValueChange={setSelectedMosqueId}>
                <SelectTrigger className="min-w-[280px]">
                  <SelectValue placeholder="Select a mosque" />
                </SelectTrigger>
                <SelectContent>
                  {mosques.map((mosque) => (
                    <SelectItem key={mosque.id} value={mosque.id}>
                      {mosque.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (selectedMosqueId) {
                    void loadPrayerTimes(selectedMosqueId, toIsoDate(selectedDate), true).catch(() => undefined)
                  }
                }}
              >
                <RefreshCw className={cn('h-4 w-4', prayerTimesLoading && 'animate-spin')} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {mosques.length === 0 && !mosquesLoading ? (
        <Card>
          <CardContent className="py-12 text-center text-sm text-muted-foreground">
            Prayer times will appear once mosques have been added to the directory.
          </CardContent>
        </Card>
      ) : prayerTimesLoading && prayers.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : prayers.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-sm text-muted-foreground">
            No prayer schedule is available for this mosque on the selected date yet.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prayers.map((prayer) => {
            const Icon = prayer.icon
            const isCurrent = prayer.name === currentPrayer
            const isSunrise = prayer.name === 'Sunrise'

            return (
              <Card
                key={prayer.name}
                className={cn(
                  'transition-all',
                  isCurrent && !isSunrise && 'border-primary ring-2 ring-primary/20',
                  isSunrise && 'opacity-70'
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          'flex h-14 w-14 items-center justify-center rounded-xl',
                          isCurrent && !isSunrise ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        )}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3
                          className={cn(
                            'text-xl font-semibold',
                            isCurrent && !isSunrise && 'text-primary'
                          )}
                        >
                          {prayer.name}
                        </h3>
                        <p className="font-amiri text-lg text-muted-foreground">
                          {prayer.arabicName}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={cn(
                          'text-2xl font-bold tabular-nums',
                          isCurrent && !isSunrise && 'text-primary'
                        )}
                      >
                        {prayer.time}
                      </p>
                      {isCurrent && !isSunrise && (
                        <Badge variant="default" className="mt-1">Current</Badge>
                      )}
                    </div>
                  </div>
                  {prayer.iqama && (
                    <div className="mt-4 rounded-lg bg-muted/60 px-4 py-3 text-sm">
                      <span className="text-muted-foreground">Iqama</span>
                      <p className="mt-1 font-semibold">{prayer.iqama}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
