import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, Event } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, ChevronRight, Filter, Search } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

interface MosqueEventsPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: MosqueEventsPageProps) {
  const { id } = await params
  try {
    const mosque = await fetchApi<Mosque>(`/mosques/${id}`)
    return {
      title: `Events | ${mosque.name} | MosqueConnect`,
      description: `Stay updated with upcoming events, seminars, and activities at ${mosque.name}.`,
    }
  } catch (error) {
    return {
      title: 'Events | MosqueConnect',
    }
  }
}

export default async function MosqueEventsPage({ params }: MosqueEventsPageProps) {
  const { id } = await params
  
  try {
    const [mosque, events] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<Event[]>(`/mosques/${id}/events`)
    ])

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-muted/30 pb-12">
          {/* Hero Section */}
          <div className="bg-primary/5 border-b py-12">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Events at {mosque.name}</h1>
                  <p className="text-muted-foreground mt-2 max-w-2xl">
                    Join our community activities, educational seminars, and social gatherings.
                  </p>
                </div>
                <Link href={`/mosques/${id}`}>
                  <Button variant="outline" className="gap-2">
                    Back to Mosque
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Search</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search events..." className="pl-9" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="cursor-pointer">All</Badge>
                        <Badge variant="outline" className="cursor-pointer">Religious</Badge>
                        <Badge variant="outline" className="cursor-pointer">Social</Badge>
                        <Badge variant="outline" className="cursor-pointer">Educational</Badge>
                        <Badge variant="outline" className="cursor-pointer">Youth</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-base">Host an Event?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Are you interested in organizing an event at {mosque.name}? Contact the management office.
                    </p>
                    <Button variant="default" className="w-full text-sm" size="sm">
                      Inquire Now
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Events List */}
              <div className="lg:col-span-3 space-y-6">
                {events.length === 0 ? (
                  <Card className="py-20">
                    <CardContent className="text-center">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                      <h3 className="text-xl font-semibold">No Events Found</h3>
                      <p className="text-muted-foreground mt-2">
                        There are currently no upcoming events scheduled at this time.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {events.map((event) => (
                      <Link key={event.id} href={`/events/${event.id}`}>
                        <Card className="overflow-hidden hover:border-primary/50 transition-all group">
                          <div className="flex flex-col md:flex-row h-full">
                            {event.imageUrl && (
                              <div className="md:w-48 h-48 md:h-auto relative flex-shrink-0">
                                <img 
                                  src={event.imageUrl} 
                                  alt={event.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1 p-6">
                              <div className="flex justify-between items-start mb-2">
                                <Badge variant="secondary">{event.category}</Badge>
                                <span className="text-sm font-medium text-primary">
                                  {event.isFree ? 'Free' : `$${event.price}`}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>
                              <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                                {event.description}
                              </p>
                              
                              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="h-4 w-4" />
                                  {new Date(event.startDate).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Clock className="h-4 w-4" />
                                  {event.startTime}
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="h-4 w-4" />
                                  {event.locationType === 'online' ? 'Online' : event.location}
                                </div>
                              </div>
                            </div>
                            <div className="bg-muted/30 p-6 flex flex-col justify-center items-center gap-3 border-l">
                              <div className="text-center">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Attendees</p>
                                <p className="text-lg font-bold">{event.attendeeCount}</p>
                              </div>
                              <Button size="sm" className="w-full">Details</Button>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}
