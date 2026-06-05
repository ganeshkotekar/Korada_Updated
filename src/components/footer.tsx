import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center text-primary font-bold text-xl">K</div>
              <div className="font-serif font-bold text-xl tracking-tight">
                KORODA <span className="text-secondary font-sans font-medium text-xs block -mt-1 tracking-widest uppercase">Furniture</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Premium quality steel furniture crafted for homes, offices, and institutions across India. Built to last, designed to impress.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center rounded">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center rounded">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Youtube" className="w-9 h-9 bg-white/10 hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center rounded">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Catalogue", href: "/catalogue" },
                { label: "Dealers", href: "/dealers" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-secondary">Our Products</h3>
            <ul className="space-y-3">
              {products.slice(0, 7).map(p => (
                <li key={p.id}>
                  <Link href={`/products/${p.id}`} className="text-sm text-white/70 hover:text-secondary transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">Koroda Furniture Works, MIDC Industrial Area, Maharashtra, India - 421 203</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-white/70 hover:text-secondary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:info@koradafurniture.in" className="text-sm text-white/70 hover:text-secondary transition-colors">info@koradafurniture.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Koroda Furniture. All rights reserved.</p>
          <p className="text-xs text-white/50">Made in India with pride</p>
        </div>
      </div>
    </footer>
  );
}
