import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, LogIn, LayoutDashboard, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Admissions", to: "/admissions" },
  { label: "Academics", to: "/academics" },
  { label: "Gallery", to: "/gallery" },
  { label: "News", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { user, isAdmin } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-primary shadow-card-soft" : "bg-primary/95 backdrop-blur"}`}>
      {/* Top bar */}
      <div className="hidden md:block bg-primary-deep text-primary-foreground text-xs">
        <div className="container flex justify-between items-center py-2 gap-4">
          <span>📍 Machakos-Kangundo Road, Katundu-Kateve</span>
          <span className="italic text-secondary hidden lg:inline">"Strive for Self-Reliance"</span>
          <a href="tel:0115573712" className="flex items-center gap-2 hover:text-primary-glow transition-smooth">
            <Phone className="w-3 h-3" /> 0115 573 712 / 0733 866 135
          </a>
        </div>
      </div>

      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="St. Valentine Girls Senior School logo" className="w-12 h-12 object-contain bg-background/95 rounded-lg p-1" width={48} height={48} />
          <div className="hidden sm:block leading-tight text-primary-foreground">
            <p className="font-display font-extrabold text-lg">St. Valentine Girls</p>
            <p className="text-[10px] uppercase tracking-widest opacity-90 text-yellow-400">Senior School</p>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-semibold transition-smooth rounded-md ${
                    isActive
                      ? "text-primary-foreground bg-primary-foreground/15"
                      : "text-primary-foreground/85 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          {user ? (
            <Button variant="heroOutline" size="sm" asChild>
              <Link to={isAdmin ? "/admin" : "/portal"}>
                {isAdmin ? <LayoutDashboard className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                {isAdmin ? "Admin" : "My Portal"}
              </Link>
            </Button>
          ) : (
            <Button variant="heroOutline" size="sm" asChild>
              <Link to="/auth"><LogIn className="w-4 h-4" />Login</Link>
            </Button>
          )}
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2 text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-primary-deep border-t border-primary-foreground/10 animate-fade-in">
          <ul className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block py-3 px-3 rounded-md font-medium ${
                      isActive ? "bg-primary text-primary-foreground" : "text-primary-foreground/90 hover:bg-primary/40"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <Button variant="heroOutline" className="mt-2" asChild>
              <Link to={user ? (isAdmin ? "/admin" : "/portal") : "/auth"}>
                {user ? (isAdmin ? "Admin Dashboard" : "My Portal") : "Login / Sign Up"}
              </Link>
            </Button>
            <Button variant="hero" className="mt-2" asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
