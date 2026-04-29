import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Results",
  description: "View your academic results and performance.",
}

const results = {
  "Term 1 2026": [
    { subject: "Mathematics", cat1: 18, cat2: 19, exam: 65, total: 85, grade: "A" },
    { subject: "English", cat1: 16, cat2: 17, exam: 60, total: 80, grade: "A-" },
    { subject: "Kiswahili", cat1: 15, cat2: 16, exam: 58, total: 75, grade: "B+" },
    { subject: "Biology", cat1: 17, cat2: 18, exam: 62, total: 82, grade: "A-" },
    { subject: "Chemistry", cat1: 18, cat2: 19, exam: 68, total: 88, grade: "A" },
    { subject: "Physics", cat1: 16, cat2: 17, exam: 55, total: 72, grade: "B+" },
    { subject: "History", cat1: 17, cat2: 16, exam: 60, total: 78, grade: "B+" },
    { subject: "Geography", cat1: 15, cat2: 18, exam: 58, total: 76, grade: "B+" },
  ],
  "Term 3 2025": [
    { subject: "Mathematics", cat1: 17, cat2: 18, exam: 62, total: 82, grade: "A-" },
    { subject: "English", cat1: 15, cat2: 16, exam: 58, total: 76, grade: "B+" },
    { subject: "Kiswahili", cat1: 14, cat2: 15, exam: 55, total: 70, grade: "B" },
    { subject: "Biology", cat1: 16, cat2: 17, exam: 60, total: 78, grade: "B+" },
    { subject: "Chemistry", cat1: 17, cat2: 18, exam: 65, total: 85, grade: "A" },
    { subject: "Physics", cat1: 15, cat2: 16, exam: 52, total: 68, grade: "B" },
    { subject: "History", cat1: 16, cat2: 15, exam: 58, total: 75, grade: "B+" },
    { subject: "Geography", cat1: 14, cat2: 17, exam: 55, total: 72, grade: "B+" },
  ],
}

function getGradeColor(grade: string) {
  if (grade.startsWith("A")) return "bg-primary"
  if (grade.startsWith("B")) return "bg-accent text-accent-foreground"
  if (grade.startsWith("C")) return "bg-secondary"
  return "bg-muted"
}

export default function ResultsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Results</h1>
        <p className="text-muted-foreground">
          View your academic performance across all terms.
        </p>
      </div>

      <Tabs defaultValue="Term 1 2026" className="w-full">
        <TabsList>
          {Object.keys(results).map((term) => (
            <TabsTrigger key={term} value={term}>
              {term}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(results).map(([term, termResults]) => {
          const totalMarks = termResults.reduce((sum, r) => sum + r.total, 0)
          const average = (totalMarks / termResults.length).toFixed(1)
          const totalPoints = termResults.length * 100
          
          return (
            <TabsContent key={term} value={term}>
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground">Total Marks</p>
                      <p className="text-3xl font-bold text-foreground">
                        {totalMarks}/{totalPoints}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground">Average</p>
                      <p className="text-3xl font-bold text-foreground">
                        {average}%
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground">Mean Grade</p>
                      <p className="text-3xl font-bold text-primary">B+</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Results Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>{term} Results</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                              Subject
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                              CAT 1 (20)
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                              CAT 2 (20)
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                              Exam (60)
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                              Total (100)
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                              Grade
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {termResults.map((result) => (
                            <tr key={result.subject}>
                              <td className="px-6 py-4 font-medium text-foreground">
                                {result.subject}
                              </td>
                              <td className="px-6 py-4 text-center text-muted-foreground">
                                {result.cat1}
                              </td>
                              <td className="px-6 py-4 text-center text-muted-foreground">
                                {result.cat2}
                              </td>
                              <td className="px-6 py-4 text-center text-muted-foreground">
                                {result.exam}
                              </td>
                              <td className="px-6 py-4 text-center font-medium text-foreground">
                                {result.total}
                              </td>
                              <td className="px-6 py-4 text-center">
                                <Badge className={getGradeColor(result.grade)}>
                                  {result.grade}
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
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
