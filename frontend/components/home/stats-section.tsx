"use client"

import { Building2, Calendar, CheckCircle2, MapPin } from 'lucide-react'
import { useEventStore } from '@/lib/event-store'
import { useMosqueStore } from '@/lib/mosque-store'

export function StatsSection() {
  const mosques = useMosqueStore((state) => state.mosques)
  const events = useEventStore((state) => state.events)

  const stats = [
    {
      icon: Building2,
      value: mosques.length.toString(),
      label: 'Registered Mosques',
      description: 'Public mosque listings available in the MVP directory',
    },
    {
      icon: CheckCircle2,
      value: mosques.filter((mosque) => mosque.isVerified).length.toString(),
      label: 'Verified Listings',
      description: 'Mosques currently marked as verified on the platform',
    },
    {
      icon: Calendar,
      value: events.length.toString(),
      label: 'Published Events',
      description: 'Upcoming programs, lectures, and gatherings in the network',
    },
    {
      icon: MapPin,
      value: new Set(mosques.map((mosque) => mosque.city).filter(Boolean)).size.toString(),
      label: 'Cities Represented',
      description: 'Distinct city locations currently visible in the directory',
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building A Practical Mosque Network
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These numbers come from the live MVP data currently available through the platform.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5" />
              <div className="relative">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 font-semibold text-foreground">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
