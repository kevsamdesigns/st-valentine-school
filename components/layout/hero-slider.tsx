"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    title: "Welcome to St. Valentine Girls Senior School",
    subtitle: "Nurturing Excellence in Education",
    description: "Where young women are empowered to achieve their full potential through quality education, character development, and holistic growth.",
    cta: { text: "Apply Now", href: "/admissions" },
    secondaryCta: { text: "Learn More", href: "/about" },
    image: "/images/hero-1.jpg",
  },
  {
    title: "Academic Excellence",
    subtitle: "Preparing Future Leaders",
    description: "Our dedicated teachers and modern facilities ensure every student receives the best education to excel in their studies and beyond.",
    cta: { text: "View Academics", href: "/academics" },
    secondaryCta: { text: "Our Results", href: "/academics#results" },
    image: "/images/hero-2.jpg",
  },
  {
    title: "Beyond the Classroom",
    subtitle: "Clubs, Sports & Activities",
    description: "From drama to debate, basketball to music - we offer a wide range of extracurricular activities to develop well-rounded individuals.",
    cta: { text: "Explore Activities", href: "/co-curricular" },
    secondaryCta: { text: "View Gallery", href: "/gallery" },
    image: "/images/hero-3.jpg",
  },
]

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-[0_0_100%]"
            >
              {/* Background Image with Overlay */}
              <div 
                className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center lg:min-h-[700px]"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundColor: '#5BA4E5'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
                
                {/* Content */}
                <div className="container relative z-10 mx-auto px-4">
                  <div className="max-w-2xl text-secondary-foreground">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary md:text-base">
                      {slide.subtitle}
                    </p>
                    <h1 className="mb-4 text-3xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-lg opacity-90 text-pretty md:text-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button 
                        size="lg" 
                        asChild
                        className="bg-destructive hover:bg-destructive/90"
                      >
                        <Link href={slide.cta.href}>{slide.cta.text}</Link>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild
                        className="border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10"
                      >
                        <Link href={slide.secondaryCta.href}>{slide.secondaryCta.text}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-background/20 text-white hover:bg-background/40"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-background/20 text-white hover:bg-background/40"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === selectedIndex 
                ? "w-8 bg-primary" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
