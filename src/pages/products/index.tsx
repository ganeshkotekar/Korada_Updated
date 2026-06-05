import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Package, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const categoryLabels: Record<string, string> = {
  cabinet: "Cabinets",
  wardrobe: "Wardrobes",
  locker: "Lockers",
  safe: "Safes",
  specialty: "Specialty",
};

const categories = ["all", "cabinet", "wardrobe", "locker", "safe", "specialty"] as const;

function ProductImg({ src, fallbackSrcs, title, icon: Icon }: { src: string; fallbackSrcs?: string[]; title: string; icon: any }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (fallbackSrcs && fallbackSrcs.length > 0) {
      const idx = fallbackSrcs.indexOf(currentSrc);
      const next = idx < 0 ? fallbackSrcs[0] : fallbackSrcs[idx + 1];
      if (next) { setCurrentSrc(next); return; }
    }
    setFailed(true);
  };

  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <Icon className="w-16 h-16 text-primary/20" />
      </div>
    );
  }
  return (
    <img
      src={currentSrc}
      alt={title}
      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
      onError={handleError}
    />
  );
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = products.filter(p => {
    const matchCat = category === "all" || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border" style={{ background: "hsl(36 40% 96%)" }}>
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8" style={{ background: "hsl(16 78% 48%)" }} />
              <span className="font-bold uppercase tracking-widest text-sm" style={{ color: "hsl(16 78% 48%)" }}>Explore Our Range</span>
            </div>
            <h1 className="text-5xl font-serif font-bold mb-4" style={{ color: "hsl(20 62% 17%)" }}>Our Products</h1>
            <p className="max-w-xl text-lg" style={{ color: "hsl(20 20% 42%)" }}>
              Explore our complete range of premium steel furniture, engineered for quality, durability, and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-border sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  data-testid={`filter-${cat}`}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 text-sm font-medium border transition-colors ${
                    category === cat
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : "bg-white text-foreground border-border hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {cat === "all" ? "All Products" : categoryLabels[cat]}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-9 rounded-none"
                value={search}
                onChange={e => setSearch(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map(product => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <Link href={`/products/${product.id}`}>
                    <div
                      className="group bg-white border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
                      data-testid={`card-product-${product.id}`}
                    >
                      <div className="h-52 bg-muted relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 bottom-0">
                          <ProductImg src={product.image} fallbackSrcs={product.fallbackImages} title={product.title} icon={product.icon} />
                        </div>
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 font-medium z-10">
                          {categoryLabels[product.category]}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-serif font-bold text-primary group-hover:text-secondary transition-colors text-lg">{product.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 mb-4 flex-1 line-clamp-3">{product.description}</p>
                        <div className="flex items-center text-sm font-bold text-secondary mt-auto">
                          View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-3">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">We offer custom-sized and custom-colored steel furniture for bulk and institutional orders.</p>
          <Link href="/dealers">
            <button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-bold px-8 py-3 text-sm">
              Contact a Dealer
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
