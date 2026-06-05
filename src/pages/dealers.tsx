import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Store, CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const dealers = [
    {
    name: "Shree mahalaxmi Furniture",
    city: "Hubli, Karnataka",
    address: "Hubli Road, Hubli - 580 020",
    phone: "+91 7259173662",
    type: "Authorized Dealer",
  },
  {
    name: "Mandovi Steel Furniture",
    city: "Hubli, Karnataka",
    address: "Dharwad Road, Hubli - 580 020",
    phone: "+91 98765 11001",
    type: "Authorized Dealer",
  },
  {
    name: "Pooja Furniture World",
    city: "Pune, Maharashtra",
    address: "42, Deccan Gymkhana, Pune - 411 004",
    phone: "+91 98765 22002",
    type: "Authorized Dealer",
  },
  {
    name: "Shree Sai Furniture House",
    city: "Nashik, Maharashtra",
    address: "Plot 8, Cidco, Nashik - 422 009",
    phone: "+91 98765 33003",
    type: "Authorized Dealer",
  },
  {
    name: "Krishna Steel Mart",
    city: "Nagpur, Maharashtra",
    address: "78, Cotton Market, Nagpur - 440 018",
    phone: "+91 98765 44004",
    type: "Authorized Dealer",
  },
  {
    name: "National Furniture Store",
    city: "Hyderabad, Telangana",
    address: "102, Abids, Hyderabad - 500 001",
    phone: "+91 98765 55005",
    type: "Authorized Dealer",
  },
  {
    name: "Laxmi Furniture Depot",
    city: "Ahmedabad, Gujarat",
    address: "Sector 18, GIDC, Ahmedabad - 382 016",
    phone: "+91 98765 66006",
    type: "Authorized Dealer",
  },
];

export default function Dealers() {
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filteredDealers = dealers.filter(d =>
    d.city.toLowerCase().includes(search.toLowerCase()) ||
    d.name.toLowerCase().includes(search.toLowerCase())
  );

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
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Our Network</p>
            <h1 className="text-5xl font-serif font-bold text-white mb-4">Dealer Network</h1>
            <p className="text-white/70 max-w-xl text-lg">
              Find your nearest authorized Koroda Furniture dealer. Our trusted partners provide product demonstrations, quotes, and after-sales service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Find Dealer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Find a Dealer</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold text-primary">Authorized Dealers</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Search by city or dealer name to find the closest authorized showroom near you.
            </motion.p>
          </motion.div>

          <div className="max-w-md mx-auto mb-10">
            <Input
              type="search"
              placeholder="Search by city or dealer name..."
              className="rounded-none py-5 text-base"
              value={search}
              onChange={e => setSearch(e.target.value)}
              data-testid="input-dealer-search"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.length === 0 ? (
              <div className="col-span-3 text-center py-12">
                <Store className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No dealers found for your search. Try a different city name.</p>
              </div>
            ) : filteredDealers.map((dealer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-border p-6 hover:border-secondary hover:shadow-md transition-all duration-300 bg-white"
                data-testid={`card-dealer-${i}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <Store className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-primary">{dealer.name}</h3>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 font-medium">{dealer.type}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span>{dealer.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary shrink-0" />
                    <a href={`tel:${dealer.phone}`} className="hover:text-secondary transition-colors">{dealer.phone}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Partner With Us</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-5">Become an Authorized Dealer</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join our growing network of 500+ dealers across India and grow your business with one of the most trusted steel furniture brands in the country. We provide comprehensive support to our dealer partners.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: TrendingUp, title: "Proven Brand", desc: "30+ years of trust" },
                  { icon: Award, title: "Marketing Support", desc: "Collaterals & displays" },
                  { icon: Users, title: "Training", desc: "Regular product training" },
                  { icon: CheckCircle, title: "Best Margins", desc: "Competitive dealer pricing" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white p-5 border border-border">
                      <Icon className="w-6 h-6 text-secondary mb-2" />
                      <div className="font-bold text-primary text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white border border-border p-5">
                <h4 className="font-bold text-primary mb-3">Dealer Enquiry Direct Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-secondary" />
                    <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-secondary" />
                    <a href="mailto:dealers@koradafurniture.in" className="hover:text-secondary transition-colors">dealers@koradafurniture.in</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 border border-border shadow-sm"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-2xl text-primary mb-2">Application Received!</h3>
                  <p className="text-muted-foreground">Our dealer relations team will contact you within 3 working days.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif font-bold text-xl text-primary mb-6">Dealer Enquiry Form</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <Input required className="rounded-none" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} data-testid="input-dealer-name" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email *</label>
                        <Input required type="email" className="rounded-none" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} data-testid="input-dealer-email" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone *</label>
                        <Input required type="tel" className="rounded-none" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} data-testid="input-dealer-phone" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">City / Location *</label>
                      <Input required className="rounded-none" placeholder="City" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} data-testid="input-dealer-city" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Business Name</label>
                      <Input className="rounded-none" placeholder="Your business name" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} data-testid="input-dealer-business" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea className="rounded-none" placeholder="Tell us about your business and interest..." rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} data-testid="input-dealer-message" />
                    </div>
                    <Button type="submit" className="w-full rounded-none bg-secondary text-primary hover:bg-primary hover:text-secondary font-bold py-5" data-testid="button-submit-dealer">
                      Submit Dealer Enquiry
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
