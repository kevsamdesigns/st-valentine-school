import { Card, CardContent } from "@/components/ui/card"
import { Library, FlaskConical, Laptop, Dumbbell, Music, Utensils } from "lucide-react"

const facilities = [
  {
    icon: Library,
    title: "Modern Library",
    description: "A well-stocked library with over 10,000 books, digital resources, and quiet study areas for research and reading.",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description: "Fully equipped Physics, Chemistry, and Biology labs with modern equipment for practical experiments.",
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "State-of-the-art computer laboratory with high-speed internet for digital learning and IT education.",
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    description: "Basketball courts, volleyball courts, football field, and athletics track for physical education.",
  },
  {
    icon: Music,
    title: "Music & Drama Hall",
    description: "A dedicated space for music practice, drama rehearsals, and performing arts activities.",
  },
  {
    icon: Utensils,
    title: "Dining Hall",
    description: "Spacious dining facility serving nutritious meals prepared by our professional catering team.",
  },
]

export function FacilitiesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Facilities
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We provide world-class facilities to ensure our students have the best 
            learning environment for their academic and personal growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <Card 
              key={facility.title}
              className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-accent p-3">
                  <facility.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
