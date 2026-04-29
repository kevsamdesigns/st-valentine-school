import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calculator, FlaskConical, Globe, Languages, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore our academic programs, departments, and curriculum at St. Valentine Girls Senior School.",
}

const departments = [
  {
    icon: Languages,
    name: "Languages",
    subjects: ["English", "Kiswahili", "French", "German"],
    description: "Our languages department focuses on developing strong communication skills and cultural awareness.",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    subjects: ["Pure Mathematics", "Applied Mathematics"],
    description: "We build strong analytical and problem-solving skills through our comprehensive math program.",
  },
  {
    icon: FlaskConical,
    name: "Sciences",
    subjects: ["Biology", "Chemistry", "Physics"],
    description: "State-of-the-art laboratories support hands-on learning in all science disciplines.",
  },
  {
    icon: Globe,
    name: "Humanities",
    subjects: ["History", "Geography", "CRE", "Business Studies"],
    description: "Our humanities program develops critical thinking and understanding of society.",
  },
  {
    icon: Palette,
    name: "Technical & Creative",
    subjects: ["Computer Studies", "Art & Design", "Home Science", "Agriculture"],
    description: "Practical skills and creativity are nurtured through our technical subjects.",
  },
]

const classes = [
  {
    name: "Form 1",
    streams: ["1A", "1B", "1C", "1D"],
    students: 320,
    focus: "Foundation building and orientation",
  },
  {
    name: "Form 2",
    streams: ["2A", "2B", "2C", "2D"],
    students: 300,
    focus: "Subject exploration and skills development",
  },
  {
    name: "Form 3",
    streams: ["3A", "3B", "3C", "3D"],
    students: 290,
    focus: "Subject specialization and career guidance",
  },
  {
    name: "Form 4",
    streams: ["4A", "4B", "4C", "4D"],
    students: 280,
    focus: "KCSE preparation and intensive revision",
  },
]

const achievements = [
  { year: "2025", meanGrade: "B+", topStudent: "A", universityAdmission: "94%" },
  { year: "2024", meanGrade: "B+", topStudent: "A", universityAdmission: "93%" },
  { year: "2023", meanGrade: "B", topStudent: "A", universityAdmission: "91%" },
  { year: "2022", meanGrade: "B", topStudent: "A-", universityAdmission: "90%" },
]

export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Academics
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Excellence in education through a comprehensive curriculum and dedicated teaching.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="departments" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3">
                <TabsTrigger value="departments">Departments</TabsTrigger>
                <TabsTrigger value="classes">Classes</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>

              {/* Departments Tab */}
              <TabsContent value="departments" id="departments">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-foreground">
                    Academic Departments
                  </h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground">
                    Our school is organized into specialized departments, each led by 
                    experienced educators committed to excellence.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {departments.map((dept) => (
                    <Card key={dept.name} className="h-full">
                      <CardHeader>
                        <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-3 w-fit">
                          <dept.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{dept.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                          {dept.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {dept.subjects.map((subject) => (
                            <Badge key={subject} variant="secondary">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Classes Tab */}
              <TabsContent value="classes">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-foreground">
                    Class Structure
                  </h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground">
                    Our students are organized into four forms, each with multiple 
                    streams to ensure personalized attention.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {classes.map((classInfo) => (
                    <Card key={classInfo.name}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl">{classInfo.name}</CardTitle>
                          <Badge className="bg-primary">{classInfo.students} Students</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground">Streams</p>
                          <div className="mt-2 flex gap-2">
                            {classInfo.streams.map((stream) => (
                              <Badge key={stream} variant="outline">
                                {stream}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Focus Area</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {classInfo.focus}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Results Tab */}
              <TabsContent value="results" id="results">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-foreground">
                    Academic Performance
                  </h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground">
                    Our consistent track record of excellence in KCSE examinations.
                  </p>
                </div>
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                              Year
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                              Mean Grade
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                              Top Student
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                              University Admission
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {achievements.map((achievement) => (
                            <tr key={achievement.year}>
                              <td className="px-6 py-4 text-sm font-medium text-foreground">
                                {achievement.year}
                              </td>
                              <td className="px-6 py-4">
                                <Badge className="bg-primary">{achievement.meanGrade}</Badge>
                              </td>
                              <td className="px-6 py-4">
                                <Badge variant="outline">{achievement.topStudent}</Badge>
                              </td>
                              <td className="px-6 py-4 text-sm text-muted-foreground">
                                {achievement.universityAdmission}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="bg-muted py-20" id="curriculum">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">Our Curriculum</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    St. Valentine Girls Senior School follows the Kenya National Curriculum 
                    prescribed by the Kenya Institute of Curriculum Development (KICD). Our 
                    curriculum is designed to provide a well-rounded education that prepares 
                    students for both national examinations and life beyond school.
                  </p>
                  <p>
                    We offer a wide range of subjects across all disciplines, allowing students 
                    to explore their interests while building a strong academic foundation. Our 
                    teaching methodology combines traditional instruction with modern, 
                    interactive learning approaches.
                  </p>
                  <p>
                    In addition to the core curriculum, we provide enrichment programs, 
                    remedial classes, and specialized coaching for students preparing for 
                    competitive examinations and scholarships.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-background p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Key Curriculum Features
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Competency-Based Curriculum (CBC) integration",
                    "Practical and laboratory-based learning",
                    "Regular assessments and feedback",
                    "Career guidance and counseling",
                    "Life skills education",
                    "Environmental education",
                    "Digital literacy programs",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
