import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, DonationGoal } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Heart, Target, TrendingUp, Calendar, ChevronLeft, MapPin } from 'lucide-react'
import Link from 'next/link'

interface MosqueDonationsPageProps {
  params: Promise<{ id: string }>
}

export default async function MosqueDonationsPage({ params }: MosqueDonationsPageProps) {
  const { id } = await params

  try {
    const [mosque, goals] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<DonationGoal[]>(`/mosques/${id}/goals`)
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

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary fill-current" />
                Support {mosque.name}
              </h1>
              <p className="mt-2 text-muted-foreground">Contribute to our active projects and community initiatives.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {goals.length === 0 ? (
                <div className="col-span-full py-12 text-center bg-muted/30 rounded-xl border-2 border-dashed">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground/30" />
                  <p className="mt-4 text-muted-foreground">No active donation campaigns for this mosque right now.</p>
                </div>
              ) : (
                goals.map((goal) => {
                  const progress = (goal.currentAmount / goal.targetAmount) * 100
                  const remaining = goal.targetAmount - goal.currentAmount
                  const daysLeft = Math.ceil((new Date(goal.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

                  return (
                    <Card key={goal.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-primary/10">
                      <div className="h-2 bg-primary" style={{ width: `${Math.min(progress, 100)}%` }} />
                      <CardHeader>
                         <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="gap-1">
                               <Target className="h-3 w-3" />
                               {daysLeft > 0 ? `${daysLeft} days left` : 'Goal Reached'}
                            </Badge>
                            <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                               {progress.toFixed(0)}% Funded
                            </Badge>
                         </div>
                         <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            <Link href={`/mosques/${id}/donations/${goal.id}`}>{goal.title}</Link>
                         </CardTitle>
                         <CardDescription className="line-clamp-2 mt-2">{goal.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                         <div className="space-y-2">
                            <div className="flex justify-between text-sm font-bold">
                               <span className="text-primary">${goal.currentAmount.toLocaleString()}</span>
                               <span className="text-muted-foreground">of ${goal.targetAmount.toLocaleString()}</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                            <p className="text-xs text-muted-foreground text-center pt-1 font-medium">
                               ${remaining.toLocaleString()} more needed to reach our goal
                            </p>
                         </div>

                         <Button className="w-full gap-2 mt-4" asChild>
                            <Link href={`/mosques/${id}/donations/${goal.id}`}>
                               See Impact & Donate
                               <ChevronLeft className="h-4 w-4 rotate-180" />
                            </Link>
                         </Button>
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
  } catch (error) {
    notFound()
  }
}
