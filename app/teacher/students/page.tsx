import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Students",
  description: "View and manage students in your classes.",
}

const students = [
  { id: 1, name: "Mary Wanjiku", admNo: "STD-2024-001", class: "Form 3A", average: "B+", status: "active" },
  { id: 2, name: "Grace Achieng", admNo: "STD-2024-002", class: "Form 3A", average: "A-", status: "active" },
  { id: 3, name: "Faith Muthoni", admNo: "STD-2024-003", class: "Form 3A", average: "B", status: "active" },
  { id: 4, name: "Joy Njeri", admNo: "STD-2024-004", class: "Form 3B", average: "A", status: "active" },
  { id: 5, name: "Hope Chebet", admNo: "STD-2024-005", class: "Form 3B", average: "B+", status: "active" },
  { id: 6, name: "Peace Otieno", admNo: "STD-2024-006", class: "Form 4A", average: "A-", status: "active" },
  { id: 7, name: "Mercy Kamau", admNo: "STD-2024-007", class: "Form 4A", average: "B+", status: "active" },
  { id: 8, name: "Ruth Omondi", admNo: "STD-2024-008", class: "Form 3A", average: "B", status: "active" },
]

export default function StudentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Students</h1>
        <p className="text-muted-foreground">
          View and manage students in your assigned classes.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search students..." className="pl-10" />
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Students List</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Adm. No.
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Average
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-medium text-foreground">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {student.admNo}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {student.class}
                    </td>
                    <td className="px-6 py-4">
                      <Badge className="bg-primary">{student.average}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="capitalize">
                        {student.status}
                      </Badge>
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
