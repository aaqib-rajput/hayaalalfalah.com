"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Moon, Sun, Sunrise, Sunset } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEventStore } from '@/lib/event-store'

interface PrayerTime {
  name: string
  time: string
  icon: React.ElementType
  arabicName: string
}

function toMinutes(rawTime: string): number {
  const value = rawTime.trim()

  if (value.includes(' ')) {
    const [time, period] = value.split(' ')
    const [hours, mins] = time.split(':').map(Number)
    let total = hours * 60 + mins

    if (period === 'PM' && hours !== 12) {
      total += 12 * 60
    }

    if (period === 'AM' && hours === 12) {
      total = mins
    }

    return total
  }

  const [hours, mins] = value.split(':').map(Number)
  return hours * 60 + mins
}

function formatPrayerTime(rawTime: string): string {
  const [hours, minutes] = rawTime.split(':').map(Number)

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return rawTime
  }

  return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

function getCurrentPrayer(prayers: PrayerTime[]): string {
  if (prayers.length === 0) {
    return ''
  }

  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()

  for (let i = prayers.length - 1; i >= 0; i--) {
    const prayerMinutes = toMinutes(prayers[i].time)

    if (currentMinutes >= prayerMinutes) {
      return prayers[i].name
    }
  }

  return prayers[prayers.length - 1].name
}

function getNextPrayer(prayers: PrayerTime[]): { name: string; time: string } {
  if (prayers.length === 0) {
    return { name: '', time: '' }
  }

  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()

  for (const prayer of prayers) {
    if (prayer.name === 'Sunrise') continue

    if (currentMinutes < toMinutes(prayer.time)) {
      return { name: prayer.name, time: prayer.time }
    }
  }

  return { name: prayers[0].name, time: prayers[0].time }
}

export function PrayerTimesWidget() {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const fetchedPrayerTimes = useEventStore((state) => state.prayerTimes)

  const prayerTimes: PrayerTime[] = fetchedPrayerTimes
    ? [
        { name: 'Fajr', time: formatPrayerTime(fetchedPrayerTimes.fajr), icon: Sunrise, arabicName: 'Ø§Ù„ÙØ¬Ø±' },
        { name: 'Sunrise', time: formatPrayerTime(fetchedPrayerTimes.sunrise || '06:30'), icon: Sun, arabicName: 'Ø§Ù„Ø´Ø±ÙˆÙ‚' },
        { name: 'Dhuhr', time: formatPrayerTime(fetchedPrayerTimes.dhuhr), icon: Sun, arabicName: 'Ø§Ù„Ø¸Ù‡Ø±' },
        { name: 'Asr', time: formatPrayerTime(fetchedPrayerTimes.asr), icon: Sun, arabicName: 'Ø§Ù„Ø¹ØµØ±' },
        { name: 'Maghrib', time: formatPrayerTime(fetchedPrayerTimes.maghrib), icon: Sunset, arabicName: 'Ø§Ù„Ù…ØºØ±Ø¨' },
        { name: 'Isha', time: formatPrayerTime(fetchedPrayerTimes.isha), icon: Moon, arabicName: 'Ø§Ù„Ø¹Ø´Ø§Ø¡' },
      ]
    : []

  const [currentPrayer, setCurrentPrayer] = useState('')
  const [nextPrayer, setNextPrayer] = useState({ name: '', time: '' })

  useEffect(() => {
    setMounted(true)
    setCurrentTime(new Date())

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (currentTime) {
      setCurrentPrayer(getCurrentPrayer(prayerTimes))
      setNextPrayer(getNextPrayer(prayerTimes))
    }
  }, [currentTime, prayerTimes])

  const displayTime = mounted && currentTime
    ? currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    : '--:--:--'

  const displayDate = mounted && currentTime
    ? currentTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '--'

  return (
    <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl font-semibold">
            <Clock className="h-5 w-5 text-primary" />
            Prayer Times
          </CardTitle>
        </div>
        <div className="mt-2 rounded-lg bg-background/50 p-3 text-center">
          <p className="text-2xl font-bold text-foreground tabular-nums">
            {displayTime}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {displayDate}
          </p>
        </div>
        {nextPrayer.name && (
          <div className="mt-3 rounded-lg border border-primary/20 bg-primary/10 p-3">
            <p className="text-sm text-muted-foreground">Next Prayer</p>
            <p className="text-lg font-semibold text-primary">
              {nextPrayer.name} at {nextPrayer.time}
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        {!fetchedPrayerTimes && (
          <div className="rounded-lg border border-dashed border-border/60 bg-muted/20 p-3 text-sm text-muted-foreground">
            Live mosque prayer times will appear here once a mosque schedule is available.
          </div>
        )}
        {prayerTimes.map((prayer) => {
          const Icon = prayer.icon
          const isCurrent = prayer.name === currentPrayer
          const isSunrise = prayer.name === 'Sunrise'

          return (
            <div
              key={prayer.name}
              className={cn(
                'flex items-center justify-between rounded-lg px-3 py-2 transition-colors',
                isCurrent && !isSunrise && 'border border-primary/20 bg-primary/10',
                isSunrise && 'opacity-60'
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    'h-4 w-4',
                    isCurrent && !isSunrise ? 'text-primary' : 'text-muted-foreground'
                  )}
                />
                <div>
                  <span
                    className={cn(
                      'font-medium',
                      isCurrent && !isSunrise ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {prayer.name}
                  </span>
                  <span className="ml-2 font-amiri text-xs text-muted-foreground">
                    {prayer.arabicName}
                  </span>
                </div>
              </div>
              <span
                className={cn(
                  'font-medium tabular-nums',
                  isCurrent && !isSunrise ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {prayer.time}
              </span>
            </div>
          )
        })}

        <Link href="/prayer-times" className="mt-4 block">
          <Button variant="outline" className="w-full gap-2">
            View Full Schedule
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
