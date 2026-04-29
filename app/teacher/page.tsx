import { Metadata } from "next"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, FileText, ClipboardCheck, Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Teacher Dashboard",
  description: "Teacher portal - Manage students, results, and attendance.",
}

const myClasses = [
  { name: "Form 3A", subject: "Mathematics", students: 45 },
  { name: "Form 3B", subject: "Mathematics", students: 42 },
  { name: "Form 4A", subject: "Mathematics", students: 40 },
]

const recentActivity = [
  { action: "Uploaded results", class: "Form 3A", time: "2 hours ago" },
  { action: "Marked attendance", class: "Form 4A", time: "4 hours ago" },
  { action: "Updated grades", class: "Form 3B", time: "Yesterday" },
]

export default async function TeacherDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const firstName = user?.user_metadata?.first_name || "Teacher"

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome, {firstName}!
        </h1>
        <p className="text-muted-foreground">
          Manage your classes, students, and academic records.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-foreground">127</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary/20 p-3">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Classes</p>
                <p className="text-2xl font-bold text-foreground">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-accent p-3">
                <ClipboardCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Attendance Today</p>
                <p className="text-2xl font-bold text-foreground">95%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-destructive/10 p-3">
                <Calendar className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
                <p className="text-2xl font-bold text-foreground">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* My Classes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>My Classes</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/teacher/students">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myClasses.map((cls) => (
                <div
                  key={cls.name}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <p className="font-medium text-foreground">{cls.name}</p>
                    <p className="text-sm text-muted-foreground">{cls.subject}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{cls.students} students</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.class}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <Button className="h-auto flex-col gap-2 py-6" asChild>
              <Link href="/teacher/attendance">
                <ClipboardCheck className="h-6 w-6" />
                Mark Attendance
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-6" asChild>
              <Link href="/teacher/results">
                <FileText className="h-6 w-6" />
                Upload Results
              </Link>
            </Button>
            <Button variant="secondary" className="h-auto flex-col gap-2 py-6" asChild>
              <Link href="/teacher/students">
                <Users className="h-6 w-6" />
                View Students
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
