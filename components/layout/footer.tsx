"use client"

import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

const portalLinks = [
  { name: "Student Portal", href: "/auth/login?role=student" },
  { name: "Teacher Portal", href: "/auth/login?role=teacher" },
  { name: "Admin Portal", href: "/auth/login?role=admin" },
  { name: "Careers", href: "/careers" },
  { name: "Downloads", href: "/downloads" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold">St. Valentine</h3>
                <p className="text-xs opacity-80">Girls Senior School</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Nurturing excellence in education since 1985. We are committed to developing 
              well-rounded young women who are prepared to lead and make a positive impact 
              in society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Portals & Resources</h3>
            <ul className="space-y-2">
              {portalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                <span className="opacity-80">
                  P.O. Box 12345-00100,<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="opacity-80">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="opacity-80">info@stvalentine.ac.ke</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="mb-2 text-sm font-medium">Subscribe to Newsletter</h4>
              <form className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
                <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row">
          <p className="text-center text-sm opacity-80">
            &copy; {new Date().getFullYear()} St. Valentine Girls Senior School. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link 
                key={social.name} 
                href={social.href}
                className="opacity-80 transition-opacity hover:opacity-100"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
