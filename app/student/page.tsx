import { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, DollarSign, Calendar, Award, TrendingUp, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student portal dashboard - View your results, fees, and timetable.",
}

const recentResults = [
  { subject: "Mathematics", grade: "A", marks: 85 },
  { subject: "English", grade: "A-", marks: 80 },
  { subject: "Biology", grade: "B+", marks: 75 },
  { subject: "Chemistry", grade: "A", marks: 88 },
]

const upcomingEvents = [
  { title: "End of Term Exams", date: "May 15, 2026", type: "exam" },
  { title: "Sports Day", date: "May 20, 2026", type: "event" },
  { title: "Parent Meeting", date: "May 25, 2026", type: "meeting" },
]

export default async function StudentDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const firstName = user?.user_metadata?.first_name || "Student"

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, {firstName}!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s an overview of your academic progress.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Average</p>
                <p className="text-2xl font-bold text-foreground">B+</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-destructive/10 p-3">
                <DollarSign className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fee Balance</p>
                <p className="text-2xl font-bold text-foreground">KES 15,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-accent p-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Class Position</p>
                <p className="text-2xl font-bold text-foreground">5th / 80</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary/20 p-3">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Attendance</p>
                <p className="text-2xl font-bold text-foreground">95%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResults.map((result) => (
                <div
                  key={result.subject}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{result.subject}</p>
                    <p className="text-sm text-muted-foreground">{result.marks}%</p>
                  </div>
                  <Badge className="bg-primary">{result.grade}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Announcements */}
      <Card>
        <CardHeader>
          <CardTitle>Latest Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg bg-accent/50 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    End of Term Examinations Schedule
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The end of term examinations will begin on May 15th. Please ensure 
                    you have cleared all outstanding fees before the exams.
                  </p>
                </div>
                <Badge variant="destructive">Important</Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Posted 2 days ago</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Library Hours Extended
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The library will now be open until 8:00 PM on weekdays to support 
                    your revision.
                  </p>
                </div>
                <Badge variant="secondary">General</Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Posted 5 days ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
