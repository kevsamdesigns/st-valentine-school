import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Music, BookOpen, Globe, Calculator, Microscope } from "lucide-react"

const clubs = [
  {
    icon: Palette,
    name: "Art Club",
    description: "Express creativity through painting, drawing, and various art forms.",
    members: 45,
  },
  {
    icon: Music,
    name: "Music Club",
    description: "Learn instruments, vocal training, and perform at school events.",
    members: 60,
  },
  {
    icon: BookOpen,
    name: "Drama Club",
    description: "Develop acting skills and participate in theatrical productions.",
    members: 35,
  },
  {
    icon: Globe,
    name: "Debate Club",
    description: "Sharpen public speaking and critical thinking through debates.",
    members: 40,
  },
  {
    icon: Calculator,
    name: "Math Club",
    description: "Explore advanced mathematics and compete in olympiads.",
    members: 30,
  },
  {
    icon: Microscope,
    name: "Science Club",
    description: "Conduct experiments and participate in science fairs.",
    members: 50,
  },
]

export function ClubsPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Clubs & Societies
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Join one of our many clubs and societies to explore your interests, 
            develop new skills, and make lasting friendships.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <Card 
              key={club.name}
              className="group transition-all duration-300 hover:shadow-md hover:border-primary/50"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <club.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{club.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {club.description}
                  </p>
                  <p className="mt-2 text-xs text-primary font-medium">
                    {club.members} members
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/clubs">
              View All Clubs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
