import { Link, useLocation } from "wouter";
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/generated_images/logo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#2D4E3C] shadow-sm py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-6 cursor-pointer group">
            <img src={logo} alt="Eywa Massage Therapy Logo" className="h-16 md:h-18 w-auto transition-transform group-hover:scale-105" />
            <span className="text-2xl md:text-3xl font-serif font-bold text-[#8dcfc7] tracking-wide">
              Eywa Massage Therapy
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm uppercase tracking-widest hover:text-primary transition-colors text-[#adddd8] font-semibold
                `}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide rounded-full px-6">
              <a href="https://eywamassage.janeapp.com/" target="_blank" rel="noopener noreferrer">Book Online</a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#8dcfc7] hover:text-[#8dcfc7]/80">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#F9F7F2] border-none flex flex-col justify-center items-center gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="text-2xl font-serif text-primary hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide rounded-full px-8 py-6 text-lg mt-4">
                  <a href="https://eywamassage.janeapp.com/" target="_blank" rel="noopener noreferrer">Book Online</a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary-foreground">Eywa Massage Therapy</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xs font-light">
               Holistic Healing for Modern Living
              <br />
              Compassionate, evidence-based massage therapy on the Campbell River Coast.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-primary-foreground">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <p>Unit 2 – 522 South Dogwood Street<br />Campbell River, BC V9W 6Y7</p>
              </div>
              {/* TODO: update phone when received */}
              {/* <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <p>(250) 555-0123</p>
              </div> */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <p>eywatherapy@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Links & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-primary-foreground">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4 hidden md:block">
              <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full w-full md:w-auto bg-transparent">
                <a href="https://eywamassage.janeapp.com/" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/60 font-light">
          <p>&copy; {new Date().getFullYear()} Eywa Massage Therapy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
