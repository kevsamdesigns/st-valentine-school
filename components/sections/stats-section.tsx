import { Users, Award, BookOpen, Trophy } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1,200+",
    label: "Students Enrolled",
    description: "Active learners",
  },
  {
    icon: Award,
    value: "95%",
    label: "KCSE Pass Rate",
    description: "University admission",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Qualified Teachers",
    description: "Dedicated educators",
  },
  {
    icon: Trophy,
    value: "100+",
    label: "Awards Won",
    description: "In sports & academics",
  },
]

export function StatsSection() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center text-primary-foreground"
            >
              <div className="mb-4 rounded-full bg-primary-foreground/10 p-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="mt-1 text-lg font-medium">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
