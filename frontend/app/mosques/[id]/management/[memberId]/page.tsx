import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ManagementMemberDetailView } from '@/components/mosques/management-member-detail-view'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, ManagementMember } from '@/lib/types'

interface PageProps {
  params: Promise<{
    id: string
    memberId: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id, memberId } = await params
  try {
    const [mosque, member] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<ManagementMember>(`/management/${memberId}`)
    ])
    
    return {
      title: `${member.name} | ${mosque.name} Management | MosqueConnect`,
      description: member.personalStatement || `Learn more about ${member.name}'s role at ${mosque.name}.`,
    }
  } catch (error) {
    return {
      title: 'Management Member | MosqueConnect',
    }
  }
}

export default async function ManagementMemberPage({ params }: PageProps) {
  const { id, memberId } = await params
  
  try {
    const [mosque, member] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<ManagementMember>(`/management/${memberId}`)
    ])

    if (member.mosqueId !== id) {
      notFound()
    }

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ManagementMemberDetailView mosque={mosque} member={member} />
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}
