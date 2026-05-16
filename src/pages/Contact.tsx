import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import mapImg from "@/assets/school-map.jpg";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you — we'll get back to you shortly." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <SEO title="Contact Us | St Valentine Girls Senior School" description="Contact St Valentine Girls Senior School — phone, email and location information." path="/contact" />
      <PageHeader eyebrow="Get In Touch" title="Contact Us" subtitle="We'd love to welcome you to the St. Valentine family — reach out today." />

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, title: "Phone", lines: ["0115 573 712", "0733 866 135", "0723 948 943"] },
                { icon: Mail, title: "Email", lines: ["stvalentinegirls@gmail.com"] },
                { icon: MapPin, title: "Location", lines: ["P.O. Box 2801-90100, Machakos", "6km from Machakos town along the Machakos-Kangundo road, Katundu-Kateve bus stage"] },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-card-soft">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-deep mb-1">{c.title}</h3>
                    {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border shadow-card-soft space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <Input required placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <Input required type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                <Input required placeholder="07XX XXX XXX" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <Textarea required rows={5} placeholder="How can we help?" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Find Us Here</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary-deep">School Location Map</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-strong border border-border">
            <img
              src={mapImg}
              alt="Map showing the location of St. Valentine Girls Senior School along Machakos-Kangundo Road, Katundu-Kateve"
              loading="lazy"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            6km from Machakos town along the Machakos-Kangundo road · Katundu-Kateve bus stage
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
