"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Academics", 
    href: "/academics",
    children: [
      { name: "Classes", href: "/academics" },
      { name: "Departments", href: "/academics#departments" },
      { name: "Curriculum", href: "/academics#curriculum" },
    ]
  },
  { name: "Clubs & Societies", href: "/clubs" },
  { name: "Co-Curricular", href: "/co-curricular" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

const quickLinks = [
  { name: "Admissions", href: "/admissions" },
  { name: "Careers", href: "/careers" },
  { name: "Downloads", href: "/downloads" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="hidden items-center gap-4 md:flex">
            <span>Tel: +254723 948 943</span>
            <span>Email: stvalentinegirls@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-bold text-foreground">St. Valentine</span>
              <span className="text-xs text-muted-foreground">Girls Senior School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "gap-1",
                        pathname.startsWith(item.href) && "bg-accent text-accent-foreground"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className={cn(
                    pathname === item.href && "bg-accent text-accent-foreground"
                  )}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              )
            ))}
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button asChild className="bg-destructive hover:bg-destructive/90">
              <Link href="/auth/login">Login</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="rounded-md px-6 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </React.Fragment>
              ))}
              <div className="mt-4 border-t pt-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
