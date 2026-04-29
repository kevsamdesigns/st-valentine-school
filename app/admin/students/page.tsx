import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Download, Upload } from "lucide-react"

export const metadata: Metadata = {
  title: "Students Management",
  description: "Manage student records and information.",
}

const students = [
  { id: 1, name: "Mary Wanjiku", admNo: "STD-2024-001", class: "Form 3A", parent: "Mrs. Wanjiku", fee: 15000, status: "active" },
  { id: 2, name: "Grace Achieng", admNo: "STD-2024-002", class: "Form 3A", parent: "Mr. Achieng", fee: 0, status: "active" },
  { id: 3, name: "Faith Muthoni", admNo: "STD-2024-003", class: "Form 2B", parent: "Mrs. Muthoni", fee: 25000, status: "active" },
  { id: 4, name: "Joy Njeri", admNo: "STD-2024-004", class: "Form 4A", parent: "Mr. Njeri", fee: 5000, status: "active" },
  { id: 5, name: "Hope Chebet", admNo: "STD-2024-005", class: "Form 1C", parent: "Mrs. Chebet", fee: 0, status: "active" },
]

export default function AdminStudentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students Management</h1>
          <p className="text-muted-foreground">
            View and manage all student records.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search students..." className="pl-10" />
        </div>
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Students ({students.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Adm. No.</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Class</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Parent</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Fee Balance</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-medium text-foreground">{student.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{student.admNo}</td>
                    <td className="px-6 py-4 text-muted-foreground">{student.class}</td>
                    <td className="px-6 py-4 text-muted-foreground">{student.parent}</td>
                    <td className="px-6 py-4">
                      <span className={student.fee > 0 ? "text-destructive font-medium" : "text-primary"}>
                        KES {student.fee.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="capitalize bg-primary/10 text-primary">
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm">Edit</Button>
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
