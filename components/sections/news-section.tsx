import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Form 4 Students Excel in Mock Examinations",
    excerpt: "Our Form 4 students have posted impressive results in the recently concluded mock examinations, with the school mean grade improving significantly.",
    date: "April 15, 2026",
    category: "Academics",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    title: "Annual Sports Day Scheduled for Next Month",
    excerpt: "The annual inter-house sports competition is set to take place next month. All students are encouraged to participate in their respective houses.",
    date: "April 10, 2026",
    category: "Sports",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    title: "Science Club Wins Regional Competition",
    excerpt: "Our Science Club represented the school at the regional science fair and emerged as overall winners with their innovative water purification project.",
    date: "April 5, 2026",
    category: "Clubs",
    image: "/images/news-3.jpg",
  },
]

export function NewsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Latest News & Events
            </h2>
            <p className="text-muted-foreground">
              Stay updated with the latest happenings at St. Valentine
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/about#news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div 
                className="h-48 bg-cover bg-center bg-primary/20"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" className="h-auto p-0 text-primary" asChild>
                  <Link href={`/about#news-${item.id}`}>
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
