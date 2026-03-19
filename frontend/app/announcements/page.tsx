import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Announcement, Mosque } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bell, Megaphone, Calendar, User, Pin, MapPin, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Announcements | MosqueConnect',
  description: 'Stay updated with latest news and announcements from all mosques.',
}

const announcementCategoryColors: Record<string, string> = {
  general: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
  prayer: 'bg-primary/10 text-primary border-primary/20',
  event: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  urgent: 'bg-red-500/10 text-red-600 border-red-500/20',
  community: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  education: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
}

export default async function GlobalAnnouncementsPage() {
  const [announcements, mosques] = await Promise.all([
    fetchApi<Announcement[]>('/community/announcements'),
    fetchApi<Mosque[]>('/mosques')
  ])

  // Sort by pinned first, then by date
  const sortedAnnouncements = [...announcements].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
              <Megaphone className="h-8 w-8 text-primary" />
              Community Announcements
            </h1>
            <p className="mt-2 text-muted-foreground">Stay informed about the latest updates, event news, and urgent alerts from our network of mosques.</p>
          </div>

          <div className="space-y-6">
            {sortedAnnouncements.length === 0 ? (
              <Card className="border-dashed py-12">
                <CardContent className="text-center">
                  <Bell className="h-12 w-12 mx-auto text-muted-foreground/30" />
                  <p className="mt-4 text-muted-foreground">No announcements found.</p>
                </CardContent>
              </Card>
            ) : (
              sortedAnnouncements.map((ann) => {
                const mosque = mosques.find(m => m.id === ann.mosqueId)
                
                return (
                  <Card key={ann.id} className={cn(
                    "transition-all duration-300 border-l-4",
                    ann.isPinned ? "border-l-primary bg-primary/5" : "border-l-transparent",
                    ann.category === 'urgent' && "border-l-red-500 bg-red-50/50 dark:bg-red-950/20"
                  )}>
                    <CardHeader className="p-6 pb-2">
                       <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                             <Badge variant="outline" className={announcementCategoryColors[ann.category] || announcementCategoryColors.general}>
                                {ann.category}
                             </Badge>
                             {ann.isPinned && (
                               <Badge className="bg-primary/10 text-primary border-primary/20 gap-1 px-1.5 font-bold">
                                 <Pin className="h-3 w-3" />
                                 Pinned
                               </Badge>
                             )}
                          </div>
                          {mosque && (
                            <Link href={`/mosques/${mosque.id}`} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                               <MapPin className="h-3 w-3" />
                               {mosque.name}
                               <ExternalLink className="h-3 w-3 ml-0.5" />
                            </Link>
                          )}
                       </div>
                       <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          <Link href={`/mosques/${ann.mosqueId}/announcements/${ann.id}`}>
                            {ann.title}
                          </Link>
                       </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-2">
                       <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                          {ann.content}
                       </p>
                       <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50">
                          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                             <span className="flex items-center gap-1.5">
                               <User className="h-3.5 w-3.5" />
                               {ann.authorName}
                             </span>
                             <span className="flex items-center gap-1.5">
                               <Calendar className="h-3.5 w-3.5" />
                               {new Date(ann.publishDate).toLocaleDateString(undefined, { dateStyle: 'long' })}
                             </span>
                          </div>
                          <Button size="sm" variant="ghost" className="gap-2 group/btn" asChild>
                             <Link href={`/mosques/${ann.mosqueId}/announcements/${ann.id}`}>
                                Read Full Story
                                <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                             </Link>
                          </Button>
                       </div>
                    </CardContent>
                  </Card>
                )
              })
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
