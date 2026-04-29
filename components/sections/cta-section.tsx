import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url(/images/cta-bg.jpg)",
          backgroundColor: "#5BA4E5"
        }}
      />
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Ready to Join Our Community?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
          Take the first step towards a bright future. Apply for admission to 
          St. Valentine Girls Senior School and become part of our family.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            asChild
            className="bg-destructive hover:bg-destructive/90 text-white"
          >
            <Link href="/admissions">Apply for Admission</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
