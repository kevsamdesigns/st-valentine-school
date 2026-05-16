import { Quote, Target, Eye, Heart, GraduationCap, ShieldCheck, BookOpen, ClipboardList, Trophy, HeartHandshake, UserCog } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import principal from "@/assets/principal.jpg";
import deputyOloo from "@/assets/deputy-oloo.jpg";
import deputyAgnes from "@/assets/deputy-agnes.jpg";

const deputies = [
  {
    name: "Mr. Oloo",
    role: "Deputy Principal — Academics",
    icon: GraduationCap,
    photo: deputyOloo,
    message:
      "Our academic vision is anchored on KCSE excellence, rigorous discipline and personalised mentorship. We embrace digital learning, STEM innovation and continuous assessment to ensure every learner steadily improves and reaches her full potential.",
  },
  {
    name: "Madam Agnes",
    role: "Deputy Principal — Administration",
    icon: ShieldCheck,
    photo: deputyAgnes,
    message:
      "We nurture discipline, welfare and safety in a well-managed boarding environment. Through strong character formation, leadership opportunities and a positive school culture, every girl grows into a responsible, confident young woman.",
  },
];

const seniorStaff = [
  { name: "Mr. Kasyoka", role: "Senior Teacher", icon: UserCog, desc: "Coordinates teaching staff, lesson supervision and academic standards." },
  { name: "Mr. Kilelo", role: "Exams Coordinator", icon: ClipboardList, desc: "Plans, administers and analyses internal and national assessments." },
  { name: "Mr. Limo", role: "Sports Director", icon: Trophy, desc: "Leads sports programmes, teams and co-curricular talent development." },
  { name: "Madam Esther", role: "Guidance & Counselling", icon: HeartHandshake, desc: "Supports student wellbeing, mentorship and personal growth." },
];

import { SEO } from "@/components/SEO";

const About = () => (
  <>
    <SEO title="About Us | St Valentine Girls Senior School" description="About St Valentine Girls Senior School — mission, vision and leadership." path="/about" />
    <PageHeader eyebrow="Who We Are" title="About Our School" subtitle="A center of excellence in girls' education — Machakos, Kenya." />

    {/* Principal */}
    <section className="py-20 md:py-24">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-32 h-32 bg-primary/20 rounded-2xl" />
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-secondary/20 rounded-2xl" />
          <img src={principal} alt="Mr. Muthoka, Chief Principal" loading="lazy" width={800} height={1000} className="relative rounded-2xl shadow-strong w-full max-w-md mx-auto object-cover aspect-[4/5]" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-sm font-semibold shadow-elegant whitespace-nowrap">
            Mr. Muthoka — Chief Principal
          </div>
        </div>
        <div>
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Message from the Chief Principal</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-6">Welcome to St. Valentine</h2>
          <Quote className="w-10 h-10 text-secondary mb-4" />
          <p className="text-foreground/85 text-lg leading-relaxed mb-4">
            At St. Valentine Girls Senior School, we are committed to nurturing every learner into a confident, intelligent and empowered young woman. Our culture of <strong className="text-primary-deep">discipline, integrity and excellence</strong> equips our girls with both academic mastery and the leadership skills they need to shape their world.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe that an empowered girl can transform her family, her community, and her nation. Welcome to a school where ambition meets opportunity — and where every girl is seen, supported and celebrated.
          </p>
          <div className="border-l-4 border-secondary pl-4">
            <p className="font-display font-bold text-xl text-primary-deep">Mr. Muthoka</p>
            <p className="text-sm text-muted-foreground">Chief Principal, St. Valentine Girls Senior School</p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission/Vision/Values */}
    <section className="py-20 bg-muted/40">
      <div className="container grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Our Mission", desc: "To provide a holistic, Christian-based education that nurtures academic excellence, discipline and character in every girl." },
          { icon: Eye, title: "Our Vision", desc: "To be a leading center of excellence in girls' education — raising confident, intelligent and empowered women." },
          { icon: Heart, title: "Our Motto", desc: "Strive for Self-Reliance." },
        ].map((c) => (
          <div key={c.title} className="bg-card p-8 rounded-2xl border border-border shadow-card-soft hover-lift">
            <div className="w-14 h-14 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-5">
              <c.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl text-primary-deep mb-3">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Deputy Principals */}
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">School Leadership</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-4">Our Deputy Principals</h2>
          <p className="text-muted-foreground text-lg">Driving academic excellence and a thriving school community.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {deputies.map((d) => (
            <article key={d.name} className="group p-8 rounded-2xl bg-card border border-border shadow-card-soft hover-lift transition-smooth">
              <div className="flex items-center gap-5 mb-5">
                <div className="relative shrink-0">
                  <img
                    src={d.photo}
                    alt={`${d.name}, ${d.role}`}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-24 h-24 rounded-2xl object-cover shadow-elegant ring-2 ring-secondary/40 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-md">
                    <d.icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-primary-deep">{d.name}</h3>
                  <p className="text-sm text-secondary font-semibold">{d.role}</p>
                </div>
              </div>
              <Quote className="w-7 h-7 text-secondary mb-3" />
              <p className="text-foreground/85 leading-relaxed">{d.message}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Senior Staff */}
    <section className="py-20 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Departmental Heads</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-4">Senior Staff</h2>
          <p className="text-muted-foreground text-lg">A dedicated team supporting every aspect of school life.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seniorStaff.map((s) => (
            <article key={s.name} className="group p-6 rounded-2xl bg-card border border-border shadow-card-soft hover-lift text-center">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-lg text-primary-deep">{s.name}</h3>
              <p className="text-sm text-secondary font-semibold mb-2">{s.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* History */}
    <section className="py-20 md:py-24">
      <div className="container max-w-4xl">
        <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3 text-center">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-8 text-center">A Heritage of Excellence</h2>
        <div className="space-y-5 text-foreground/85 text-lg leading-relaxed">
          <p>
            St. Valentine Girls Senior School is a girls' boarding secondary school located along the Machakos–Kangundo road, at Katundu-Kateve bus stage, just 6 kilometers from Machakos town.
          </p>
          <p>
            Founded with a clear mission to empower the girl-child through quality education, the school has grown into a vibrant community of over <strong className="text-primary-deep">1,200 students</strong> served by more than <strong className="text-primary-deep">80 dedicated teachers</strong>. We deliver both the CBC (Competency-Based Curriculum) and the legacy 8-4-4 system, ensuring every learner receives the best possible foundation.
          </p>
          <p>
            Beyond academics, our girls thrive in clubs, sports, music and leadership programmes that build character and confidence — preparing them for university, careers and life.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default About;
