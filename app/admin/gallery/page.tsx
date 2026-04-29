import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery Management",
  description: "Manage school photo gallery.",
}

const images = [
  { id: 1, title: "Sports Day 2026", category: "Sports", count: 45 },
  { id: 2, title: "Science Fair", category: "Academics", count: 32 },
  { id: 3, title: "Cultural Day", category: "Events", count: 58 },
  { id: 4, title: "Campus Views", category: "Campus", count: 24 },
]

export default function AdminGalleryPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gallery Management</h1>
          <p className="text-muted-foreground">
            Upload and manage school photos.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload Images
        </Button>
      </div>

      {/* Albums */}
      <Card>
        <CardHeader>
          <CardTitle>Photo Albums</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((album) => (
              <div
                key={album.id}
                className="group relative rounded-lg border overflow-hidden"
              >
                <div className="h-32 bg-muted" />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{album.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <Badge variant="outline">{album.category}</Badge>
                    <span className="text-sm text-muted-foreground">{album.count} photos</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
