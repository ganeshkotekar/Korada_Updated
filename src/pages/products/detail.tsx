import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, getProduct, Product } from "@/data/products";
import { useState, useCallback } from "react";

interface ProductDetailProps {
  params: { id: string };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function ProductGallery({ images, fallbackImages, title, icon: Icon }: { images: string[]; fallbackImages?: string[]; title: string; icon: any }) {
  const [selected, setSelected] = useState(0);
  const [imgSrcs, setImgSrcs] = useState<Record<number, string>>({});
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const allImages = [...images, ...(fallbackImages || [])].filter((v, i, a) => a.indexOf(v) === i).slice(0, 5);

  const handleError = (idx: number) => {
    const currentSrc = imgSrcs[idx] ?? allImages[idx];
    if (fallbackImages && fallbackImages.length > 0) {
      const fbIdx = fallbackImages.indexOf(currentSrc);
      const nextFb = fbIdx < 0 ? fallbackImages[0] : fallbackImages[fbIdx + 1];
      if (nextFb) { setImgSrcs(prev => ({ ...prev, [idx]: nextFb })); return; }
    }
    setFailed(prev => ({ ...prev, [idx]: true }));
  };

  return (
    <div>
      <div className="bg-white border border-border aspect-square flex items-center justify-center overflow-hidden relative">
        {failed[selected] ? (
          <Icon className="w-32 h-32 text-primary/15" />
        ) : (
          <img
            key={`${selected}-${imgSrcs[selected] ?? allImages[selected]}`}
            src={imgSrcs[selected] ?? allImages[selected]}
            alt={`${title} view ${selected + 1}`}
            className="w-full h-full object-contain p-6"
            onError={() => handleError(selected)}
          />
        )}
        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
          Premium Quality
        </div>
      </div>

      {allImages.length > 1 && (
        <div className="flex gap-3 mt-4 flex-wrap">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-16 h-16 border-2 overflow-hidden transition-colors ${
                selected === i ? "border-secondary" : "border-border hover:border-muted-foreground"
              }`}
              data-testid={`thumb-${i}`}
            >
              {failed[i] ? (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary/20" />
                </div>
              ) : (
                <img
                  src={img}
                  alt={`${title} thumbnail ${i + 1}`}
                  className="w-full h-full object-contain p-1"
                  onError={() => setFailed(prev => ({ ...prev, [i]: true }))}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product: rp }: { product: Product }) {
  const [imgFailed, setImgFailed] = useState(false);
  const RIcon = rp.icon;
  return (
    <Link href={`/products/${rp.id}`}>
      <div className="group border border-border hover:border-secondary hover:shadow-md transition-all duration-300 bg-white overflow-hidden" data-testid={`card-product-${rp.id}`}>
        <div className="h-44 bg-muted overflow-hidden flex items-center justify-center">
          {imgFailed ? (
            <RIcon className="w-16 h-16 text-primary/20" />
          ) : (
            <img
              src={rp.image}
              alt={rp.title}
              className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
        <div className="p-5">
          <h3 className="font-serif font-bold text-primary group-hover:text-secondary transition-colors">{rp.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{rp.description}</p>
          <div className="mt-3 flex items-center text-sm font-bold text-secondary">
            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = getProduct(params.id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-3">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="rounded-none">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <ProductGallery images={product.images} fallbackImages={product.fallbackImages} title={product.title} icon={product.icon} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-secondary text-xs font-bold uppercase tracking-widest mb-3 capitalize">{product.category}</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-5">{product.title}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="font-serif font-bold text-xl text-primary mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dealers">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-none font-bold px-8 w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/catalogue">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none font-medium px-8 w-full sm:w-auto">
                    Download Catalogue
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16" style={{ background: "hsl(36 35% 95%)" }}>
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-primary mb-8">Technical Specifications</motion.h2>
            <div className="max-w-2xl">
              <table className="w-full border-collapse bg-white">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={`border border-border ${i % 2 === 0 ? "bg-white" : "bg-muted/50"}`}>
                      <td className="px-6 py-4 font-medium text-primary w-1/2">{spec.label}</td>
                      <td className="px-6 py-4 text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16" style={{ background: "hsl(36 40% 92%)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: "hsl(20 62% 17%)" }}>Why Choose Koroda {product.title}?</h2>
            <p className="mb-10" style={{ color: "hsl(20 15% 42%)" }}>
              Each product is individually inspected before shipping. We back every product with a manufacturer's warranty and a dedicated service network.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {["Manufacturer Warranty", "Pan-India Delivery", "After-Sales Service"].map((item, i) => (
                <div key={i} className="bg-white border p-5 text-center" style={{ borderColor: "hsl(36 20% 84%)" }}>
                  <CheckCircle className="w-6 h-6 mx-auto mb-2" style={{ color: "hsl(16 78% 48%)" }} />
                  <div className="text-sm font-medium" style={{ color: "hsl(20 35% 20%)" }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(rp => (
                <RelatedCard key={rp.id} product={rp} />
              ))}
            </div>

            <div className="mt-10">
              <Link href="/products">
                <button className="flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to All Products
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
