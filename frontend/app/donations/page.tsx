import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { DonationGoal, Mosque } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Heart, Target, TrendingUp, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Donations | MosqueConnect',
  description: 'Support various causes and projects across our mosque network.',
}

export default async function GlobalDonationsPage() {
  const [goals, mosques] = await Promise.all([
    fetchApi<DonationGoal[]>('/finance/goals'),
    fetchApi<Mosque[]>('/mosques')
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Active Fundraising</h1>
            <p className="mt-2 text-muted-foreground">Support masjid projects and community initiatives across various locations.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goals.length === 0 ? (
              <div className="col-span-full py-12 text-center border-2 border-dashed rounded-xl">
                <Heart className="h-12 w-12 mx-auto text-muted-foreground/30" />
                <p className="mt-4 text-muted-foreground">No active donation campaigns at the moment.</p>
              </div>
            ) : (
              goals.map((goal) => {
                const mosque = mosques.find(m => m.id === goal.mosqueId)
                const progress = (goal.currentAmount / goal.targetAmount) * 100
                const daysLeft = Math.ceil((new Date(goal.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

                return (
                  <Card key={goal.id} className="overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 border-primary/10">
                    <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="gap-1 px-2 py-0">
                          <Target className="h-3 w-3" />
                          {daysLeft > 0 ? `${daysLeft} days left` : 'Ended'}
                        </Badge>
                        {mosque && (
                          <span className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                            <MapPin className="h-3 w-3" />
                            {mosque.city}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{goal.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{goal.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {mosque && (
                        <div className="mb-6 pb-4 border-b">
                           <p className="text-sm font-medium text-foreground">{mosque.name}</p>
                           <p className="text-xs text-muted-foreground">{mosque.address}</p>
                        </div>
                      )}
                      
                      <div className="space-y-4 mt-auto">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-2xl font-bold text-primary">${goal.currentAmount.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">Raised of ${goal.targetAmount.toLocaleString()}</p>
                          </div>
                          <p className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                            {progress.toFixed(0)}%
                          </p>
                        </div>
                        <Progress value={progress} className="h-2" />
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                           <span className="flex items-center gap-1">
                             <Calendar className="h-3 w-3" />
                             Ends: {new Date(goal.endDate).toLocaleDateString()}
                           </span>
                           <span className="flex items-center gap-1">
                             <TrendingUp className="h-3 w-3" />
                             {Math.floor(Math.random() * 50) + 10} contributors
                           </span>
                        </div>

                        <Button className="w-full gap-2 mt-4" asChild>
                          <Link href={`/mosques/${goal.mosqueId}/donations/${goal.id}`}>
                            Support This Cause
                            <Heart className="h-4 w-4 fill-current" />
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
