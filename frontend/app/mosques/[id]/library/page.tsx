import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, LibraryBook } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Book, ChevronLeft, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface MosqueLibraryPageProps {
  params: Promise<{ id: string }>
}

export default async function MosqueLibraryPage({ params }: MosqueLibraryPageProps) {
  const { id } = await params

  try {
    const [mosque, books] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<LibraryBook[]>(`/mosques/${id}/books`)
    ])

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

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">{mosque.name} Library</h1>
                <p className="mt-2 text-muted-foreground">Browse the collection of books available at our mosque.</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search in this library..."
                  className="pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {books.length === 0 ? (
                <div className="col-span-full py-12 text-center bg-muted/30 rounded-xl">
                  <Book className="h-12 w-12 mx-auto text-muted-foreground/30" />
                  <p className="mt-4 text-muted-foreground">This mosque library hasn't added any books yet.</p>
                </div>
              ) : (
                books.map((book) => (
                  <Card key={book.id} className="overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[3/4] relative bg-muted">
                      {book.coverImageUrl ? (
                         <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover" />
                      ) : (
                         <div className="absolute inset-0 flex items-center justify-center">
                            <Book className="h-10 w-10 text-muted-foreground/20" />
                         </div>
                      )}
                      <div className="absolute top-2 right-2">
                         <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            {book.category}
                         </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4 flex-1">
                      <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/mosques/${id}/library/${book.id}`}>View Details</Link>
                      </Button>
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
