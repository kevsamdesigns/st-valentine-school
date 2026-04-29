import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Trophy, Medal, Target, Users, 
  Dribbble, Activity, Music, Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Co-Curricular Activities",
  description: "Explore sports, games, and other co-curricular activities at St. Valentine Girls Senior School.",
}

const sports = [
  {
    name: "Basketball",
    category: "Ball Games",
    achievements: ["County Champions 2025", "Regional Runners-up 2024"],
    trainingSessions: "Mon, Wed, Fri - 4:00 PM",
  },
  {
    name: "Volleyball",
    category: "Ball Games",
    achievements: ["National Qualifiers 2025", "County Champions 2024"],
    trainingSessions: "Tue, Thu - 4:00 PM",
  },
  {
    name: "Netball",
    category: "Ball Games",
    achievements: ["County Champions 2024", "Regional Champions 2023"],
    trainingSessions: "Mon, Wed - 4:00 PM",
  },
  {
    name: "Football",
    category: "Ball Games",
    achievements: ["County Semi-finalists 2025"],
    trainingSessions: "Tue, Thu, Sat - 4:00 PM",
  },
  {
    name: "Athletics",
    category: "Track & Field",
    achievements: ["Multiple National Medalists", "County Champions 2025"],
    trainingSessions: "Daily - 5:30 AM",
  },
  {
    name: "Swimming",
    category: "Aquatics",
    achievements: ["Regional Champions 2024"],
    trainingSessions: "Wed, Sat - 2:00 PM",
  },
]

const achievements = [
  {
    icon: Trophy,
    title: "County Champions",
    count: "15+",
    description: "Championships won across various sports",
  },
  {
    icon: Medal,
    title: "National Medals",
    count: "50+",
    description: "Individual and team medals at nationals",
  },
  {
    icon: Target,
    title: "Regional Titles",
    count: "25+",
    description: "Regional competition victories",
  },
  {
    icon: Users,
    title: "Active Athletes",
    count: "400+",
    description: "Students participating in sports",
  },
]

const performingArts = [
  {
    name: "Choir",
    description: "Our award-winning choir performs at national festivals and major school events.",
    achievements: "National Music Festival participants",
  },
  {
    name: "Drama",
    description: "Students showcase their theatrical talents in drama festivals and school productions.",
    achievements: "County Drama Festival Champions 2024",
  },
  {
    name: "Traditional Dance",
    description: "Preserving cultural heritage through traditional African dance performances.",
    achievements: "Cultural Festival Winners",
  },
  {
    name: "Modern Dance",
    description: "Contemporary dance group performing at various school and community events.",
    achievements: "Inter-school Dance Competition Runners-up",
  },
]

export default function CoCurricularPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Co-Curricular Activities
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Developing well-rounded students through sports, games, and performing arts.
            </p>
          </div>
        </section>

        {/* Achievements Overview */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="flex items-center gap-4 rounded-lg bg-background p-6"
                >
                  <div className="rounded-full bg-primary/10 p-3">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {achievement.count}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Dribbble className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Sports & Games</h2>
                <p className="text-muted-foreground">
                  Competitive and recreational sports programs for all students
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sports.map((sport) => (
                <Card key={sport.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{sport.name}</CardTitle>
                      <Badge variant="secondary">{sport.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="mb-2 text-sm font-medium text-foreground">
                        Achievements:
                      </p>
                      <ul className="space-y-1">
                        {sport.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Award className="h-4 w-4 text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Activity className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        {sport.trainingSessions}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performing Arts Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Music className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Performing Arts</h2>
                <p className="text-muted-foreground">
                  Nurturing talent in music, drama, and dance
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {performingArts.map((art) => (
                <Card key={art.name}>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {art.name}
                    </h3>
                    <p className="mb-4 text-muted-foreground">{art.description}</p>
                    <Badge className="bg-primary">{art.achievements}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              See Our Athletes in Action
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Browse our gallery to see photos and videos of our sports events, 
              performances, and achievements.
            </p>
            <Button asChild size="lg">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
