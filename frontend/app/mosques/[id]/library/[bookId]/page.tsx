import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, LibraryBook } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Book, ChevronLeft, MapPin, Tag, Globe, Calendar, User, Info } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BookDetailPageProps {
  params: Promise<{ id: string; bookId: string }>
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id, bookId } = await params

  try {
    const [mosque, book] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<LibraryBook>(`/books/${bookId}`)
    ])

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link 
              href={`/mosques/${id}/library`} 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Library
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left: Book Cover */}
              <div className="lg:col-span-1">
                <Card className="overflow-hidden border-none shadow-2xl">
                  <div className="aspect-[3/4] relative bg-muted">
                    {book.coverImageUrl ? (
                      <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Book className="h-20 w-20 text-muted-foreground/20" />
                      </div>
                    )}
                  </div>
                </Card>
                
                <Card className="mt-6">
                   <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                         <span className="text-sm text-muted-foreground font-medium">Availability</span>
                         <Badge variant={book.availableCopies > 0 ? "outline" : "destructive"}>
                            {book.availableCopies} of {book.totalCopies} Copies
                         </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-sm text-muted-foreground font-medium">Condition</span>
                         <Badge variant="secondary" className="capitalize">{book.condition}</Badge>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                         <span className="text-sm text-muted-foreground">Location</span>
                         <span className="text-sm font-semibold">{book.location}</span>
                      </div>
                   </CardContent>
                </Card>

                <Button className="w-full mt-6 gap-2" size="lg" disabled={book.availableCopies === 0}>
                   {book.availableCopies > 0 ? 'Request to Borrow' : 'Currently Unavailable'}
                </Button>
              </div>

              {/* Right: Book Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {book.category.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5 ml-auto">
                       <MapPin className="h-3.5 w-3.5" />
                       Located at {mosque.name}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground">{book.title}</h1>
                  <p className="text-xl text-muted-foreground mt-2">by {book.author}</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                       <Info className="h-5 w-5 text-primary" />
                       Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg italic">
                      {book.description || "No description available for this book."}
                    </p>
                  </CardContent>
                </Card>

                <div className="grid gap-4 sm:grid-cols-2">
                   <Card>
                      <CardContent className="p-4 flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Tag className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-xs text-muted-foreground">ISBN</p>
                            <p className="font-semibold">{book.isbn || 'N/A'}</p>
                         </div>
                      </CardContent>
                   </Card>
                   <Card>
                      <CardContent className="p-4 flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Globe className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-xs text-muted-foreground">Language</p>
                            <p className="font-semibold">{book.language}</p>
                         </div>
                      </CardContent>
                   </Card>
                   <Card>
                      <CardContent className="p-4 flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Calendar className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-xs text-muted-foreground">Added On</p>
                            <p className="font-semibold">{new Date(book.createdAt).toLocaleDateString()}</p>
                         </div>
                      </CardContent>
                   </Card>
                   <Card>
                      <CardContent className="p-4 flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <User className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-xs text-muted-foreground">Contributed By</p>
                            <p className="font-semibold">{book.addedByName}</p>
                         </div>
                      </CardContent>
                   </Card>
                </div>
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
