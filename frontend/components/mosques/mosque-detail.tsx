"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Users, 
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Share2,
  Navigation,
  Building2,
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Languages,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
  User,
  ShieldCheck,
  Library,
  Search,
  BookMarked,
  Filter,
  BookCopy,
  AlertCircle,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEventStore } from '@/lib/event-store'
import { useCommunityStore } from '@/lib/community-store'
import { useFinanceStore } from '@/lib/finance-store'
import { useMosqueStore } from '@/lib/mosque-store'
import type { Mosque, Imam, ManagementMember, LibraryBook } from '@/lib/types'
import { useLibraryStore, bookCategoryLabels, conditionLabels } from '@/lib/library-store'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface MosqueDetailProps {
  mosque: Mosque
}

export function MosqueDetail({ mosque }: MosqueDetailProps) {
  const { events, prayerTimes, loadEventsByMosque, loadPrayerTimes } = useEventStore()
  const { announcements, loadAnnouncementsByMosque } = useCommunityStore()
  const { goals: donationGoals, loadGoals } = useFinanceStore()
  const {
    imams: allImams,
    managementMembers: allManagement,
    loadImams,
    loadManagementMembers,
  } = useMosqueStore()
  const books = useLibraryStore((state) => state.books)
  const loadBooksByMosque = useLibraryStore((state) => state.loadBooksByMosque)

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]

    void loadEventsByMosque(mosque.id).catch(() => undefined)
    void loadAnnouncementsByMosque(mosque.id).catch(() => undefined)
    void loadGoals(mosque.id).catch(() => undefined)
    void loadImams(mosque.id).catch(() => undefined)
    void loadManagementMembers(mosque.id).catch(() => undefined)
    void loadBooksByMosque(mosque.id).catch(() => undefined)
    void loadPrayerTimes(mosque.id, today).catch(() => undefined)
  }, [
    loadAnnouncementsByMosque,
    loadBooksByMosque,
    loadEventsByMosque,
    loadGoals,
    loadImams,
    loadManagementMembers,
    loadPrayerTimes,
    mosque.id,
  ])

  const mosqueEvents = events.filter(e => e.mosqueId === mosque.id)
  const mosqueAnnouncements = announcements.filter(a => a.mosqueId === mosque.id)
  const mosqueDonationGoals = donationGoals.filter(g => g.mosqueId === mosque.id)
  const mosqueImams = allImams.filter(i => i.mosqueId === mosque.id)
  const managementTeam = allManagement.filter(m => m.mosqueId === mosque.id)

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: mosque.name,
        text: mosque.description,
        url: window.location.href,
      })
    }
  }

  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${mosque.latitude},${mosque.longitude}`
    window.open(url, '_blank')
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mosque-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mosque-pattern)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <Link 
            href="/mosques"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Directory
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MosqueIcon className="h-12 w-12" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-foreground">{mosque.name}</h1>
                  {mosque.isVerified && (
                    <Badge className="gap-1 bg-primary/10 text-primary hover:bg-primary/20">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{mosque.address}, {mosque.city}, {mosque.state} {mosque.zipCode}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Users className="h-3 w-3" />
                    Capacity: {mosque.capacity}
                  </Badge>
                  <Badge variant="secondary">
                    Est. {mosque.establishedYear}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={handleDirections} className="gap-2">
                <Navigation className="h-4 w-4" />
                Get Directions
              </Button>
              <Button variant="outline" onClick={handleShare} className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start flex-wrap">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="imams">Imams ({mosqueImams.length})</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
                <TabsTrigger value="library">Library</TabsTrigger>
                <TabsTrigger value="events">Events ({mosqueEvents.length})</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
                <TabsTrigger value="donations">Donations</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {mosque.description}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {mosque.facilities.map((facility) => (
                        <Badge key={facility} variant="outline" className="text-sm py-1.5 px-3">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Map placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 rounded-lg bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {mosque.address}<br />
                          {mosque.city}, {mosque.state} {mosque.zipCode}
                        </p>
                        <Button 
                          variant="link" 
                          onClick={handleDirections}
                          className="mt-2"
                        >
                          Open in Google Maps
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="imams" className="mt-6">
                <div className="space-y-6">
                  {mosqueImams.length === 0 ? (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <User className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <p className="mt-4 text-muted-foreground">No imam profiles available</p>
                      </CardContent>
                    </Card>
                  ) : (
                    mosqueImams.map((imam) => (
                      <ImamProfile key={imam.id} imam={imam} mosqueId={mosque.id} />
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="management" className="mt-6">
                <div className="space-y-6">
                  {managementTeam.length === 0 ? (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <Users className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <p className="mt-4 text-muted-foreground">No management information available</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <>
                      <ManagementOverview team={managementTeam} />
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <CardTitle>Board Members & Committee Heads</CardTitle>
                          <Link href={`/mosques/${mosque.id}/management`}>
                            <Button variant="outline" size="sm">
                              View Full Details
                            </Button>
                          </Link>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 md:grid-cols-2">
                            {managementTeam.map((member) => (
                              <ManagementMemberCard key={member.id} member={member} mosqueId={mosque.id} />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="library" className="mt-6">
                <MosqueLibrary mosqueId={mosque.id} mosqueName={mosque.name} books={books} />
              </TabsContent>

              <TabsContent value="events" className="mt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Upcoming Events</h3>
                    <Link href={`/mosques/${mosque.id}/events`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        View All
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  {mosqueEvents.length === 0 ? (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <Calendar className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <p className="mt-4 text-muted-foreground">No upcoming events</p>
                      </CardContent>
                    </Card>
                  ) : (
                    mosqueEvents.map((event) => (
                      <Link key={event.id} href={`/events/${event.id}`}>
                        <Card className="hover:border-primary/30 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-semibold">{event.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                  {event.description}
                                </p>
                                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(event.startDate).toLocaleDateString()}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {event.startTime}
                                  </span>
                                </div>
                              </div>
                              <Badge variant="secondary">{event.category}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="announcements" className="mt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Latest Updates</h3>
                    <Link href={`/mosques/${mosque.id}/announcements`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        View All
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  {mosqueAnnouncements.length === 0 ? (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <Building2 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <p className="mt-4 text-muted-foreground">No announcements</p>
                      </CardContent>
                    </Card>
                  ) : (
                    mosqueAnnouncements.map((announcement) => (
                      <Card key={announcement.id} className={announcement.isPinned ? 'border-primary/30' : ''}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            {announcement.isPinned && (
                              <Badge variant="default" className="flex-shrink-0">Pinned</Badge>
                            )}
                            <div className="flex-1">
                              <h3 className="font-semibold">{announcement.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {announcement.content}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {announcement.authorName} - {new Date(announcement.publishDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="donations" className="mt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Active Campaigns</h3>
                    <Link href={`/mosques/${mosque.id}/donations`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        View More
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  {mosqueDonationGoals.length === 0 ? (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <Building2 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <p className="mt-4 text-muted-foreground">No active donation campaigns</p>
                      </CardContent>
                    </Card>
                  ) : (
                    mosqueDonationGoals.map((goal) => {
                      const progress = (goal.currentAmount / goal.targetAmount) * 100
                      return (
                        <Card key={goal.id}>
                          <CardContent className="p-4">
                            <h3 className="font-semibold">{goal.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {goal.description}
                            </p>
                            <div className="mt-4">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="font-medium">${goal.currentAmount.toLocaleString()}</span>
                                <span className="text-muted-foreground">of ${goal.targetAmount.toLocaleString()}</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted">
                                <div 
                                  className="h-full rounded-full bg-primary transition-all"
                                  style={{ width: `${Math.min(progress, 100)}%` }}
                                />
                              </div>
                              <p className="text-xs text-muted-foreground mt-2">
                                {progress.toFixed(0)}% funded - ends {new Date(goal.endDate).toLocaleDateString()}
                              </p>
                            </div>
                            <Button className="w-full mt-4">Donate Now</Button>
                          </CardContent>
                        </Card>
                      )
                    })
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Prayer Times */}
            {prayerTimes && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Today's Prayer Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <PrayerTimeRow label="Fajr" time={prayerTimes.fajr} iqama={prayerTimes.fajrIqama} />
                  <PrayerTimeRow label="Dhuhr" time={prayerTimes.dhuhr} iqama={prayerTimes.dhuhrIqama} />
                  <PrayerTimeRow label="Asr" time={prayerTimes.asr} iqama={prayerTimes.asrIqama} />
                  <PrayerTimeRow label="Maghrib" time={prayerTimes.maghrib} iqama={prayerTimes.maghribIqama} />
                  <PrayerTimeRow label="Isha" time={prayerTimes.isha} iqama={prayerTimes.ishaIqama} />
                  {prayerTimes.jummah && (
                    <>
                      <div className="border-t border-border pt-3 mt-3" />
                      <PrayerTimeRow label="Jummah" time={prayerTimes.jummah} iqama={prayerTimes.jummahIqama} />
                    </>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mosque.phone && (
                  <a 
                    href={`tel:${mosque.phone}`}
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    {mosque.phone}
                  </a>
                )}
                {mosque.email && (
                  <a 
                    href={`mailto:${mosque.email}`}
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    {mosque.email}
                  </a>
                )}
                {mosque.website && (
                  <a 
                    href={mosque.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    Visit Website
                  </a>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrayerTimeRow({ label, time, iqama }: { label: string; time: string; iqama?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{label}</span>
      <div className="text-right">
        <span className="text-sm">{time}</span>
        {iqama && (
          <span className="text-xs text-muted-foreground ml-2">(Iqama: {iqama})</span>
        )}
      </div>
    </div>
  )
}

function MosqueIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3c-1.5 2-3 3.5-3 5.5a3 3 0 1 0 6 0c0-2-1.5-3.5-3-5.5z" />
      <path d="M4 21V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11" />
      <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
      <path d="M3 21h18" />
      <path d="M4 10l8-6 8 6" />
    </svg>
  )
}

// Imam Profile Component
function ImamProfile({ imam, mosqueId }: { imam: Imam; mosqueId: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        {/* Header with Photo and Basic Info */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Avatar className="h-32 w-32 rounded-xl">
            <AvatarImage src={imam.photoUrl} alt={imam.name} />
            <AvatarFallback className="rounded-xl text-2xl bg-primary/10 text-primary">
              {imam.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link href={`/mosques/${mosqueId}/imam/${imam.id}`} className="hover:text-primary transition-colors">
                  <h3 className="text-2xl font-bold text-foreground">{imam.name}</h3>
                </Link>
                <Badge variant="secondary" className="mt-1">{imam.title}</Badge>
              </div>
              <Badge className="bg-primary/10 text-primary">
                {imam.yearsOfExperience}+ Years Experience
              </Badge>
            </div>
            
            <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">
              {imam.biography}
            </p>

            {/* Contact Info */}
            <div className="mt-4 flex flex-wrap gap-4">
              {imam.contactEmail && (
                <a href={`mailto:${imam.contactEmail}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  {imam.contactEmail}
                </a>
              )}
              {imam.officeHours && (
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Office Hours: {imam.officeHours}
                </span>
              )}
            </div>

            {/* Social Media */}
            {imam.socialMedia && (
              <div className="mt-4 flex gap-2">
                {imam.socialMedia.youtube && (
                  <a href={imam.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                )}
                {imam.socialMedia.twitter && (
                  <a href={imam.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {imam.socialMedia.facebook && (
                  <a href={imam.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                )}
                {imam.socialMedia.instagram && (
                  <a href={imam.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}

            {/* View Full Profile Link */}
            <Link href={`/mosques/${mosqueId}/imam/${imam.id}`} className="mt-4 inline-block">
              <Button variant="outline" size="sm">
                View Full Profile
              </Button>
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Detailed Information Accordion */}
        <Accordion type="multiple" className="w-full">
          {/* Education */}
          <AccordionItem value="education">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>Education & Qualifications</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {imam.education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{edu.degree} in {edu.field}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.location} - {edu.year}</p>
                    </div>
                  </div>
                ))}
                
                {imam.certifications && imam.certifications.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold flex items-center gap-2 mb-3">
                      <Award className="h-4 w-4 text-primary" />
                      Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {imam.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline">{cert}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Specializations */}
          <AccordionItem value="specializations">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Specializations & Languages</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="font-semibold mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {imam.specializations.map((spec, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary">{spec}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold flex items-center gap-2 mb-3">
                    <Languages className="h-4 w-4 text-primary" />
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {imam.languages.map((lang, index) => (
                      <Badge key={index} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Previous Experience */}
          {imam.previousPositions && imam.previousPositions.length > 0 && (
            <AccordionItem value="experience">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>Previous Positions</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  {imam.previousPositions.map((pos, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{pos.position}</h4>
                        <p className="text-sm text-muted-foreground">{pos.mosqueName}</p>
                        <p className="text-xs text-muted-foreground">
                          {pos.location} ({pos.startYear} - {pos.endYear || 'Present'})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Publications */}
          {imam.publications && imam.publications.length > 0 && (
            <AccordionItem value="publications">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Publications & Works</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pt-2">
                  {imam.publications.map((pub, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">-</span>
                      <span className="text-muted-foreground">{pub}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
    </Card>
  )
}

// Management Overview Component
function ManagementOverview({ team }: { team: ManagementMember[] }) {
  const boardMembers = team.filter(m => ['president', 'vice_president', 'secretary', 'treasurer', 'trustee', 'board_member'].includes(m.position))
  const committeeHeads = team.filter(m => !['president', 'vice_president', 'secretary', 'treasurer', 'trustee', 'board_member'].includes(m.position))
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          Mosque Leadership Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center p-4 rounded-lg bg-primary/5">
            <p className="text-3xl font-bold text-primary">{team.length}</p>
            <p className="text-sm text-muted-foreground">Total Members</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted">
            <p className="text-3xl font-bold">{boardMembers.length}</p>
            <p className="text-sm text-muted-foreground">Board Members</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted">
            <p className="text-3xl font-bold">{committeeHeads.length}</p>
            <p className="text-sm text-muted-foreground">Committee Heads</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted">
            <p className="text-3xl font-bold">{team.filter(m => m.isElected).length}</p>
            <p className="text-sm text-muted-foreground">Elected Positions</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Management Member Card Component
function ManagementMemberCard({ member, mosqueId }: { member: ManagementMember; mosqueId: string }) {
  const positionLabels: Record<string, string> = {
    president: 'President',
    vice_president: 'Vice President',
    secretary: 'Secretary',
    treasurer: 'Treasurer',
    trustee: 'Trustee',
    board_member: 'Board Member',
    committee_head: 'Committee Head',
    volunteer_coordinator: 'Volunteer Coordinator',
    education_director: 'Education Director',
    youth_director: 'Youth Director',
    women_coordinator: 'Women\'s Coordinator',
    facilities_manager: 'Facilities Manager',
    security_head: 'Security Head',
    other: 'Staff Member'
  }

  return (
    <Card className="hover:border-primary/30 transition-colors">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={member.photoUrl} alt={member.name} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {member.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <Link href={`/mosques/${mosqueId}/management/${member.id}`} className="hover:text-primary transition-colors">
              <h4 className="font-semibold truncate">{member.name}</h4>
            </Link>
            <Badge variant="secondary" className="mt-1">
              {positionLabels[member.position] || member.position}
            </Badge>
            {member.department && (
              <p className="text-xs text-muted-foreground mt-1">{member.department}</p>
            )}
            
            <div className="mt-3 space-y-1">
              <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs hover:text-primary transition-colors">
                <Mail className="h-3 w-3" />
                <span className="truncate">{member.email}</span>
              </a>
              {member.phone && (
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-xs hover:text-primary transition-colors">
                  <Phone className="h-3 w-3" />
                  {member.phone}
                </a>
              )}
            </div>

            <Link href={`/mosques/${mosqueId}/management/${member.id}`} className="mt-3 inline-block">
              <Button variant="outline" size="sm" className="text-xs h-7">
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Mosque Library Component
function MosqueLibrary({
  mosqueId,
  mosqueName,
  books,
}: {
  mosqueId: string
  mosqueName: string
  books: LibraryBook[]
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [selectedBook, setSelectedBook] = useState<LibraryBook | null>(null)

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.author || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = categoryFilter === 'all' || book.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const categories = Object.entries(bookCategoryLabels)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Library className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Mosque Library</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Browse the public book catalog for {mosqueName}
                </p>
              </div>
            </div>
            <Link href={`/mosques/${mosqueId}/library`}>
              <Button variant="outline" size="sm" className="gap-2">
                Full Library View
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <BookMarked className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold">{books.length}</p>
              <p className="text-xs text-muted-foreground">Total Books</p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <BookCopy className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
              <p className="text-2xl font-bold">
                {books.reduce((total, book) => total + book.availableCopies, 0)}
              </p>
              <p className="text-xs text-muted-foreground">Available Copies</p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <AlertCircle className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
              <p className="text-2xl font-bold">
                {books.filter((book) => book.availableCopies > 0).length}
              </p>
              <p className="text-xs text-muted-foreground">Available Titles</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Browse Books</h3>
              <p className="text-sm text-muted-foreground">
                The MVP library is read-only and currently focused on books.
              </p>
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[220px] pl-9"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(([value, label]) => (
                    <SelectItem key={value} value={value}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredBooks.length === 0 ? (
            <div className="py-12 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-muted-foreground">
                {searchQuery || categoryFilter !== 'all'
                  ? 'No books match your search criteria'
                  : 'No books in the library yet'}
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onClick={() => setSelectedBook(book)}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl">
          {selectedBook && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedBook.title}</DialogTitle>
                <DialogDescription>by {selectedBook.author || 'Unknown author'}</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>{bookCategoryLabels[selectedBook.category]}</Badge>
                  {selectedBook.language && (
                    <Badge variant="outline">{selectedBook.language}</Badge>
                  )}
                  <Badge variant="outline">{conditionLabels[selectedBook.condition]}</Badge>
                  {selectedBook.isReferencOnly && (
                    <Badge variant="secondary">Reference Only</Badge>
                  )}
                </div>

                {selectedBook.description && (
                  <p className="text-muted-foreground">{selectedBook.description}</p>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Publisher:</span>{' '}
                      {selectedBook.publisher || 'N/A'}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Year:</span>{' '}
                      {selectedBook.publishYear || 'N/A'}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">ISBN:</span>{' '}
                      {selectedBook.isbn || 'N/A'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Location:</span>{' '}
                      {selectedBook.location}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Available:</span>{' '}
                      {selectedBook.availableCopies} of {selectedBook.totalCopies} copies
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Catalog Status:</span>{' '}
                      {selectedBook.isReferencOnly ? 'Reference only' : 'Read-only catalog'}
                    </p>
                  </div>
                </div>

                {selectedBook.tags && selectedBook.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {selectedBook.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1" disabled>
                    Public Library Catalog
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedBook(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Book Card Component
function BookCard({ book, onClick }: { book: LibraryBook; onClick: () => void }) {
  return (
    <Card 
      className="hover:border-primary/30 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold line-clamp-2">{book.title}</h4>
            <p className="text-sm text-muted-foreground truncate">{book.author}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">
                {bookCategoryLabels[book.category]}
              </Badge>
              {book.availableCopies === 0 && (
                <Badge variant="destructive" className="text-xs">
                  Unavailable
                </Badge>
              )}
              {book.isReferencOnly && (
                <Badge variant="outline" className="text-xs">
                  Ref Only
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {book.availableCopies} of {book.totalCopies} available
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
