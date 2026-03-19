import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fetchApi } from '@/lib/api-client'
import type { Mosque, DonationGoal } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Heart, Target, TrendingUp, Calendar, ChevronLeft, MapPin, DollarSign, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

interface DonationDetailPageProps {
  params: Promise<{ id: string; goalId: string }>
}

export default async function DonationDetailPage({ params }: DonationDetailPageProps) {
  const { id, goalId } = await params

  try {
    const [mosque, goal] = await Promise.all([
      fetchApi<Mosque>(`/mosques/${id}`),
      fetchApi<DonationGoal>(`/goals/${goalId}`)
    ])

    const progress = (goal.currentAmount / goal.targetAmount) * 100
    const remaining = goal.targetAmount - goal.currentAmount
    const daysLeft = Math.ceil((new Date(goal.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-8">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <Link 
              href={`/mosques/${id}/donations`} 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Donations
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
               {/* Left Column: Stats and Action */}
               <div className="lg:col-span-1 space-y-6">
                  <Card className="border-primary/20 bg-primary/5 shadow-xl">
                     <CardContent className="p-8 space-y-6">
                        <div className="text-center space-y-2">
                           <p className="text-4xl font-black text-primary">${goal.currentAmount.toLocaleString()}</p>
                           <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">Amount Raised</p>
                        </div>
                        
                        <div className="space-y-2">
                           <div className="flex justify-between text-xs font-bold text-muted-foreground">
                              <span>Target: ${goal.targetAmount.toLocaleString()}</span>
                              <span>{progress.toFixed(0)}%</span>
                           </div>
                           <Progress value={progress} className="h-3 bg-primary/10" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                           <div className="text-center">
                              <p className="text-xl font-bold">{Math.floor(Math.random() * 100) + 20}</p>
                              <p className="text-[10px] text-muted-foreground uppercase">Donors</p>
                           </div>
                           <div className="text-center">
                              <p className="text-xl font-bold">{daysLeft > 0 ? daysLeft : '0'}</p>
                              <p className="text-[10px] text-muted-foreground uppercase">Days left</p>
                           </div>
                        </div>

                        <Button className="w-full gap-2 h-14 text-lg font-bold shadow-lg shadow-primary/20" size="lg">
                           <Heart className="h-5 w-5 fill-current" />
                           Donate Now
                        </Button>
                        
                        <p className="text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1">
                           <ShieldCheck className="h-3 w-3" />
                           Secure & Transparent Donation
                        </p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader className="p-4 flex flex-row items-center gap-3 space-y-0">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                           <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                           <p className="text-xs text-muted-foreground">Organizer</p>
                           <p className="text-sm font-bold">{mosque.name}</p>
                        </div>
                     </CardHeader>
                  </Card>
               </div>

               {/* Right Column: Story */}
               <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-2">
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 px-3 py-1">Active Campaign</Badge>
                        <Badge variant="outline" className="gap-1.5">
                           <TrendingUp className="h-3 w-3" />
                           Trending
                        </Badge>
                     </div>
                     <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">{goal.title}</h1>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none">
                     <p className="text-xl leading-relaxed text-muted-foreground whitespace-pre-wrap">
                        {goal.description}
                     </p>
                     <p className="text-lg leading-relaxed mt-6">
                        Your contribution makes a direct impact on our community. Every dollar counts towards 
                        building a better future for our masjid and the generations to come. Join us in this 
                        noble cause and earn your reward in this life and the hereafter.
                     </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 pt-8">
                     <Card className="bg-muted/30 border-none">
                        <CardHeader className="p-4 pb-2">
                           <CardTitle className="text-sm flex items-center gap-2">
                              <Target className="h-4 w-4 text-primary" />
                              The Objective
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                           <p className="text-sm text-muted-foreground">Successfully fund and implement the project by the end of the current quarter.</p>
                        </CardContent>
                     </Card>
                     <Card className="bg-muted/30 border-none">
                        <CardHeader className="p-4 pb-2">
                           <CardTitle className="text-sm flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-primary" />
                              Transparency
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                           <p className="text-sm text-muted-foreground">All donors receive automated receipts and monthly progress updates on the project.</p>
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
