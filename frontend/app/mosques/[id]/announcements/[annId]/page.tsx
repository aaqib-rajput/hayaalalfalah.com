import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, Announcement } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bell, ChevronLeft, Calendar, User, Pin, Share2 } from 'lucide-react'
import Link from 'next/link'

interface AnnouncementDetailPageProps {
  params: Promise<{ id: string; annId: string }>
}

export default async function AnnouncementDetailPage({ params }: AnnouncementDetailPageProps) {
  const { id, annId } = await params

  try {
    const [mosque, announcement] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<Announcement>(`/announcements/${annId}`)
    ])

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-8">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <Link 
              href={`/mosques/${id}/announcements`} 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Announcements
            </Link>

            <article className="space-y-8">
              <div className="space-y-4">
                 <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {announcement.category.toUpperCase()}
                    </Badge>
                    {announcement.isPinned && (
                      <Badge className="bg-primary/10 text-primary border-primary/20 gap-1.5 px-2 font-bold">
                        <Pin className="h-3.5 w-3.5" />
                        Pinned Announcement
                      </Badge>
                    )}
                 </div>
                 <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                    {announcement.title}
                 </h1>
                 <div className="flex items-center gap-6 text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                       <User className="h-4 w-4 text-primary" />
                       <span className="font-medium">{announcement.authorName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Calendar className="h-4 w-4 text-primary" />
                       <span className="font-medium">{new Date(announcement.publishDate).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
                    </div>
                 </div>
              </div>

              <Card className="border-none shadow-none bg-muted/30">
                 <CardContent className="p-8 sm:p-12">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                       <p className="text-xl sm:text-2xl leading-relaxed text-foreground/90 whitespace-pre-wrap">
                          {announcement.content}
                       </p>
                    </div>
                 </CardContent>
              </Card>

              <div className="flex items-center justify-between pt-8 border-t">
                 <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <Bell className="h-6 w-6" />
                    </div>
                    <div>
                       <p className="text-sm font-bold">Posted by {mosque.name}</p>
                       <p className="text-xs text-muted-foreground">Official Community Update</p>
                    </div>
                 </div>
                 <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Update
                 </Button>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}
