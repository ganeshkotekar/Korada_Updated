import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Leaf, Users, Factory, ArrowRight } from "lucide-react";
import { useState } from "react";

const BASE = "https://koradafurniture.in";

function FactoryPhoto({ n, className }: { n: number; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return (
    <div className={`bg-primary/20 border border-white/10 flex items-center justify-center ${className}`}>
      <Factory className="w-10 h-10 text-white/30" />
    </div>
  );
  return (
    <img
      src={`${BASE}/Aboutus/factory${n}.jpg`}
      alt={`Factory ${n}`}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 border-b border-border" style={{ background: "hsl(36 40% 96%)" }}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8" style={{ background: "hsl(16 78% 48%)" }} />
              <span className="font-bold uppercase tracking-widest text-sm" style={{ color: "hsl(16 78% 48%)" }}>Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6" style={{ color: "hsl(20 62% 17%)" }}>About Koroda Furniture</h1>
            <p className="max-w-2xl text-lg leading-relaxed" style={{ color: "hsl(20 20% 42%)" }}>
              For over three decades, Koroda Furniture has been manufacturing high-quality steel furniture that combines durability, functionality, and design — trusted by families, businesses, institutions, and places of worship across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Since 1995</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Three Decades of Craftsmanship</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Koroda Furniture was founded in 1995 in Maharashtra with a simple vision: to make premium steel furniture accessible to every Indian household and business. Starting with a small workshop and a handful of skilled craftsmen, we grew steadily by never compromising on quality.
                </p>
                <p>
                  Today, we operate a modern manufacturing facility equipped with precision CNC machines, automated powder coating lines, and stringent quality control processes — all while retaining the skilled craftsmanship that defined our early years.
                </p>
                <p>
                  Our product range has expanded from basic storage cabinets to specialized offerings including temple offering boxes (hundis), high-security safes, multi-drawer units, premium wardrobe collections, and institutional locker systems — all made from the finest CRCA steel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Factory, num: "30+", label: "Years in Manufacturing" },
                { icon: Users, num: "500+", label: "Dealer Partners" },
                { icon: Award, num: "BIS", label: "Certified Products" },
                { icon: Leaf, num: "Eco", label: "Responsible Processes" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-muted p-8 text-center border border-border">
                    <Icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                    <div className="text-3xl font-serif font-bold text-primary mb-1">{item.num}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeInUp} className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Our Values</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold text-primary">What We Stand For</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Quality First",
                desc: "We source the finest CRCA steel and maintain rigorous quality checks at every stage of production — from raw material to finished product.",
              },
              {
                title: "Customer Trust",
                desc: "Our relationship with customers doesn't end at the sale. We stand behind every product with responsive after-sales support and genuine spare parts.",
              },
              {
                title: "Innovation",
                desc: "We continuously invest in design research and new manufacturing technologies to bring you products that meet evolving needs and tastes.",
              },
              {
                title: "Affordability",
                desc: "Premium quality should not come at a premium price. We optimize our processes to offer the best value without cutting corners.",
              },
              {
                title: "Sustainability",
                desc: "Steel is one of the most recyclable materials on earth. Our manufacturing processes minimize waste and our products are designed to last a lifetime.",
              },
              {
                title: "Community",
                desc: "We are proud to employ skilled workers from our local communities and contribute to the Make in India initiative.",
              },
            ].map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 border border-border hover:border-secondary transition-colors">
                <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-serif font-bold text-xl text-primary mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-24" style={{ background: "hsl(36 35% 95%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8" style={{ background: "hsl(16 78% 48%)" }} />
                <span className="font-bold uppercase tracking-widest text-sm" style={{ color: "hsl(16 78% 48%)" }}>Our Factory</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6" style={{ color: "hsl(20 62% 17%)" }}>State-of-the-Art Manufacturing</h2>
              <p className="leading-relaxed mb-6" style={{ color: "hsl(20 15% 42%)" }}>
                Our modern facility spans over 50,000 square feet and is equipped with the latest technology for precision steel fabrication, forming, welding, and finishing.
              </p>
              <ul className="space-y-3">
                {[
                  "CNC precision cutting and bending machines",
                  "Automated 7-stage pre-treatment plant",
                  "Electrostatic powder coating with 200+ color options",
                  "Integrated quality inspection lab",
                  "ISO 9001:2015 certified processes",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: "hsl(20 20% 35%)" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "hsl(16 78% 48%)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-2"
            >
              <FactoryPhoto n={1} className="col-span-2 h-48 w-full rounded-none" />
              <FactoryPhoto n={2} className="h-36 w-full rounded-none" />
              <FactoryPhoto n={3} className="h-36 w-full rounded-none" />
              <FactoryPhoto n={4} className="h-36 w-full rounded-none" />
              <FactoryPhoto n={5} className="h-36 w-full rounded-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "hsl(36 45% 90%)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: "hsl(20 62% 17%)" }}>Explore Our Product Range</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "hsl(20 20% 38%)" }}>Discover our full collection of premium steel furniture designed for every need.</p>
          <Link href="/products">
            <Button size="lg" className="rounded-none font-bold px-10 py-6 text-base group" style={{ background: "hsl(20 62% 17%)", color: "#fff" }}>
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
