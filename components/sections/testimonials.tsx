"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "St. Valentine gave me the foundation I needed to succeed. The teachers were dedicated and the environment was perfect for learning. I am now pursuing medicine at the University of Nairobi.",
    name: "Mary Wanjiku",
    role: "Class of 2023",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    quote: "The holistic education approach at St. Valentine helped me develop not just academically but also in character. The clubs and activities taught me leadership skills I use every day.",
    name: "Grace Achieng",
    role: "Class of 2022",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    quote: "As a parent, I am grateful for the discipline and values instilled in my daughter. The school has truly lived up to its motto of nurturing excellence.",
    name: "Mrs. Jane Omondi",
    role: "Parent",
    image: "/images/testimonial-3.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary-foreground md:text-4xl">
            What People Say
          </h2>
          <p className="mx-auto max-w-2xl text-secondary-foreground/80">
            Hear from our students, alumni, and parents about their experience 
            at St. Valentine Girls Senior School.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-background/95 border-none"
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary opacity-50" />
                <blockquote className="mb-6 text-muted-foreground italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div 
                    className="h-12 w-12 rounded-full bg-cover bg-center bg-primary/20"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
