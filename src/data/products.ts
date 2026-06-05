import { Shield, Lock, Archive, Grid, Package, BookOpen, Layers, Box, Gem, Star } from "lucide-react";

// Use local images as primary, old site as fallback
const LOCAL = "/images";
const BASE = "https://koradafurniture.in";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  fallbackImages: string[];
  icon: any;
  category: "cabinet" | "wardrobe" | "locker" | "safe" | "specialty";
  features: string[];
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "single-door",
    title: "Single Door Cabinets",
    description: "Compact and robust steel storage solutions ideal for tight spaces and personal organization.",
    image: `${LOCAL}/single-door.png`,
    images: [
      `${LOCAL}/single-door.png`,
    ],
    fallbackImages: [
      `${BASE}/product/SINGLE%20DOOOR/sdproduct.jpg`,
      `${BASE}/product/SINGLE%20DOOOR/GR1.png`,
      `${BASE}/product/SINGLE%20DOOOR/PINK001.png`,
      `${BASE}/product/SINGLE%20DOOOR/rani1.png`,
    ],
    icon: Lock,
    category: "cabinet",
    features: [
      "Premium CRCA steel construction",
      "Multi-point locking mechanism",
      "Adjustable shelving system",
      "Powder-coated rust-resistant finish",
      "Ventilation louvers",
    ],
    specs: [
      { label: "Height", value: "1980 mm" },
      { label: "Width", value: "450 mm" },
      { label: "Depth", value: "450 mm" },
      { label: "Material Thickness", value: "0.8 mm - 1.2 mm" },
      { label: "Shelves", value: "4 Adjustable" },
    ],
  },
  {
    id: "double-door",
    title: "Double Door Cabinets",
    description: "Versatile storage cabinets for offices and homes, offering maximum capacity and organization.",
    image: `${LOCAL}/double-door.png`,
    images: [
      `${LOCAL}/double-door.png`,
    ],
    fallbackImages: [
      `${BASE}/product/DOUBLE%20DOOR/ddproduct.jpg`,
      `${BASE}/product/DOUBLE%20DOOR/RANI1.png`,
      `${BASE}/product/DOUBLE%20DOOR/PINK1.png`,
      `${BASE}/product/DOUBLE%20DOOR/BR1.png`,
    ],
    icon: Archive,
    category: "cabinet",
    features: [
      "Heavy-duty CRCA steel body",
      "Three-way bolting mechanism",
      "Reinforced doors for extra strength",
      "Load bearing capacity of 40kg per shelf",
      "Anti-bacterial powder coating",
    ],
    specs: [
      { label: "Height", value: "1980 mm" },
      { label: "Width", value: "900 mm" },
      { label: "Depth", value: "450 mm" },
      { label: "Material Thickness", value: "0.8 mm - 1.2 mm" },
      { label: "Shelves", value: "4 Adjustable" },
    ],
  },
  {
    id: "slimline-cabinet",
    title: "Slimline Cabinets",
    description: "Elegant, space-saving designs that fit seamlessly into modern office environments.",
    image: `${LOCAL}/slimline.png`,
    images: [
      `${LOCAL}/slimline.png`,
    ],
    fallbackImages: [
      `${BASE}/product/SLIM%20LINE/GREYSL2.png`,
    ],
    icon: Layers,
    category: "cabinet",
    features: [
      "Sleek slim-profile design",
      "Concealed hinges for clean look",
      "High security cam lock",
      "Scratch-resistant texture finish",
      "Leveling glides for stability",
    ],
    specs: [
      { label: "Height", value: "1980 mm" },
      { label: "Width", value: "600 mm" },
      { label: "Depth", value: "400 mm" },
      { label: "Material Thickness", value: "0.8 mm" },
      { label: "Shelves", value: "4 Adjustable" },
    ],
  },
  {
    id: "locker-cabinet",
    title: "Locker Cabinets",
    description: "Secure personal storage cabinets for offices, schools, hospitals, and industrial environments.",
    image: `${LOCAL}/lockers.png`,
    images: [
      `${LOCAL}/lockers.png`,
    ],
    fallbackImages: [
      `${BASE}/product/OFFICE%20CABINET/18LOCKER2.png`,
    ],
    icon: Lock,
    category: "cabinet",
    features: [
      "Individual compartment locking",
      "Available in single and double-tier configurations",
      "Name card holder on each locker",
      "Ventilated louvered doors",
      "Durable powder-coated finish",
    ],
    specs: [
      { label: "Height", value: "1800 mm" },
      { label: "Width", value: "900 mm" },
      { label: "Depth", value: "450 mm" },
      { label: "Material Thickness", value: "0.8 mm" },
      { label: "Compartments", value: "2 - 12 (customizable)" },
    ],
  },
  {
    id: "office-cabinet",
    title: "Office Cabinets",
    description: "Professional grade filing and storage systems designed for corporate and institutional needs.",
    image: `${LOCAL}/office-cabinet.png`,
    images: [
      `${LOCAL}/office-cabinet.png`,
    ],
    fallbackImages: [
      `${BASE}/product/OFFICE%20CABINET/OFFICE1.png`,
      `${BASE}/product/OFFICE%20CABINET/COAT.png`,
      `${BASE}/product/OFFICE%20CABINET/SUPER1.png`,
    ],
    icon: Package,
    category: "cabinet",
    features: [
      "Glass or solid steel door options",
      "Central locking system",
      "Smooth glide drawer mechanism (optional)",
      "A4/Legal file compatibility",
      "Label holders on shelves",
    ],
    specs: [
      { label: "Height", value: "1830 mm" },
      { label: "Width", value: "900 mm" },
      { label: "Depth", value: "400 mm" },
      { label: "Material Thickness", value: "0.8 mm" },
      { label: "Shelves", value: "4 Adjustable" },
    ],
  },
  {
    id: "small-office-cabinet",
    title: "Small Office Cabinets",
    description: "Compact office storage solutions for personal desks, under-counter areas, and small workspaces.",
    image: `${LOCAL}/office-cabinet.png`,
    images: [
      `${LOCAL}/office-cabinet.png`,
    ],
    fallbackImages: [
      `${BASE}/product/OFFICE%20CABINET/SOFFICE1.png`,
      `${BASE}/product/OFFICE%20CABINET/table2.png`,
    ],
    icon: Box,
    category: "cabinet",
    features: [
      "Ideal for under-desk storage",
      "Push-button or key lock options",
      "Anti-tilt safety mechanism",
      "Smooth full-extension drawers",
      "Recessed handle design",
    ],
    specs: [
      { label: "Height", value: "720 mm" },
      { label: "Width", value: "600 mm" },
      { label: "Depth", value: "400 mm" },
      { label: "Material Thickness", value: "0.8 mm" },
      { label: "Drawers/Shelves", value: "2 - 4" },
    ],
  },
  {
    id: "wardrobe",
    title: "Wardrobes",
    description: "Spacious steel almirahs built for residential use, featuring secure lockers and elegant finishes.",
    image: `${LOCAL}/wardrobe.png`,
    images: [
      `${LOCAL}/wardrobe.png`,
    ],
    fallbackImages: [
      `${BASE}/product/OFFICE%20CABINET/warddrob2.png`,
    ],
    icon: Grid,
    category: "wardrobe",
    features: [
      "Built-in electronic safe/locker",
      "Full-length mirror (optional)",
      "Hanging rod and bangle box",
      "Secret internal compartment",
      "Premium dual-tone finish",
    ],
    specs: [
      { label: "Height", value: "1980 mm" },
      { label: "Width", value: "900 mm / 1050 mm" },
      { label: "Depth", value: "500 mm" },
      { label: "Material Thickness", value: "0.9 mm - 1.2 mm" },
      { label: "Lock", value: "Premium 7-lever lock" },
    ],
  },
  {
    id: "lockers",
    title: "Staff Lockers",
    description: "Secure multi-compartment locker units for factories, schools, hospitals, and gyms.",
    image: `${LOCAL}/lockers.png`,
    images: [
      `${LOCAL}/lockers.png`,
    ],
    fallbackImages: [
      `${BASE}/product/LLOCKERS/BANK4.png`,
      `${BASE}/product/LLOCKERS/JAGUAR2.png`,
    ],
    icon: Lock,
    category: "locker",
    features: [
      "Available in 6, 9, 12, 18 compartment configurations",
      "Individual padlock/cam lock facilities",
      "Louvered doors for ventilation",
      "Name card holders",
      "Sloping top option available",
    ],
    specs: [
      { label: "Height", value: "1980 mm" },
      { label: "Width", value: "900 mm" },
      { label: "Depth", value: "450 mm" },
      { label: "Material Thickness", value: "0.8 mm" },
      { label: "Compartments", value: "Customizable" },
    ],
  },
  {
    id: "multi-drawer",
    title: "Multi Drawer Safe",
    description: "High-security organization for sensitive documents, cash, and valuables.",
    image: `${LOCAL}/safe.png`,
    images: [
      `${LOCAL}/safe.png`,
    ],
    fallbackImages: [
      `${BASE}/product/LLOCKERS/JAGUAR2.png`,
    ],
    icon: Shield,
    category: "safe",
    features: [
      "Double-walled armor plate construction",
      "Fire-resistant compound fill",
      "High-precision combination/biometric locks",
      "Heavy duty telescopic channels",
      "Anti-drill plates on all sides",
    ],
    specs: [
      { label: "Height", value: "1350 mm" },
      { label: "Width", value: "550 mm" },
      { label: "Depth", value: "650 mm" },
      { label: "Material Thickness", value: "2.5 mm outer, 1.5 mm inner" },
      { label: "Drawers", value: "4" },
    ],
  },
  {
    id: "offering-box",
    title: "Offering Box (Hundi)",
    description: "Traditional yet secure religious offering boxes for temples and places of worship.",
    image: `${LOCAL}/offering-box.png`,
    images: [
      `${LOCAL}/offering-box.png`,
    ],
    fallbackImages: [
      `${BASE}/product/LLOCKERS/temple1.png`,
    ],
    icon: BookOpen,
    category: "specialty",
    features: [
      "High-security dual locking mechanism",
      "Anti-fishing coin/note slot design",
      "Heavy gauge steel construction",
      "Floor anchoring bolt provision",
      "Premium decorative finish options",
    ],
    specs: [
      { label: "Height", value: "900 mm" },
      { label: "Width", value: "450 mm" },
      { label: "Depth", value: "450 mm" },
      { label: "Material Thickness", value: "1.6 mm - 2.0 mm" },
      { label: "Weight", value: "45 kg" },
    ],
  },
  {
    id: "samruddhi",
    title: "Samruddhi Collection",
    description: "Our flagship premium wardrobe and cabinet collection — crafted for those who demand the finest in home storage.",
    image: `${LOCAL}/wardrobe.png`,
    images: [
      `${LOCAL}/wardrobe.png`,
    ],
    fallbackImages: [
      `${BASE}/product/LLOCKERS/SAMRUDDI2.png`,
    ],
    icon: Gem,
    category: "specialty",
    features: [
      "Premium 1.2 mm thick CRCA steel",
      "Exclusive designer color options",
      "Soft-close hinges and drawer slides",
      "In-built jewelry compartment",
      "Lifetime structural warranty",
    ],
    specs: [
      { label: "Height", value: "2100 mm" },
      { label: "Width", value: "1200 mm" },
      { label: "Depth", value: "550 mm" },
      { label: "Material Thickness", value: "1.2 mm" },
      { label: "Finish", value: "10+ Exclusive Colors" },
    ],
  },
  {
    id: "saraf",
    title: "Saraf Collection",
    description: "The Saraf series — pearl-finish luxury steel furniture inspired by Indian artisanal craftsmanship.",
    image: `${LOCAL}/wardrobe.png`,
    images: [
      `${LOCAL}/wardrobe.png`,
    ],
    fallbackImages: [
      `${BASE}/product/LLOCKERS/SARAFF1.png`,
    ],
    icon: Star,
    category: "specialty",
    features: [
      "Unique pearl/metallic finish options",
      "Laser-cut decorative door panels",
      "Premium European-style hinges",
      "Gold-toned handle fittings",
      "Special surface texture options",
    ],
    specs: [
      { label: "Height", value: "2000 mm" },
      { label: "Width", value: "900 mm - 1200 mm" },
      { label: "Depth", value: "520 mm" },
      { label: "Material Thickness", value: "1.0 mm - 1.2 mm" },
      { label: "Finish", value: "Pearl, Metallic, Embossed" },
    ],
  },
];

export const getProduct = (id: string) => products.find(p => p.id === id);
