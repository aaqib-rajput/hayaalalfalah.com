import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, Announcement } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bell, Megaphone, ChevronLeft, Calendar, User, Pin, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MosqueAnnouncementsPageProps {
  params: Promise<{ id: string }>
}

const categoryColors: Record<string, string> = {
  general: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
  prayer: 'bg-primary/10 text-primary border-primary/20',
  event: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  urgent: 'bg-red-500/10 text-red-600 border-red-500/20',
  community: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  education: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
}

export default async function MosqueAnnouncementsPage({ params }: MosqueAnnouncementsPageProps) {
  const { id } = await params

  try {
    const [mosque, announcements] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<Announcement[]>(`/mosques/${id}/announcements`)
    ])

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
            <Link 
              href={`/mosques/${id}`} 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to {mosque.name}
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                <Megaphone className="h-8 w-8 text-primary" />
                {mosque.name} Announcements
              </h1>
              <p className="mt-2 text-muted-foreground">Latest news, updates, and community alerts from our masjid.</p>
            </div>

            <div className="space-y-4">
              {sortedAnnouncements.length === 0 ? (
                <div className="py-12 text-center bg-muted/30 rounded-xl border-2 border-dashed">
                  <Bell className="h-12 w-12 mx-auto text-muted-foreground/30" />
                  <p className="mt-4 text-muted-foreground">No announcements from this mosque yet.</p>
                </div>
              ) : (
                sortedAnnouncements.map((ann) => (
                  <Card key={ann.id} className={cn(
                    "transition-all border-l-4",
                    ann.isPinned ? "border-l-primary bg-primary/5" : "border-l-transparent",
                    ann.category === 'urgent' && "border-l-red-500"
                  )}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className={categoryColors[ann.category] || categoryColors.general}>
                          {ann.category}
                        </Badge>
                        {ann.isPinned && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 gap-1 px-1.5 font-bold">
                            <Pin className="h-3 w-3" />
                            Pinned
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1.5">
                           <Calendar className="h-3.5 w-3.5" />
                           {new Date(ann.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                         <Link href={`/mosques/${id}/announcements/${ann.id}`} className="hover:text-primary transition-colors">
                            {ann.title}
                         </Link>
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{ann.content}</p>
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                         <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5" />
                            {ann.authorName}
                         </span>
                         <Button size="sm" variant="ghost" className="gap-2 group/btn" asChild>
                            <Link href={`/mosques/${id}/announcements/${ann.id}`}>
                               Read Full Story
                               <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                         </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
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
