import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about St. Valentine Girls Senior School - our history, mission, vision, and values.",
}

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and moral principles in all our endeavors.",
  },
  {
    icon: BookOpen,
    title: "Excellence",
    description: "We strive for academic and personal excellence in everything we do.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a sense of belonging and mutual support among students, staff, and parents.",
  },
  {
    icon: Award,
    title: "Leadership",
    description: "We develop confident, responsible leaders who will make a positive impact in society.",
  },
]

const leadership = [
  {
    name: "Dr. Margaret Ochieng",
    role: "Principal",
    image: "/images/principal.jpg",
    bio: "With over 25 years in education, Dr. Ochieng has led St. Valentine to become one of the top schools in the region.",
  },
  {
    name: "Mrs. Florence Kimani",
    role: "Deputy Principal (Academics)",
    image: "/images/deputy-academics.jpg",
    bio: "A passionate educator focused on curriculum development and academic excellence.",
  },
  {
    name: "Mrs. Sarah Mwangi",
    role: "Deputy Principal (Administration)",
    image: "/images/deputy-admin.jpg",
    bio: "Ensures smooth operations of all administrative functions and student welfare.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              About Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Discover the rich history and values that make St. Valentine Girls 
              Senior School a center of excellence in education.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">Our History</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    St. Valentine Girls Senior School was established in 1985 with a vision 
                    to provide quality education to young women in Kenya. What started as a 
                    small school with just 50 students has grown into a premier institution 
                    with over 1,200 students.
                  </p>
                  <p>
                    Over the years, we have consistently produced top performers in national 
                    examinations and have seen our alumni excel in various fields including 
                    medicine, law, engineering, business, and the arts.
                  </p>
                  <p>
                    Our commitment to holistic education has earned us numerous accolades 
                    and recognition as one of the leading girls&apos; schools in the country.
                  </p>
                </div>
              </div>
              <div 
                className="h-80 rounded-lg bg-cover bg-center bg-primary/10 lg:h-96"
                style={{ backgroundImage: "url(/images/school-history.jpg)" }}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide quality, holistic education that nurtures the intellectual, 
                    spiritual, physical, and social development of young women, preparing 
                    them to be responsible citizens and leaders who positively impact society.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-destructive">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex rounded-full bg-destructive/10 p-3">
                    <Eye className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be a center of excellence in education, recognized for producing 
                    well-rounded, confident, and ethical young women who excel academically 
                    and contribute meaningfully to the development of their communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Our Core Values</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                These values guide everything we do at St. Valentine Girls Senior School.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-flex rounded-full bg-accent p-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-secondary-foreground">
                School Leadership
              </h2>
              <p className="mx-auto max-w-2xl text-secondary-foreground/80">
                Meet the dedicated leaders guiding St. Valentine Girls Senior School.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {leadership.map((leader) => (
                <Card key={leader.name} className="overflow-hidden bg-background">
                  <div 
                    className="h-64 bg-cover bg-center bg-primary/20"
                    style={{ backgroundImage: `url(${leader.image})` }}
                  />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-primary">
                      {leader.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
