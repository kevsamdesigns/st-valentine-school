import { Calendar, MapPin } from "lucide-react";

const events = [
  { date: "MAR 15", title: "Visiting Day", desc: "Parents & guardians welcome from 9am – 4pm.", venue: "School Grounds" },
  { date: "APR 02", title: "Annual Sports Day", desc: "Inter-house athletics, ball games and prize-giving.", venue: "School Field" },
  { date: "MAY 10", title: "Career Mentorship", desc: "Industry professionals mentor Form 3 & 4 girls.", venue: "Main Hall" },
  { date: "JUN 22", title: "Music & Drama Festival", desc: "Showcase of our most talented young performers.", venue: "Auditorium" },
];

export const UpcomingEvents = () => (
  <section className="py-20 md:py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">School Calendar</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-4">Upcoming Events</h2>
        <p className="text-muted-foreground text-lg">Mark your diaries — life at St. Valentine never stands still.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((e) => (
          <article key={e.title} className="group p-6 rounded-2xl bg-card border border-border shadow-card-soft hover-lift">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest opacity-90">{e.date.split(" ")[0]}</p>
                <p className="font-display text-xl font-extrabold leading-none">{e.date.split(" ")[1]}</p>
              </div>
            </div>
            <h3 className="font-display text-lg text-primary-deep mb-1 flex items-center gap-2"><Calendar className="w-4 h-4 text-secondary" />{e.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{e.desc}</p>
            <p className="text-xs text-secondary font-semibold flex items-center gap-1"><MapPin className="w-3 h-3" />{e.venue}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
