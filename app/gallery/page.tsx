"use client"

import * as React from "react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const categories = ["All", "Campus", "Events", "Sports", "Academics", "Clubs"]

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/campus-1.jpg",
    title: "Main Administration Block",
    category: "Campus",
    description: "The iconic administration building at the heart of our campus.",
  },
  {
    id: 2,
    src: "/images/gallery/event-1.jpg",
    title: "Annual Prize Giving Day",
    category: "Events",
    description: "Students receiving awards for academic excellence.",
  },
  {
    id: 3,
    src: "/images/gallery/sports-1.jpg",
    title: "Basketball Championship",
    category: "Sports",
    description: "Our team celebrating their county championship victory.",
  },
  {
    id: 4,
    src: "/images/gallery/academics-1.jpg",
    title: "Science Laboratory",
    category: "Academics",
    description: "Students conducting experiments in our modern science lab.",
  },
  {
    id: 5,
    src: "/images/gallery/clubs-1.jpg",
    title: "Drama Performance",
    category: "Clubs",
    description: "Drama club performing at the annual cultural day.",
  },
  {
    id: 6,
    src: "/images/gallery/campus-2.jpg",
    title: "School Library",
    category: "Campus",
    description: "Our well-equipped library with over 10,000 books.",
  },
  {
    id: 7,
    src: "/images/gallery/event-2.jpg",
    title: "Graduation Ceremony",
    category: "Events",
    description: "Form 4 students at their graduation ceremony.",
  },
  {
    id: 8,
    src: "/images/gallery/sports-2.jpg",
    title: "Athletics Meet",
    category: "Sports",
    description: "Students competing at the inter-house athletics meet.",
  },
  {
    id: 9,
    src: "/images/gallery/academics-2.jpg",
    title: "Computer Lab Session",
    category: "Academics",
    description: "Students learning programming in our computer laboratory.",
  },
  {
    id: 10,
    src: "/images/gallery/clubs-2.jpg",
    title: "Music Concert",
    category: "Clubs",
    description: "School choir performing at the annual music concert.",
  },
  {
    id: 11,
    src: "/images/gallery/campus-3.jpg",
    title: "Sports Complex",
    category: "Campus",
    description: "Our modern sports complex with multiple courts.",
  },
  {
    id: 12,
    src: "/images/gallery/event-3.jpg",
    title: "Cultural Day Celebration",
    category: "Events",
    description: "Students showcasing different cultural traditions.",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedImage, setSelectedImage] = React.useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Photo Gallery
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Capturing moments and memories at St. Valentine Girls Senior School.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm transition-colors"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-primary/10"
                  onClick={() => setSelectedImage(image)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Badge className="mb-2 bg-primary">{image.category}</Badge>
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <>
                <div
                  className="aspect-video w-full rounded-lg bg-cover bg-center bg-primary/10"
                  style={{ backgroundImage: `url(${selectedImage.src})` }}
                />
                <DialogTitle className="text-xl font-semibold">
                  {selectedImage.title}
                </DialogTitle>
                <DialogDescription>
                  <Badge className="mb-2 bg-primary">{selectedImage.category}</Badge>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </DialogDescription>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}
