import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers Management",
  description: "Manage job postings and applications.",
}

const jobs = [
  { id: 1, title: "Mathematics Teacher", department: "Academics", applications: 12, deadline: "May 15, 2026", active: true },
  { id: 2, title: "Science Lab Technician", department: "Sciences", applications: 8, deadline: "May 20, 2026", active: true },
  { id: 3, title: "School Nurse", department: "Health", applications: 5, deadline: "May 25, 2026", active: true },
  { id: 4, title: "IT Support", department: "ICT", applications: 15, deadline: "Jun 1, 2026", active: true },
]

export default function AdminCareersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Careers Management</h1>
          <p className="text-muted-foreground">
            Manage job postings and review applications.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-foreground">{jobs.length}</p>
            <p className="text-sm text-muted-foreground">Active Postings</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-primary">
              {jobs.reduce((sum, job) => sum + job.applications, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Total Applications</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-destructive">8</p>
            <p className="text-sm text-muted-foreground">Pending Review</p>
          </CardContent>
        </Card>
      </div>

      {/* Job Postings */}
      <Card>
        <CardHeader>
          <CardTitle>Job Postings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Position</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Applications</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Deadline</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-medium text-foreground">{job.title}</td>
                    <td className="px-6 py-4 text-muted-foreground">{job.department}</td>
                    <td className="px-6 py-4">
                      <Badge className="bg-primary">{job.applications}</Badge>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{job.deadline}</td>
                    <td className="px-6 py-4">
                      <Badge variant={job.active ? "default" : "secondary"}>
                        {job.active ? "Active" : "Closed"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
