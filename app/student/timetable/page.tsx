import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Timetable",
  description: "View your class timetable.",
}

const timetable = {
  Monday: [
    { time: "7:30 - 8:10", subject: "Mathematics", teacher: "Mrs. Njeri", room: "Lab 1" },
    { time: "8:10 - 8:50", subject: "English", teacher: "Ms. Otieno", room: "Room 12" },
    { time: "8:50 - 9:30", subject: "Kiswahili", teacher: "Mr. Kamau", room: "Room 12" },
    { time: "9:30 - 10:00", subject: "Break", teacher: "", room: "" },
    { time: "10:00 - 10:40", subject: "Biology", teacher: "Dr. Wanjiku", room: "Lab 2" },
    { time: "10:40 - 11:20", subject: "Chemistry", teacher: "Mr. Ochieng", room: "Lab 3" },
    { time: "11:20 - 12:00", subject: "Physics", teacher: "Mrs. Akinyi", room: "Lab 1" },
    { time: "12:00 - 1:00", subject: "Lunch", teacher: "", room: "" },
    { time: "1:00 - 1:40", subject: "History", teacher: "Mr. Mwangi", room: "Room 15" },
    { time: "1:40 - 2:20", subject: "Geography", teacher: "Ms. Chebet", room: "Room 15" },
    { time: "2:20 - 3:00", subject: "Games", teacher: "Coach Nyambura", room: "Field" },
  ],
  Tuesday: [
    { time: "7:30 - 8:10", subject: "Biology", teacher: "Dr. Wanjiku", room: "Lab 2" },
    { time: "8:10 - 8:50", subject: "Chemistry", teacher: "Mr. Ochieng", room: "Lab 3" },
    { time: "8:50 - 9:30", subject: "Mathematics", teacher: "Mrs. Njeri", room: "Room 12" },
    { time: "9:30 - 10:00", subject: "Break", teacher: "", room: "" },
    { time: "10:00 - 10:40", subject: "English", teacher: "Ms. Otieno", room: "Room 12" },
    { time: "10:40 - 11:20", subject: "Kiswahili", teacher: "Mr. Kamau", room: "Room 12" },
    { time: "11:20 - 12:00", subject: "CRE", teacher: "Mrs. Mutua", room: "Room 18" },
    { time: "12:00 - 1:00", subject: "Lunch", teacher: "", room: "" },
    { time: "1:00 - 1:40", subject: "Physics", teacher: "Mrs. Akinyi", room: "Lab 1" },
    { time: "1:40 - 2:20", subject: "Computer", teacher: "Mr. Kiprop", room: "ICT Lab" },
    { time: "2:20 - 3:00", subject: "Library", teacher: "", room: "Library" },
  ],
  Wednesday: [
    { time: "7:30 - 8:10", subject: "English", teacher: "Ms. Otieno", room: "Room 12" },
    { time: "8:10 - 8:50", subject: "Mathematics", teacher: "Mrs. Njeri", room: "Room 12" },
    { time: "8:50 - 9:30", subject: "Chemistry", teacher: "Mr. Ochieng", room: "Lab 3" },
    { time: "9:30 - 10:00", subject: "Break", teacher: "", room: "" },
    { time: "10:00 - 10:40", subject: "Biology", teacher: "Dr. Wanjiku", room: "Lab 2" },
    { time: "10:40 - 11:20", subject: "History", teacher: "Mr. Mwangi", room: "Room 15" },
    { time: "11:20 - 12:00", subject: "Geography", teacher: "Ms. Chebet", room: "Room 15" },
    { time: "12:00 - 1:00", subject: "Lunch", teacher: "", room: "" },
    { time: "1:00 - 1:40", subject: "Kiswahili", teacher: "Mr. Kamau", room: "Room 12" },
    { time: "1:40 - 2:20", subject: "Physics", teacher: "Mrs. Akinyi", room: "Lab 1" },
    { time: "2:20 - 3:00", subject: "Club Activities", teacher: "", room: "Various" },
  ],
  Thursday: [
    { time: "7:30 - 8:10", subject: "Physics", teacher: "Mrs. Akinyi", room: "Lab 1" },
    { time: "8:10 - 8:50", subject: "Chemistry", teacher: "Mr. Ochieng", room: "Lab 3" },
    { time: "8:50 - 9:30", subject: "Biology", teacher: "Dr. Wanjiku", room: "Lab 2" },
    { time: "9:30 - 10:00", subject: "Break", teacher: "", room: "" },
    { time: "10:00 - 10:40", subject: "Mathematics", teacher: "Mrs. Njeri", room: "Room 12" },
    { time: "10:40 - 11:20", subject: "English", teacher: "Ms. Otieno", room: "Room 12" },
    { time: "11:20 - 12:00", subject: "Kiswahili", teacher: "Mr. Kamau", room: "Room 12" },
    { time: "12:00 - 1:00", subject: "Lunch", teacher: "", room: "" },
    { time: "1:00 - 1:40", subject: "Geography", teacher: "Ms. Chebet", room: "Room 15" },
    { time: "1:40 - 2:20", subject: "CRE", teacher: "Mrs. Mutua", room: "Room 18" },
    { time: "2:20 - 3:00", subject: "Games", teacher: "Coach Nyambura", room: "Field" },
  ],
  Friday: [
    { time: "7:30 - 8:10", subject: "Kiswahili", teacher: "Mr. Kamau", room: "Room 12" },
    { time: "8:10 - 8:50", subject: "English", teacher: "Ms. Otieno", room: "Room 12" },
    { time: "8:50 - 9:30", subject: "Mathematics", teacher: "Mrs. Njeri", room: "Room 12" },
    { time: "9:30 - 10:00", subject: "Break", teacher: "", room: "" },
    { time: "10:00 - 10:40", subject: "History", teacher: "Mr. Mwangi", room: "Room 15" },
    { time: "10:40 - 11:20", subject: "Biology", teacher: "Dr. Wanjiku", room: "Lab 2" },
    { time: "11:20 - 12:00", subject: "Chemistry", teacher: "Mr. Ochieng", room: "Lab 3" },
    { time: "12:00 - 1:00", subject: "Lunch", teacher: "", room: "" },
    { time: "1:00 - 1:40", subject: "Physics", teacher: "Mrs. Akinyi", room: "Lab 1" },
    { time: "1:40 - 2:20", subject: "Computer", teacher: "Mr. Kiprop", room: "ICT Lab" },
    { time: "2:20 - 3:00", subject: "Assembly/Depart", teacher: "", room: "Hall" },
  ],
}

function getSubjectColor(subject: string) {
  if (subject === "Break" || subject === "Lunch") return "bg-muted text-muted-foreground"
  if (subject.includes("Mathematics")) return "bg-blue-100 text-blue-800"
  if (subject.includes("English")) return "bg-green-100 text-green-800"
  if (subject.includes("Biology") || subject.includes("Chemistry") || subject.includes("Physics")) return "bg-purple-100 text-purple-800"
  if (subject.includes("Games") || subject.includes("Club")) return "bg-orange-100 text-orange-800"
  return "bg-accent text-accent-foreground"
}

export default function TimetablePage() {
  const days = Object.keys(timetable) as (keyof typeof timetable)[]
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }) as keyof typeof timetable

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Class Timetable</h1>
        <p className="text-muted-foreground">
          Form 3A - Academic Year 2026
        </p>
      </div>

      {/* Today's Schedule */}
      {timetable[today] && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Today&apos;s Schedule
              <Badge className="bg-primary">{today}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {timetable[today].map((slot, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg p-3 ${getSubjectColor(slot.subject)}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-24 text-sm font-medium">{slot.time}</span>
                    <span className="font-semibold">{slot.subject}</span>
                  </div>
                  {slot.teacher && (
                    <div className="text-right text-sm">
                      <p>{slot.teacher}</p>
                      <p className="opacity-70">{slot.room}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Full Week Timetable */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Timetable</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Time
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className={`px-4 py-3 text-left text-sm font-semibold ${
                        day === today ? "bg-primary text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {timetable.Monday.map((_, timeIndex) => (
                  <tr key={timeIndex}>
                    <td className="px-4 py-2 text-sm text-muted-foreground whitespace-nowrap">
                      {timetable.Monday[timeIndex].time}
                    </td>
                    {days.map((day) => {
                      const slot = timetable[day][timeIndex]
                      return (
                        <td key={day} className="px-4 py-2">
                          <div className={`rounded p-2 text-xs ${getSubjectColor(slot.subject)}`}>
                            <p className="font-medium">{slot.subject}</p>
                            {slot.room && (
                              <p className="opacity-70">{slot.room}</p>
                            )}
                          </div>
                        </td>
                      )
                    })}
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
