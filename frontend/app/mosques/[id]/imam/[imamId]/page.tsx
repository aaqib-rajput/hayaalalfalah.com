import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImamDetailView } from '@/components/mosques/imam-detail-view'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, Imam } from '@/lib/types'

interface ImamPageProps {
  params: Promise<{ id: string; imamId: string }>
}

export async function generateMetadata({ params }: ImamPageProps) {
  const { id, imamId } = await params
  try {
    const [mosque, imam] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<Imam>(`/imams/${imamId}`)
    ])
    
    return {
      title: `${imam.name} - ${imam.title} | ${mosque.name} | MosqueConnect`,
      description: imam.biography.substring(0, 160),
    }
  } catch (error) {
    return {
      title: 'Imam | MosqueConnect',
    }
  }
}

export default async function ImamPage({ params }: ImamPageProps) {
  const { id, imamId } = await params
  
  try {
    const [mosque, imam] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<Imam>(`/imams/${imamId}`)
    ])

    if (imam.mosqueId !== id) {
      notFound()
    }

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ImamDetailView imam={imam} mosque={mosque} />
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}
