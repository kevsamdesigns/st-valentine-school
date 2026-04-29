"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["P.O. Box 2801-90100", "Machakos, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 733 866 135", "+254 723 948 943"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["stvalentinegirls@gmail.com", "admissions@stvalentine.ac.ke"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    toast.success("Message sent!", {
      description: "We will get back to you as soon as possible.",
    })
    
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              Get in touch with us for inquiries, admissions, or any other information.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Message subject" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Your message" 
                        rows={5}
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {contactInfo.map((info) => (
                    <Card key={info.title}>
                      <CardContent className="p-6">
                        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mb-2 font-semibold text-foreground">
                          {info.title}
                        </h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Map Placeholder */}
                <Card className="overflow-hidden">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Map location placeholder
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Machakos, Kenya
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Find quick answers to common questions about our school.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4">
              {[
                {
                  q: "What are the admission requirements?",
                  a: "Students must have completed primary education with a minimum KCPE score. Visit our Admissions page for detailed requirements.",
                },
                {
                  q: "Does the school offer boarding facilities?",
                  a: "Yes, we have modern boarding facilities that accommodate students from all over the country.",
                },
                {
                  q: "What are the school fees?",
                  a: "Fee structures vary by class level. Please contact our admissions office or visit the Admissions page for current fee information.",
                },
                {
                  q: "How can I schedule a school visit?",
                  a: "You can schedule a visit by calling our office or filling out the contact form above. We welcome prospective students and parents.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
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
