import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, ClipboardCheck, Calendar, Users, 
  CheckCircle2, ArrowRight, Download
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admissions",
  description: "Learn about admissions at St. Valentine Girls Senior School. Requirements, fees, and application process.",
}

const admissionSteps = [
  {
    step: 1,
    title: "Obtain Application Form",
    description: "Download the application form from our website or collect it from the school office.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Submit Application",
    description: "Fill in the form and submit with required documents and application fee.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Entrance Assessment",
    description: "Shortlisted candidates will be invited for an entrance assessment and interview.",
    icon: Calendar,
  },
  {
    step: 4,
    title: "Admission Offer",
    description: "Successful candidates will receive an admission letter with joining instructions.",
    icon: Users,
  },
]

const requirements = [
  "Completed KCPE certificate with minimum 300 marks",
  "Birth certificate (original and copy)",
  "KCPE result slip",
  "Passport photos (4 copies)",
  "Medical certificate from a registered doctor",
  "Transfer letter (for students from other schools)",
  "Previous school leaving certificate",
  "Parent/Guardian national ID copy",
]

const feeStructure = [
  {
    category: "Form 1",
    boarding: "KES 75,000",
    day: "KES 45,000",
    items: ["Tuition", "Boarding", "Books", "Uniform"],
  },
  {
    category: "Form 2",
    boarding: "KES 72,000",
    day: "KES 42,000",
    items: ["Tuition", "Boarding", "Books"],
  },
  {
    category: "Form 3",
    boarding: "KES 72,000",
    day: "KES 42,000",
    items: ["Tuition", "Boarding", "Books"],
  },
  {
    category: "Form 4",
    boarding: "KES 75,000",
    day: "KES 48,000",
    items: ["Tuition", "Boarding", "Books", "KCSE Registration"],
  },
]

export default function AdmissionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Admissions
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Join the St. Valentine family and begin your journey to excellence.
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Admission Process
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Follow these simple steps to apply for admission to our school.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {admissionSteps.map((item) => (
                <Card key={item.step} className="relative">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {item.step}
                      </div>
                    </div>
                    <div className="mb-4 mt-4 inline-flex rounded-full bg-primary/10 p-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Admission Requirements
                </h2>
                <p className="mb-6 text-muted-foreground">
                  To be considered for admission, applicants must provide the following 
                  documents and meet the minimum requirements:
                </p>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium text-foreground">Form 1 Applications Open</p>
                      <p className="text-sm text-muted-foreground">For January 2027 intake</p>
                    </div>
                    <Badge>October 2026</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium text-foreground">Application Deadline</p>
                      <p className="text-sm text-muted-foreground">Last date to submit</p>
                    </div>
                    <Badge variant="destructive">December 15, 2026</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium text-foreground">Entrance Assessments</p>
                      <p className="text-sm text-muted-foreground">For shortlisted candidates</p>
                    </div>
                    <Badge variant="outline">January 2027</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Term Begins</p>
                      <p className="text-sm text-muted-foreground">First day of school</p>
                    </div>
                    <Badge className="bg-primary">January 27, 2027</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Fee Structure
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Annual fees for the academic year 2026/2027. Fees are payable per term.
              </p>
            </div>

            <div className="overflow-x-auto">
              <Card>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Class
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Boarding (Annual)
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Day Scholar (Annual)
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Includes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {feeStructure.map((fee) => (
                        <tr key={fee.category}>
                          <td className="px-6 py-4 font-medium text-foreground">
                            {fee.category}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {fee.boarding}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {fee.day}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {fee.items.map((item) => (
                                <Badge key={item} variant="outline" className="text-xs">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              * Fees are subject to review. Additional charges may apply for specific activities.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Apply?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
              Download the application form and begin your journey to becoming a Valentine.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-destructive hover:bg-destructive/90"
                asChild
              >
                <Link href="/downloads">
                  <Download className="mr-2 h-5 w-5" />
                  Download Application Form
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contact">
                  Contact Admissions Office
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
