import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Dealers", href: "/dealers" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary text-primary-foreground shadow-md py-3" 
          : "bg-primary text-primary-foreground py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center text-primary font-bold text-xl transition-transform group-hover:scale-105">
              K
            </div>
            <div className="font-serif font-bold text-xl tracking-tight">
              KORODA <span className="text-secondary font-sans font-medium text-sm block -mt-1 tracking-widest uppercase">FURNITURE</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium hover:text-secondary transition-colors ${location === "/" ? "text-secondary" : ""}`}>Home</Link>
            <Link href="/about" className={`text-sm font-medium hover:text-secondary transition-colors ${location === "/about" ? "text-secondary" : ""}`}>About</Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <Link href="/products" className={`text-sm font-medium flex items-center gap-1 hover:text-secondary transition-colors ${location.startsWith("/products") ? "text-secondary" : ""}`}>
                Products <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white text-primary shadow-xl rounded-md border border-gray-100 w-[600px] p-6 grid grid-cols-2 gap-x-8 gap-y-4 relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-lg border-b pb-2 mb-3 text-primary">Cabinets & Wardrobes</h3>
                    <ul className="space-y-2">
                      {products.filter(p => p.category === "cabinet" || p.category === "wardrobe").slice(0, 5).map(p => (
                        <li key={p.id}>
                          <Link href={`/products/${p.id}`} className="text-sm text-gray-600 hover:text-secondary transition-colors block">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-lg border-b pb-2 mb-3 text-primary">Lockers & Specialty</h3>
                    <ul className="space-y-2">
                      {products.filter(p => p.category === "locker" || p.category === "safe" || p.category === "specialty").map(p => (
                        <li key={p.id}>
                          <Link href={`/products/${p.id}`} className="text-sm text-gray-600 hover:text-secondary transition-colors block">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href="/products" className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1">
                        View All Products &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/catalogue" className={`text-sm font-medium hover:text-secondary transition-colors ${location === "/catalogue" ? "text-secondary" : ""}`}>Catalogue</Link>
            <Link href="/dealers" className={`text-sm font-medium hover:text-secondary transition-colors ${location === "/dealers" ? "text-secondary" : ""}`}>Dealers</Link>
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex">
            <Button className="bg-secondary text-primary hover:bg-white transition-colors rounded-none font-bold px-6">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/10 shadow-xl h-screen overflow-y-auto pb-32">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.slice(0, 2).map(link => (
              <Link key={link.name} href={link.href} className="text-lg font-medium py-2 border-b border-white/10">
                {link.name}
              </Link>
            ))}
            
            <div className="py-2 border-b border-white/10">
              <button 
                className="flex items-center justify-between w-full text-lg font-medium"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                Products
                <ChevronDown className={`transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {productsDropdownOpen && (
                <div className="pl-4 mt-4 space-y-3">
                  <Link href="/products" className="block text-secondary font-medium">All Products</Link>
                  {products.map(p => (
                    <Link key={p.id} href={`/products/${p.id}`} className="block text-gray-300 text-sm">
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map(link => (
              <Link key={link.name} href={link.href} className="text-lg font-medium py-2 border-b border-white/10">
                {link.name}
              </Link>
            ))}
            
            <Button className="bg-secondary text-primary mt-6 w-full rounded-none font-bold py-6 text-lg">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
