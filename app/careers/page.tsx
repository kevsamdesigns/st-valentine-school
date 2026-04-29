import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Clock, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team at St. Valentine Girls Senior School. View current job openings and apply.",
}

const jobOpenings = [
  {
    id: 1,
    title: "Mathematics Teacher",
    department: "Academics",
    type: "Full-time",
    location: "On-site",
    deadline: "May 15, 2026",
    description: "We are looking for a passionate Mathematics teacher to join our team. The ideal candidate should have experience teaching secondary school mathematics.",
    requirements: [
      "Bachelor's degree in Mathematics or Education",
      "TSC registration",
      "Minimum 3 years teaching experience",
      "Strong communication skills",
    ],
  },
  {
    id: 2,
    title: "Science Laboratory Technician",
    department: "Sciences",
    type: "Full-time",
    location: "On-site",
    deadline: "May 20, 2026",
    description: "Seeking a qualified laboratory technician to manage our science labs and assist teachers with practical sessions.",
    requirements: [
      "Diploma in Laboratory Technology",
      "Experience in educational laboratory",
      "Knowledge of safety protocols",
      "Attention to detail",
    ],
  },
  {
    id: 3,
    title: "School Nurse",
    department: "Health Services",
    type: "Full-time",
    location: "On-site",
    deadline: "May 25, 2026",
    description: "Looking for a registered nurse to provide healthcare services to our students and staff.",
    requirements: [
      "Diploma/Degree in Nursing",
      "Valid nursing license",
      "First aid certification",
      "Experience with adolescents preferred",
    ],
  },
  {
    id: 4,
    title: "IT Support Specialist",
    department: "ICT",
    type: "Full-time",
    location: "On-site",
    deadline: "June 1, 2026",
    description: "Join our ICT team to provide technical support and maintain our computer systems and network.",
    requirements: [
      "Diploma in IT or related field",
      "Network administration skills",
      "Hardware troubleshooting experience",
      "Good interpersonal skills",
    ],
  },
]

const benefits = [
  "Competitive salary packages",
  "Medical insurance coverage",
  "Professional development opportunities",
  "Pension scheme",
  "Supportive work environment",
  "School fee subsidy for staff children",
]

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Careers
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Join our team of dedicated educators and staff at St. Valentine Girls Senior School.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Why Work With Us?
                </h2>
                <p className="mb-6 text-muted-foreground">
                  At St. Valentine Girls Senior School, we believe that our staff are our 
                  greatest asset. We are committed to providing a supportive work environment 
                  where you can grow professionally while making a meaningful impact on the 
                  lives of young women.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-muted p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Join 100+ dedicated professionals
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our team includes experienced teachers, support staff, and administrators 
                  who are passionate about education and committed to excellence. We foster 
                  a culture of collaboration, innovation, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Current Openings
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Explore our current job opportunities and find a role that matches your skills.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <CardTitle className="mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">
                            <Briefcase className="mr-1 h-3 w-3" />
                            {job.department}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" />
                            {job.type}
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="mr-1 h-3 w-3" />
                            {job.location}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Deadline: <span className="font-medium text-destructive">{job.deadline}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{job.description}</p>
                    <div className="mb-4">
                      <p className="mb-2 text-sm font-medium text-foreground">Requirements:</p>
                      <ul className="grid gap-1 sm:grid-cols-2">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="bg-destructive hover:bg-destructive/90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              How to Apply
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Interested candidates should send their application letter, CV, and copies of 
              certificates to our HR department. You can also email your application to{" "}
              <a href="mailto:careers@stvalentine.ac.ke" className="text-primary hover:underline">
                careers@stvalentine.ac.ke
              </a>
            </p>
            <Card className="mx-auto max-w-xl">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Only shortlisted candidates will be contacted. 
                  St. Valentine Girls Senior School is an equal opportunity employer.
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
