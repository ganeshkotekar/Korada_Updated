import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, FileText, Phone, Mail, CheckCircle, Package } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const catalogues = [
  {
    id: "main",
    title: "Koroda Furniture Main Catalogue",
    subtitle: "Complete Product Range",
    pages: "64 pages",
    year: "2025 Edition",
    products: ["Cabinets", "Wardrobes", "Lockers", "Office Furniture"],
    icon: Package,
  },
  {
    id: "office",
    title: "Office Solutions Catalogue",
    subtitle: "Corporate & Office Range",
    pages: "32 pages",
    year: "2025 Edition",
    products: ["Office Cabinets", "Filing Systems", "Slimline Cabinets", "Small Office Cabinets"],
    icon: FileText,
  },
  {
    id: "premium",
    title: "Premium Collection",
    subtitle: "Samruddhi & Saraf Series",
    pages: "24 pages",
    year: "2025 Edition",
    products: ["Samruddhi Collection", "Saraf Series", "Designer Wardrobes"],
    icon: Package,
  },
  {
    id: "specialty",
    title: "Specialty Products",
    subtitle: "Safes, Offering Boxes & More",
    pages: "20 pages",
    year: "2025 Edition",
    products: ["Offering Boxes (Hundi)", "Multi Drawer Safes", "Staff Lockers"],
    icon: FileText,
  },
];

export default function Catalogue() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Downloads</p>
            <h1 className="text-5xl font-serif font-bold text-white mb-4">Product Catalogue</h1>
            <p className="text-white/70 max-w-xl text-lg">
              Download our detailed product catalogues featuring specifications, dimensions, and finish options for our complete range.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalogues Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeInUp} className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Our Catalogues</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold text-primary">
              Browse & Download
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl mx-auto mt-3">
              Fill in the form below to request a physical copy, or download digital versions instantly.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {catalogues.map(cat => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.id} variants={fadeInUp} className="border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg bg-white p-8 group" data-testid={`card-catalogue-${cat.id}`}>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-24 bg-primary flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">{cat.year}</span>
                        <span className="text-xs text-muted-foreground">· {cat.pages}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-primary mb-1 group-hover:text-secondary transition-colors">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{cat.subtitle}</p>
                      <div className="flex flex-wrap gap-1 mb-5">
                        {cat.products.map(p => (
                          <span key={p} className="bg-muted text-xs px-2 py-1 text-muted-foreground">{p}</span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors font-bold text-sm px-5 py-2.5">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Request Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Request a Physical Copy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We can mail a printed copy of our product catalogue to your address. Fill in the form and our team will get in touch within 2 working days.
              </p>

              <div className="bg-muted p-6 mb-6 border border-border">
                <h4 className="font-bold text-primary mb-4">What's Included in the Catalogue</h4>
                <ul className="space-y-2">
                  {[
                    "Full product specifications and dimensions",
                    "Available color and finish options",
                    "Pricing guidelines (indicative)",
                    "Dealer network and contact directory",
                    "Custom order information",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 text-secondary" />
                  +91 98765 43210
                </a>
                <a href="mailto:info@koradafurniture.in" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4 text-secondary" />
                  info@koradafurniture.in
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted p-8 border border-border"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-2xl text-primary mb-2">Request Received!</h3>
                  <p className="text-muted-foreground">Our team will contact you within 2 working days to confirm your catalogue shipment.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif font-bold text-xl text-primary mb-6">Request Catalogue</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                      <Input
                        required
                        className="rounded-none"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                      <Input
                        required
                        type="email"
                        className="rounded-none"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                      <Input
                        required
                        type="tel"
                        className="rounded-none"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">City</label>
                      <Input
                        className="rounded-none"
                        placeholder="Your city"
                        value={form.city}
                        onChange={e => setForm({ ...form, city: e.target.value })}
                        data-testid="input-city"
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-none bg-secondary text-primary hover:bg-primary hover:text-secondary font-bold py-5 mt-2" data-testid="button-submit">
                      Send Request
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
