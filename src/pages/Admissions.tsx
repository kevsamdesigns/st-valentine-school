import { Link } from "react-router-dom";
import { FileText, Heart, Package, BookOpen, CreditCard, CheckCircle2, Smartphone, Download, HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const requirements = [
  {
    icon: FileText,
    title: "Required Documents",
    items: [
      "Admission letter",
      "2 passport-size photos",
      "Birth Certificate (original + photocopy)",
      "KCPE Result Slip (original + photocopy)",
      "Grade 10 Result Slip (original + photocopy)",
    ],
  },
  {
    icon: Heart,
    title: "Health Requirements",
    items: ["Medical certificate or report from a government medical facility"],
  },
  {
    icon: Package,
    title: "Personal Effects",
    items: [
      "Basin, bowl, plate, spoon",
      "Towel and toiletries",
      "2 blankets",
      "2 blue/red Masai bedsheets",
      "4-inch mattress",
      "Metallic box with 2 padlocks",
      "Slippers and nightdress",
      "Mosquito net",
    ],
  },
  {
    icon: BookOpen,
    title: "Stationery & Books",
    items: [
      "Mathematical Table – 8th Edition (KNEC)",
      "Golden Bells hymn book",
      "R.S.V. English Bible",
      "Oxford Advanced Learner’s Dictionary",
      "Mathematical set",
    ],
  },
];

const fees = [
  { class: "Form One's Consolidated Fee", t1: "18,000", t2: "17,000", t3: "16,000", total: "51,000" },
  { class: "Form Two's Consolidated Fee", t1: "19,000", t2: "18,000", t3: "18,000", total: "55,000" },
  { class: "Form Three's Consolidated Fee", t1: "19,000", t2: "19,000", t3: "18,000", total: "56,000" },
  { class: "Form Four's Consolidated Fee", t1: "22,000", t2: "20,000", t3: "20,000", total: "62,000" },
];

import { SEO } from "@/components/SEO";

const Admissions = () => (
  <>
    <SEO title="Admissions | St Valentine Girls Senior School" description="Admissions information, fees and requirements for St Valentine Girls Senior School." path="/admissions" />
    <PageHeader
      eyebrow="Join Our Family"
      title="Admissions & Fees"
      subtitle="Everything you need to know to enrol your daughter at St. Valentine Girls Senior School."
    />

    {/* Requirements */}
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Admission Requirements</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-4">What to Bring on Reporting Day</h2>
          <p className="text-muted-foreground text-lg">Please ensure your daughter arrives with all the items below.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {requirements.map((r) => (
            <article key={r.title} className="p-7 rounded-2xl bg-card border border-border shadow-card-soft hover-lift">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl text-primary-deep">{r.title}</h3>
              </div>
              <ul className="space-y-2">
                {r.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Fees */}
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Fees Structure 2024</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-4">School Fees</h2>
          <p className="text-muted-foreground text-lg">
            All amounts are in Kenyan Shillings (Kshs). Fees payments can be done with arranged installments with the school.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-card-soft bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left p-4 font-display font-bold">Class</th>
                  <th className="text-right p-4 font-display font-bold">Term 1</th>
                  <th className="text-right p-4 font-display font-bold">Term 2</th>
                  <th className="text-right p-4 font-display font-bold">Term 3</th>
                  <th className="text-right p-4 font-display font-bold">Total / Year</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={f.class} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="p-4 font-semibold text-primary-deep">{f.class}</td>
                    <td className="p-4 text-right text-foreground/85">{f.t1}/-</td>
                    <td className="p-4 text-right text-foreground/85">{f.t2}/-</td>
                    <td className="p-4 text-right text-foreground/85">{f.t3}/-</td>
                    <td className="p-4 text-right font-bold text-secondary">{f.total}/-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Extras */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft">
            <h4 className="font-display text-lg text-primary-deep mb-2">Uniform Package (Optional)</h4>
            <p className="text-sm text-muted-foreground">
              Uniform, mattress and jumper — <strong className="text-secondary">Kshs 12,000</strong> if purchased from the school.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card-soft">
            <h4 className="font-display text-lg text-primary-deep mb-2">Student ID</h4>
            <p className="text-sm text-muted-foreground">
              <strong className="text-secondary">Kshs 400</strong> per student.
            </p>
          </div>
        </div>

        {/* MPESA Payment Guide */}
        <div className="max-w-4xl mx-auto mt-10 p-8 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="w-6 h-6" />
            <h3 className="font-display text-2xl font-bold">MPESA Payment Guide</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-foreground/10 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Paybill Number</p>
              <p className="font-display text-3xl font-extrabold text-secondary mb-4">884060</p>
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Account Number Format</p>
              <p className="font-mono text-sm bg-primary-foreground/10 rounded-md px-3 py-2 mb-2">Student Name / Admission No.</p>
              <p className="text-xs opacity-80">Example: <strong>Jane Achieng / ADM 2456</strong></p>
            </div>
            <ol className="space-y-3 text-sm">
              {[
                "Go to M-PESA → Lipa na M-PESA → Pay Bill",
                "Enter Business Number: 884060",
                "Enter Account: Student Name / Admission No.",
                "Enter the amount and your M-PESA PIN",
                "Confirm and submit — keep the SMS confirmation",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 bg-primary-foreground/10 rounded-xl p-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-xs">{i + 1}</span>
                  <span className="opacity-95">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-6 bg-secondary/20 border border-secondary/40 rounded-xl p-4 text-sm">
            <strong>Confirmation Notice:</strong> Always retain the M-PESA SMS confirmation and present it to the school bursar for receipting.
          </div>
        </div>

        {/* Other payment methods */}
        <div className="max-w-4xl mx-auto mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-card border border-border shadow-card-soft">
            <p className="font-bold text-primary-deep mb-1">Bankers Cheque</p>
            <p className="text-sm text-muted-foreground">Payable to St. Valentine Girls Senior School.</p>
          </div>
          <div className="p-5 rounded-2xl bg-card border border-border shadow-card-soft">
            <p className="font-bold text-primary-deep mb-1">Money Order</p>
            <p className="text-sm text-muted-foreground">Available at any Posta Kenya branch.</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground italic text-center mt-6">* Fees are non-refundable and non-transferable.</p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Admissions Office</Link>
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => window.print()}>
            <Download className="mr-2 w-4 h-4" /> Download Fee Structure
          </Button>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-secondary font-semibold uppercase tracking-[0.25em] text-xs mb-3">Admissions FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-deep mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Answers to the most common questions from parents and guardians.</p>
        </div>
        <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border shadow-card-soft px-6">
          {[
            { q: "When does admission open?", a: "Admissions are open throughout the year, subject to vacancy. Form 1 admissions follow the national selection calendar." },
            { q: "Do you offer scholarships or bursaries?", a: "Yes — we work with parents to access government bursaries and have limited need-based support. Talk to the Admissions Office." },
            { q: "What is the school's KCSE performance?", a: "We consistently rank in the top 10 in Machakos County with 100% university qualification for many of our cohorts." },
            { q: "Can fees be paid in installments?", a: "Yes, installment plans can be arranged with the school bursar before the start of term." },
            { q: "How safe is the boarding facility?", a: "Our boarding is staffed 24/7 with caring matrons, secure perimeters and strict visitor protocols." },
          ].map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-primary-deep">
                <span className="flex items-center gap-3"><HelpCircle className="w-5 h-5 text-secondary" />{f.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default Admissions;
