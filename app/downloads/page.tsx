import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download, FileText, Calendar, BookOpen, 
  ClipboardList, Users, DollarSign 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download forms, calendars, and other resources from St. Valentine Girls Senior School.",
}

const downloads = [
  {
    category: "Admissions",
    items: [
      {
        title: "Admission Application Form",
        description: "Application form for new students seeking admission",
        icon: FileText,
        fileType: "PDF",
        fileSize: "245 KB",
      },
      {
        title: "Transfer Request Form",
        description: "Form for students transferring from other schools",
        icon: Users,
        fileType: "PDF",
        fileSize: "180 KB",
      },
      {
        title: "Fee Structure 2026/2027",
        description: "Current fee structure for all classes",
        icon: DollarSign,
        fileType: "PDF",
        fileSize: "120 KB",
      },
    ],
  },
  {
    category: "Academic",
    items: [
      {
        title: "Academic Calendar 2026",
        description: "Term dates, holidays, and important events",
        icon: Calendar,
        fileType: "PDF",
        fileSize: "150 KB",
      },
      {
        title: "Subject Selection Form",
        description: "For Form 2 students selecting subjects",
        icon: BookOpen,
        fileType: "PDF",
        fileSize: "95 KB",
      },
      {
        title: "Exam Timetable - Term 2",
        description: "End of term examination schedule",
        icon: ClipboardList,
        fileType: "PDF",
        fileSize: "85 KB",
      },
    ],
  },
  {
    category: "Administrative",
    items: [
      {
        title: "Leave of Absence Form",
        description: "Request form for student leave",
        icon: FileText,
        fileType: "PDF",
        fileSize: "75 KB",
      },
      {
        title: "Medical Form",
        description: "Health declaration form for new students",
        icon: FileText,
        fileType: "PDF",
        fileSize: "110 KB",
      },
      {
        title: "Parent Consent Form",
        description: "Permission for trips and activities",
        icon: Users,
        fileType: "PDF",
        fileSize: "65 KB",
      },
    ],
  },
  {
    category: "Student Resources",
    items: [
      {
        title: "School Rules & Regulations",
        description: "Code of conduct for all students",
        icon: BookOpen,
        fileType: "PDF",
        fileSize: "320 KB",
      },
      {
        title: "Uniform Guidelines",
        description: "Dress code and uniform requirements",
        icon: ClipboardList,
        fileType: "PDF",
        fileSize: "200 KB",
      },
      {
        title: "Club Registration Form",
        description: "Sign up for clubs and societies",
        icon: Users,
        fileType: "PDF",
        fileSize: "55 KB",
      },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Downloads
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Access forms, calendars, and other important documents.
            </p>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {downloads.map((section) => (
                <div key={section.category}>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">
                    {section.category}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((item) => (
                      <Card key={item.title} className="transition-all duration-300 hover:shadow-md">
                        <CardContent className="p-6">
                          <div className="mb-4 flex items-start justify-between">
                            <div className="rounded-lg bg-primary/10 p-3">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="outline">{item.fileType}</Badge>
                              <Badge variant="secondary">{item.fileSize}</Badge>
                            </div>
                          </div>
                          <h3 className="mb-2 font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          <Button variant="outline" className="w-full" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 font-semibold text-foreground">
                  Need Help?
                </h3>
                <p className="text-sm text-muted-foreground">
                  If you cannot find the document you need or have trouble downloading, 
                  please contact the school office at{" "}
                  <a href="tel:+254723 948 943" className="text-primary hover:underline">
                    +254 733 866 135
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:info@stvalentine.ac.ke" className="text-primary hover:underline">
                    stvalentinegirls@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
