"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, XCircle, Clock } from "lucide-react"
import { toast } from "sonner"

const students = [
  { id: 1, name: "Mary Wanjiku", admNo: "STD-2024-001" },
  { id: 2, name: "Grace Achieng", admNo: "STD-2024-002" },
  { id: 3, name: "Faith Muthoni", admNo: "STD-2024-003" },
  { id: 4, name: "Joy Njeri", admNo: "STD-2024-004" },
  { id: 5, name: "Hope Chebet", admNo: "STD-2024-005" },
  { id: 6, name: "Peace Otieno", admNo: "STD-2024-006" },
  { id: 7, name: "Mercy Kamau", admNo: "STD-2024-007" },
  { id: 8, name: "Ruth Omondi", admNo: "STD-2024-008" },
]

type AttendanceStatus = "present" | "absent" | "late"

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState("3A")
  const [attendance, setAttendance] = useState<Record<number, AttendanceStatus>>({})

  const handleMarkAttendance = (studentId: number, status: AttendanceStatus) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }))
  }

  const handleSubmit = () => {
    const markedCount = Object.keys(attendance).length
    if (markedCount < students.length) {
      toast.error("Please mark attendance for all students")
      return
    }
    toast.success("Attendance submitted successfully!")
  }

  const getStatusIcon = (status?: AttendanceStatus) => {
    switch (status) {
      case "present":
        return <CheckCircle2 className="h-5 w-5 text-primary" />
      case "absent":
        return <XCircle className="h-5 w-5 text-destructive" />
      case "late":
        return <Clock className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mark Attendance</h1>
          <p className="text-muted-foreground">
            Record daily attendance for your class.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3A">Form 3A</SelectItem>
              <SelectItem value="3B">Form 3B</SelectItem>
              <SelectItem value="4A">Form 4A</SelectItem>
            </SelectContent>
          </Select>
          <Badge variant="outline">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Badge>
        </div>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{students.length}</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">
              {Object.values(attendance).filter((s) => s === "present").length}
            </p>
            <p className="text-sm text-muted-foreground">Present</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-destructive">
              {Object.values(attendance).filter((s) => s === "absent").length}
            </p>
            <p className="text-sm text-muted-foreground">Absent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-500">
              {Object.values(attendance).filter((s) => s === "late").length}
            </p>
            <p className="text-sm text-muted-foreground">Late</p>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Form {selectedClass} - Attendance</CardTitle>
          <Button onClick={handleSubmit}>Submit Attendance</Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Adm. No.
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                    Mark Attendance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 font-medium text-foreground">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {student.admNo}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {getStatusIcon(attendance[student.id])}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          variant={attendance[student.id] === "present" ? "default" : "outline"}
                          className={attendance[student.id] === "present" ? "bg-primary" : ""}
                          onClick={() => handleMarkAttendance(student.id, "present")}
                        >
                          Present
                        </Button>
                        <Button
                          size="sm"
                          variant={attendance[student.id] === "absent" ? "destructive" : "outline"}
                          onClick={() => handleMarkAttendance(student.id, "absent")}
                        >
                          Absent
                        </Button>
                        <Button
                          size="sm"
                          variant={attendance[student.id] === "late" ? "secondary" : "outline"}
                          onClick={() => handleMarkAttendance(student.id, "late")}
                        >
                          Late
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
