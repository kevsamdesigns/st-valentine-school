import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, Music, BookOpen, Globe, Calculator, Microscope, 
  Camera, Leaf, Heart, Users, Mic, PenTool 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Clubs & Societies",
  description: "Explore the various clubs and societies at St. Valentine Girls Senior School.",
}

const clubs = [
  {
    icon: Palette,
    name: "Art Club",
    category: "Creative Arts",
    members: 45,
    meetingDay: "Tuesday",
    description: "Express your creativity through painting, drawing, sculpture, and various art forms. Members participate in art exhibitions and competitions.",
    activities: ["Painting", "Drawing", "Sculpture", "Art exhibitions"],
  },
  {
    icon: Music,
    name: "Music Club",
    category: "Creative Arts",
    members: 60,
    meetingDay: "Wednesday",
    description: "Learn instruments, vocal training, and perform at school events. The club has won several regional music competitions.",
    activities: ["Choir", "Instruments", "Music theory", "Performances"],
  },
  {
    icon: BookOpen,
    name: "Drama Club",
    category: "Creative Arts",
    members: 35,
    meetingDay: "Thursday",
    description: "Develop acting skills and participate in theatrical productions. Members perform at school functions and drama festivals.",
    activities: ["Acting", "Script writing", "Stage production", "Festivals"],
  },
  {
    icon: Globe,
    name: "Debate Club",
    category: "Academic",
    members: 40,
    meetingDay: "Friday",
    description: "Sharpen public speaking and critical thinking through debates on current issues and academic topics.",
    activities: ["Debates", "Public speaking", "Model UN", "Competitions"],
  },
  {
    icon: Calculator,
    name: "Mathematics Club",
    category: "Academic",
    members: 30,
    meetingDay: "Monday",
    description: "Explore advanced mathematics, solve challenging problems, and compete in math olympiads.",
    activities: ["Problem solving", "Olympiads", "Math games", "Peer tutoring"],
  },
  {
    icon: Microscope,
    name: "Science Club",
    category: "Academic",
    members: 50,
    meetingDay: "Tuesday",
    description: "Conduct experiments, explore scientific concepts, and participate in science fairs and competitions.",
    activities: ["Experiments", "Science fairs", "Research projects", "Field trips"],
  },
  {
    icon: Camera,
    name: "Photography Club",
    category: "Creative Arts",
    members: 25,
    meetingDay: "Wednesday",
    description: "Learn photography techniques, photo editing, and document school events through the lens.",
    activities: ["Photography", "Photo editing", "Exhibitions", "Event coverage"],
  },
  {
    icon: Leaf,
    name: "Environmental Club",
    category: "Service",
    members: 40,
    meetingDay: "Thursday",
    description: "Promote environmental conservation through tree planting, recycling programs, and awareness campaigns.",
    activities: ["Tree planting", "Recycling", "Clean-up drives", "Awareness campaigns"],
  },
  {
    icon: Heart,
    name: "Christian Union",
    category: "Spiritual",
    members: 80,
    meetingDay: "Sunday",
    description: "Grow spiritually through Bible study, prayer meetings, and fellowship activities.",
    activities: ["Bible study", "Prayer meetings", "Worship", "Outreach"],
  },
  {
    icon: Users,
    name: "Peer Counselors",
    category: "Service",
    members: 20,
    meetingDay: "Friday",
    description: "Trained students who provide peer support and guidance to fellow students on various issues.",
    activities: ["Counseling", "Mentorship", "Workshops", "Support groups"],
  },
  {
    icon: Mic,
    name: "Public Speaking Club",
    category: "Academic",
    members: 35,
    meetingDay: "Monday",
    description: "Develop confidence in public speaking, presentation skills, and effective communication.",
    activities: ["Speech practice", "Presentations", "Competitions", "Workshops"],
  },
  {
    icon: PenTool,
    name: "Creative Writing Club",
    category: "Academic",
    members: 30,
    meetingDay: "Wednesday",
    description: "Nurture writing talent through poetry, short stories, essays, and the school magazine.",
    activities: ["Poetry", "Short stories", "School magazine", "Writing competitions"],
  },
]

const categories = ["All", "Academic", "Creative Arts", "Service", "Spiritual"]

export default function ClubsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Clubs & Societies
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Discover your passions and develop new skills through our diverse 
              range of clubs and societies.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Clubs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clubs.map((club) => (
                <Card key={club.name} className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <club.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{club.category}</Badge>
                    </div>
                    <CardTitle className="mt-4">{club.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {club.description}
                    </p>
                    <div className="mb-4 flex items-center gap-4 text-sm">
                      <span className="text-primary font-medium">
                        {club.members} members
                      </span>
                      <span className="text-muted-foreground">
                        Meets: {club.meetingDay}
                      </span>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-medium text-foreground">Activities:</p>
                      <div className="flex flex-wrap gap-1">
                        {club.activities.map((activity) => (
                          <Badge key={activity} variant="outline" className="text-xs">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to Join a Club?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Students can join clubs at the beginning of each term. Speak to your 
              class teacher or the club patron for more information on how to become a member.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Badge className="px-6 py-3 text-base bg-primary">
                New Members Welcome!
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-base">
                Sign up at the beginning of term
              </Badge>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
