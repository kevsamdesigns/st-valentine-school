import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Announcements",
  description: "Manage school announcements.",
}

const announcements = [
  { 
    id: 1, 
    title: "End of Term Examinations", 
    category: "academic", 
    audience: "all", 
    published: true, 
    date: "Apr 25, 2026" 
  },
  { 
    id: 2, 
    title: "Sports Day Schedule", 
    category: "event", 
    audience: "students", 
    published: true, 
    date: "Apr 20, 2026" 
  },
  { 
    id: 3, 
    title: "Parent-Teacher Meeting", 
    category: "general", 
    audience: "parents", 
    published: false, 
    date: "Apr 15, 2026" 
  },
]

export default function AdminAnnouncementsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Announcements</h1>
          <p className="text-muted-foreground">
            Create and manage school announcements.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Announcement
        </Button>
      </div>

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <CardTitle>All Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{announcement.title}</h3>
                    <Badge variant={announcement.published ? "default" : "secondary"}>
                      {announcement.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="capitalize">{announcement.category}</Badge>
                    <Badge variant="outline" className="capitalize">To: {announcement.audience}</Badge>
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
