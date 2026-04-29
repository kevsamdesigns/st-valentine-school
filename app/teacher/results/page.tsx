import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Results",
  description: "Upload and manage student results.",
}

const pendingUploads = [
  { class: "Form 3A", exam: "CAT 2", deadline: "May 10, 2026", status: "pending" },
  { class: "Form 3B", exam: "CAT 2", deadline: "May 10, 2026", status: "pending" },
  { class: "Form 4A", exam: "CAT 2", deadline: "May 10, 2026", status: "uploaded" },
]

export default function ResultsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Results Management</h1>
          <p className="text-muted-foreground">
            Upload and manage student exam results.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Template
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Results
          </Button>
        </div>
      </div>

      {/* Pending Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Uploads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingUploads.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <p className="font-medium text-foreground">
                    {item.class} - {item.exam}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Deadline: {item.deadline}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={item.status === "uploaded" ? "default" : "destructive"}
                    className={item.status === "uploaded" ? "bg-primary" : ""}
                  >
                    {item.status === "uploaded" ? "Uploaded" : "Pending"}
                  </Badge>
                  {item.status === "pending" && (
                    <Button size="sm">Upload</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Download the results template for your class</li>
            <li>Fill in the student marks in the appropriate columns</li>
            <li>Save the file in CSV or Excel format</li>
            <li>Click &ldquo;Upload Results&rdquo; and select your file</li>
            <li>Review the preview and confirm the upload</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
