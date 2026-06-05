import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Truck, Award, Headphones, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "/images/hero-slide-1.jpg",
    title: "Premium Steel Furniture",
    sub: "Built to Last Generations",
  },
  {
    image: "/images/hero-slide-2.jpg",
    title: "Secure Your Valuables",
    sub: "High-Security Lockers & Safes",
  },
  {
    image: "/images/hero-slide-3.jpg",
    title: "Elegant Storage Solutions",
    sub: "For Home, Office & Industry",
  },
  {
    image: "/images/hero-slide-4.jpg",
    title: "Crafted in India",
    sub: "Since 1985 — ISO Certified",
  },
];

const stats = [
  { value: "35+", label: "Years of Excellence" },
  { value: "500+", label: "Dealer Network" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "ISO", label: "9001:2015 Certified" },
];

const features = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "ISI-standard steel construction with anti-rust powder coating." },
  { icon: Award, title: "ISO Certified", desc: "ISO 9001:2015 certified manufacturing facility." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Efficient logistics network across all 28 states." },
  { icon: Headphones, title: "After-Sales Support", desc: "Dedicated service team for warranty and maintenance." },
];

const featuredIds = ["single-door", "double-door", "wardrobe", "samruddhi", "saraf", "lockers"];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[85vh] overflow-hidden" style={{ background: "hsl(36 40% 96%)" }}>
      {/* Right side image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <img
          key={current}
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          style={{ imageRendering: "auto" }}
        />
        {/* Fade to left */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(36 40% 96%), transparent 40%)" }} />
      </div>

      {/* Left content */}
      <div className="relative z-10 h-full flex items-center min-h-[85vh]">
        <div className="container mx-auto px-4">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl py-24"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8" style={{ background: "hsl(16 78% 48%)" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(16 78% 48%)" }}>
                {slide.sub}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-5" style={{ color: "hsl(20 62% 17%)" }}>
              {slide.title}
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "hsl(20 20% 40%)" }}>
              India's trusted manufacturer of premium quality steel furniture since 1985. ISO 9001:2015 certified.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products">
                <Button size="lg" className="rounded-none font-bold px-8 text-base" style={{ background: "hsl(20 62% 17%)", color: "#fff" }}>
                  Explore Products
                </Button>
              </Link>
              <Link href="/catalogue">
                <Button size="lg" variant="outline" className="rounded-none font-medium px-8 text-base border-2" style={{ borderColor: "hsl(20 62% 17%)", color: "hsl(20 62% 17%)" }}>
                  Download Catalogue
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2" : "w-2 h-2 opacity-40 hover:opacity-70"}`}
            style={{ background: i === current ? "hsl(16 78% 48%)" : "hsl(20 62% 17%)" }}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 transition-colors"
        style={{ background: "hsl(20 62% 17% / 0.12)", color: "hsl(20 62% 17%)" }}
        onMouseOver={e => (e.currentTarget.style.background = "hsl(20 62% 17% / 0.22)")}
        onMouseOut={e => (e.currentTarget.style.background = "hsl(20 62% 17% / 0.12)")}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent(c => (c + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 transition-colors"
        style={{ background: "hsl(20 62% 17% / 0.12)", color: "hsl(20 62% 17%)" }}
        onMouseOver={e => (e.currentTarget.style.background = "hsl(20 62% 17% / 0.22)")}
        onMouseOut={e => (e.currentTarget.style.background = "hsl(20 62% 17% / 0.12)")}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [failed, setFailed] = useState(false);
  const [src, setSrc] = useState(product.image);
  const Icon = product.icon;

  const handleError = () => {
    // Try fallback images
    if (product.fallbackImages && product.fallbackImages.length > 0) {
      const idx = product.fallbackImages.indexOf(src);
      const next = product.fallbackImages[idx + 1];
      if (next) { setSrc(next); return; }
    }
    setFailed(true);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="group bg-white border border-border hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
        style={{ "--tw-shadow-color": "hsl(20 62% 17% / 0.12)" } as any}
      >
        <div className="h-52 relative overflow-hidden flex items-center justify-center" style={{ background: "hsl(36 30% 95%)" }}>
          {failed ? (
            <Icon className="w-16 h-16" style={{ color: "hsl(20 62% 17% / 0.15)" }} />
          ) : (
            <img
              src={src}
              alt={product.title}
              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              onError={handleError}
            />
          )}
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif font-bold text-lg group-hover:opacity-70 transition-opacity" style={{ color: "hsl(20 62% 17%)" }}>
            {product.title}
          </h3>
          <p className="text-sm mt-1 mb-4 flex-1 line-clamp-2" style={{ color: "hsl(20 20% 45%)" }}>
            {product.description}
          </p>
          <div className="flex items-center text-sm font-bold mt-auto" style={{ color: "hsl(16 78% 45%)" }}>
            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function FactoryImg({ n }: { n: number }) {
  const [failed, setFailed] = useState(false);
  // Use local about-factory image for first, fallback to old site
  const src = n === 1 ? "/images/about-factory.png" : `https://koradafurniture.in/Aboutus/factory${n}.jpg`;
  if (failed) {
    return (
      <div className={`border flex items-center justify-center ${n === 1 ? "aspect-video col-span-2" : "aspect-square"}`}
        style={{ background: "hsl(36 25% 92%)", borderColor: "hsl(36 20% 86%)" }}>
        <span className="text-xs" style={{ color: "hsl(20 20% 55%)" }}>Factory</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`Koroda factory ${n}`}
      className={`object-cover ${n === 1 ? "aspect-video col-span-2" : "aspect-square"} w-full`}
      style={{ border: "1px solid hsl(36 20% 86%)" }}
      onError={() => setFailed(true)}
    />
  );
}

export default function Home() {
  const featured = products.filter(p => featuredIds.includes(p.id)).slice(0, 6);

  return (
    <div>
      <HeroSlider />

      {/* Stats strip */}
      <section className="py-10 border-y" style={{ background: "hsl(36 30% 94%)", borderColor: "hsl(36 20% 88%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-serif font-bold" style={{ color: "hsl(20 62% 17%)" }}>{stat.value}</div>
                <div className="text-sm mt-1 font-medium" style={{ color: "hsl(20 20% 45%)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24" style={{ background: "hsl(0 0% 100%)" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "hsl(16 78% 48%)" }} />
              <span className="font-bold uppercase tracking-widest text-xs" style={{ color: "hsl(16 78% 48%)" }}>Our Catalog</span>
              <div className="h-px w-12" style={{ background: "hsl(16 78% 48%)" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: "hsl(20 62% 17%)" }}>Featured Products</h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "hsl(20 20% 45%)" }}>
              Precision-engineered steel furniture for every need — from personal wardrobes to institutional lockers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="rounded-none font-bold px-10" style={{ background: "hsl(20 62% 17%)", color: "#fff" }}>
                View All Products <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Koroda */}
      <section className="py-24" style={{ background: "hsl(36 35% 95%)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "hsl(16 78% 48%)" }} />
              <span className="font-bold uppercase tracking-widest text-xs" style={{ color: "hsl(16 78% 48%)" }}>Why Choose Us</span>
              <div className="h-px w-12" style={{ background: "hsl(16 78% 48%)" }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: "hsl(20 62% 17%)" }}>The Koroda Difference</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 text-center border hover:shadow-md transition-shadow group"
                style={{ borderColor: "hsl(36 20% 88%)" }}
              >
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5 rounded-full"
                  style={{ background: "hsl(36 40% 93%)", border: "2px solid hsl(36 25% 86%)" }}>
                  <feat.icon className="w-7 h-7" style={{ color: "hsl(16 78% 48%)" }} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2" style={{ color: "hsl(20 62% 17%)" }}>{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(20 15% 48%)" }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory showcase */}
      <section className="py-24" style={{ background: "hsl(0 0% 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-10" style={{ background: "hsl(16 78% 48%)" }} />
                <span className="font-bold uppercase tracking-widest text-xs" style={{ color: "hsl(16 78% 48%)" }}>Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight" style={{ color: "hsl(20 62% 17%)" }}>
                Manufacturing Excellence Since 1985
              </h2>
              <p className="text-lg mb-5 leading-relaxed" style={{ color: "hsl(20 15% 42%)" }}>
                Koroda Furniture Pvt. Ltd. began its journey in Hubli, Karnataka with a vision to bring durable, high-quality steel furniture to every Indian household and institution.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "hsl(20 15% 48%)" }}>
                Today, we operate a modern, ISO-certified manufacturing plant with cutting-edge machinery and a dedicated quality control team — ensuring every product meets the highest standards.
              </p>
              <Link href="/about">
                <Button className="rounded-none font-bold px-8" style={{ background: "hsl(20 62% 17%)", color: "#fff" }}>
                  Learn Our Story <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map(n => (
                  <FactoryImg key={n} n={n} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "hsl(36 45% 90%)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: "hsl(20 62% 17%)" }}>Ready to Order?</h2>
          <p className="mb-8 text-lg max-w-lg mx-auto" style={{ color: "hsl(20 20% 38%)" }}>
            Contact our nearest dealer or download our full catalogue to explore all product options.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dealers">
              <Button size="lg" className="rounded-none font-bold px-8" style={{ background: "hsl(20 62% 17%)", color: "#fff" }}>
                Find a Dealer
              </Button>
            </Link>
            <Link href="/catalogue">
              <Button size="lg" variant="outline" className="rounded-none font-medium px-8 border-2"
                style={{ borderColor: "hsl(20 62% 17%)", color: "hsl(20 62% 17%)" }}>
                Download Catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
