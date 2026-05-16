import { Link } from "react-router-dom";
import { ArrowRight, Quote, Award, Heart, Users, BookOpen } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Stats } from "@/components/Stats";
import { Facilities } from "@/components/Facilities";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Button } from "@/components/ui/button";
import principal from "@/assets/principal.jpg";
import students from "@/assets/hero-students.jpg";

const values = [
  { icon: Award, title: "Excellence", desc: "Top academic outcomes through dedicated teaching and discipline." },
  { icon: Heart, title: "Integrity", desc: "Honesty and strong moral values are the heart of our community." },
  { icon: Users, title: "Empowerment", desc: "Confident young women equipped to lead and transform society." },
  { icon: BookOpen, title: "Knowledge", desc: "A rigorous CBC & CBE curriculum that ignites lifelong learning." },
];

import { SEO } from "@/components/SEO";

const Home = () => (
  <>
    <SEO
      title="St Valentine Girls Senior School | Excellence in Education"
      description="St Valentine Girls Senior School is committed to academic excellence, leadership development, and holistic education in Kenya."
      keywords="St Valentine Girls Senior School, girls school Kenya, secondary school, admissions, education"
      path="/"
    />

    <header>
      <h1 className="sr-only">St Valentine Girls Senior School</h1>
    </header>

    <HeroCarousel />

    {/* Welcome / Values */}
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Our Values</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-4">Why Choose St. Valentine?</h2>
          <p className="text-muted-foreground text-lg">A nurturing girls' boarding environment where every learner discovers her potential.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-7 rounded-2xl bg-card border border-border shadow-card-soft hover-lift text-center">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground items-center justify-center mb-4">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl text-primary-deep mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Stats />

    {/* Principal preview */}
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-4 -left-4 w-28 h-28 bg-primary/20 rounded-2xl" />
          <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-secondary/20 rounded-2xl" />
          <img src={principal} alt="Mr. Muthoka, Chief Principal of St. Valentine Girls Senior School" loading="lazy" width={800} height={1000} className="relative rounded-2xl shadow-strong w-full max-w-md mx-auto object-cover aspect-[4/5]" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">From the Chief Principal</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-6">Mr. Muthoka — Chief Principal</h2>
          <Quote className="w-10 h-10 text-secondary mb-3" />
          <p className="text-foreground/85 text-lg leading-relaxed mb-6">
            "At St. Valentine Girls Senior School, we are committed to nurturing every learner into a confident, intelligent and empowered young woman. Our culture of <strong className="text-primary-deep">discipline, integrity and excellence</strong> equips our girls with both academic mastery and the leadership skills to shape their world."
          </p>
          <Button variant="hero" asChild>
            <Link to="/about">Read Full Message <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <Facilities />
    <UpcomingEvents />

    {/* Trust — testimonials & achievements */}
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Voices & Achievements</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-4">Trusted by Families Across Kenya</h2>
          <p className="text-muted-foreground text-lg">Hear from our community and see what makes St. Valentine special.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {[
            { quote: "St. Valentine shaped my daughter into a confident, focused young woman. The discipline and care here are unmatched.", name: "Mrs. Mwende", role: "Parent, Form 4" },
            { quote: "The teachers genuinely care. I've grown academically and as a leader — I'm ready for university and beyond.", name: "Faith N.", role: "KCSE Candidate" },
            { quote: "A safe, prayerful boarding home where every girl is seen. We highly recommend the school.", name: "Mr. & Mrs. Kioko", role: "Parents, Grade 10" },
          ].map((t) => (
            <article key={t.name} className="bg-card border border-border rounded-2xl p-7 shadow-card-soft hover-lift">
              <Quote className="w-8 h-8 text-secondary mb-3" />
              <p className="text-foreground/85 leading-relaxed mb-5">"{t.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-primary-deep">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "Top 10", v: "County KCSE Performance" },
            { k: "100%", v: "University Qualification" },
            { k: "20+", v: "Co-curricular Clubs" },
            { k: "24/7", v: "Caring Boarding Staff" },
          ].map((a) => (
            <div key={a.v} className="text-center p-6 rounded-2xl bg-card border border-border shadow-card-soft">
              <p className="font-display text-3xl font-extrabold text-secondary mb-1">{a.k}</p>
              <p className="text-sm text-muted-foreground">{a.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 overflow-hidden">
      <img src={students} alt="Happy St. Valentine students" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-cta opacity-95" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative text-center text-primary-foreground">
        <h2 className="font-display text-4xl md:text-5xl mb-4">Begin Your Journey Today</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Admissions are open. Join a community where girls are raised to be confident, intelligent and empowered.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" asChild><Link to="/contact">Apply Now</Link></Button>
          <Button variant="heroOutline" size="xl" asChild><Link to="/academics">Our Academics</Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default Home;
