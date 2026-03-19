import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ManagementBodyView } from '@/components/mosques/management-body-view'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, ManagementMember } from '@/lib/types'

interface ManagementPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ManagementPageProps) {
  const { id } = await params
  try {
    const mosque = await fetchApi<Mosque>(`/mosques/${id}`)
    return {
      title: `Management Body | ${mosque.name} | MosqueConnect`,
      description: `Meet the management team and committee members of ${mosque.name}. Learn about their roles, responsibilities, and how to contact them.`,
    }
  } catch (error) {
    return {
      title: 'Management Body | MosqueConnect',
    }
  }
}

export default async function ManagementPage({ params }: ManagementPageProps) {
  const { id } = await params
  
  try {
    const [mosque, managementTeam] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<ManagementMember[]>(`/mosques/${id}/management`)
    ])

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ManagementBodyView mosque={mosque} team={managementTeam} />
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}
