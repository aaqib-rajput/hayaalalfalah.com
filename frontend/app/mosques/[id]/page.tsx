import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MosqueDetail } from '@/components/mosques/mosque-detail'
import { fetchApi } from '@/lib/api-client'
import type { Mosque } from '@/lib/types'

interface MosquePageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: MosquePageProps) {
  const { id } = await params
  try {
    const mosque = await fetchApi<Mosque>(`/mosques/${id}`)
    return {
      title: `${mosque.name} | MosqueConnect`,
      description: mosque.description,
    }
  } catch (error) {
    return {
      title: 'Mosque | MosqueConnect',
    }
  }
}

export default async function MosquePage({ params }: MosquePageProps) {
  const { id } = await params
  
  let mosque: Mosque | null = null
  try {
    mosque = await fetchApi<Mosque>(`/mosques/${id}`)
  } catch (error) {
    notFound()
  }

  if (!mosque) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <MosqueDetail mosque={mosque} />
      </main>
      <Footer />
    </div>
  )
}
