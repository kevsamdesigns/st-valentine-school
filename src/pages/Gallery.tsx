import { PageHeader } from "@/components/PageHeader";
import gate from "@/assets/hero-gate.jpg";
import students from "@/assets/hero-students.jpg";
import lab from "@/assets/hero-lab.jpg";
import bus from "@/assets/school-bus.jpg";
import campus from "@/assets/campus-tour.jpg";
import sports from "@/assets/gallery-sports.jpg";
import classroom from "@/assets/gallery-classroom.jpg";
import choir from "@/assets/gallery-choir.jpg";
import library from "@/assets/gallery-library.jpg";
import students2 from "@/assets/gallery-students2.jpg";

const photos = [
  { src: gate, alt: "St. Valentine Girls' Senior School entrance gate", span: "row-span-2" },
  { src: students, alt: "Students and staff group photo on campus" },
  { src: classroom, alt: "Classroom learning" },
  { src: library, alt: "Students reading in the school library", span: "row-span-2" },
  { src: lab, alt: "Science laboratory" },
  { src: students2, alt: "Students gathering during a school outing" },
  { src: choir, alt: "School choir performance" },
  { src: sports, alt: "Hockey on the sports field" },
  { src: campus, alt: "Aerial campus view" },
  { src: bus, alt: "Branded school bus" },
];

const Gallery = () => (
  <>
    <PageHeader eyebrow="School Life" title="Our Gallery" subtitle="A visual journey through our campus, classrooms and student community." />

    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-card-soft border border-border ${p.span ?? ""}`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-3 left-4 right-4 text-primary-foreground text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {p.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Gallery;
