import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Gallery", to: "/gallery" },
  { label: "News", to: "/news" },
  { label: "Transport", to: "/transport" },
  { label: "Rules", to: "/rules" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export const Footer = () => (
  <footer className="bg-chocolate text-chocolate-foreground pt-20 pb-8">
    <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="School logo" className="w-14 h-14 bg-background/95 rounded-lg p-1" width={56} height={56} loading="lazy" />
          <p className="font-display font-extrabold text-lg leading-tight">St. Valentine<br/>Girls Senior School</p>
        </div>
        <p className="text-chocolate-foreground/80 text-sm leading-relaxed mb-5">
          Empowering girls through quality education, discipline and excellence. Raising confident, intelligent and empowered women for tomorrow.
        </p>
        <div className="flex gap-3">
          {[
            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585179781801", label: "Facebook" },
            { Icon: Twitter, href: "#", label: "Twitter" },
            { Icon: Instagram, href: "#", label: "Instagram" },
            { Icon: Youtube, href: "#", label: "YouTube" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-chocolate-foreground/10 hover:bg-primary hover:scale-110 transition-smooth flex items-center justify-center" aria-label={label}>
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold text-lg mb-5 text-chocolate-foreground">Quick Links</h4>
        <ul className="space-y-3 text-sm text-chocolate-foreground/80">
          {quickLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-primary-glow transition-smooth">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-lg mb-5 text-chocolate-foreground">Information</h4>
        <ul className="space-y-3 text-sm text-chocolate-foreground/80">
          {["Admissions", "Fees Structure", "Jobs & Tenders", "Events", "FAQs", "Privacy Policy"].map((l) => (
            <li key={l}><a href="#" className="hover:text-primary-glow transition-smooth">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-lg mb-5 text-chocolate-foreground">Contact Info</h4>
        <ul className="space-y-3 text-sm text-chocolate-foreground/80">
          <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" /> stvalentinegirls@gmail.com</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" /> 0115 573 712</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" /> +254 723 948 943</li>
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" /> P.O. Box 2801-90100, Machakos</li>
          <li className="pt-2">
            <p className="flex items-center gap-2 font-semibold mb-2 text-chocolate-foreground"><Clock className="w-4 h-4 text-primary-glow" /> Opening Hours</p>
            <p className="ml-6">Mon–Fri: 7:00 AM – 5:00 PM</p>
            <p className="ml-6">Sat–Sun: 8:00 AM – 3:00 PM</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="container border-t border-chocolate-foreground/15 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-chocolate-foreground/70">
      <p>© {new Date().getFullYear()} St. Valentine Girls Senior School. All rights reserved.</p>
      <p className="italic">"Strive for Self-Reliance"</p>
    </div>
  </footer>
);
