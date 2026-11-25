const image1 = "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80";
const image2 = "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80";
const image3 = "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80";
const image4 = "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80";
const image5 = "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80";
const image6 = "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80";
const image7 = "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80";
const image8 = "https://images.unsplash.com/photo-1570616107233-77a7b8f7a7f5?auto=format&fit=crop&w=600&q=80";
const image9 = "https://images.unsplash.com/photo-1608571423902-eed758ea47f?auto=format&fit=crop&w=600&q=80";
const image10 = "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80";

const products = [
  // BODY WASH
  { id: 1, name: "Deep Moisture Body Wash", brand: "Dove", category: "Body Wash", price: 249, rating: 4.8, image: image1, description: "Moisturizing body wash for everyday use." },
  { id: 2, name: "Refreshing Citrus Body Wash", brand: "Nivea", category: "Body Wash", price: 220, rating: 4.5, image: image2, description: "Refreshing citrus inspired body wash." },
  { id: 3, name: "Rose & Peony Body Wash", brand: "Lux", category: "Body Wash", price: 180, rating: 4.4, image: image3, description: "Floral scented body wash." },
  { id: 4, name: "Cocoa Butter Body Wash", brand: "Palmolive", category: "Body Wash", price: 199, rating: 4.6, image: image4, description: "Cocoa inspired creamy body wash." },
  { id: 5, name: "Vanilla Body Wash", brand: "Plum", category: "Body Wash", price: 349, rating: 4.7, image: image5, description: "Vanilla scented body wash." },
  { id: 6, name: "Ubtan Body Wash", brand: "Mamaearth", category: "Body Wash", price: 299, rating: 4.3, image: image6, description: "Ubtan inspired body wash." },
  { id: 7, name: "Berry Body Wash", brand: "The Body Shop", category: "Body Wash", price: 499, rating: 4.6, image: image7, description: "Berry scented refreshing body wash." },
  { id: 8, name: "Aloe Body Wash", brand: "Biotique", category: "Body Wash", price: 210, rating: 4.2, image: image8, description: "Aloe inspired daily body wash." },

  // FACE WASH
  { id: 9, name: "Gentle Foaming Cleanser", brand: "Cetaphil", category: "Face Wash", price: 399, rating: 4.8, image: image9, description: "Gentle facial cleanser." },
  { id: 10, name: "Salicylic Acid Face Wash", brand: "Minimalist", category: "Face Wash", price: 299, rating: 4.7, image: image10, description: "Salicylic acid facial cleanser." },
  { id: 11, name: "Neem Face Wash", brand: "Himalaya", category: "Face Wash", price: 150, rating: 4.4, image: image1, description: "Neem inspired facial cleanser." },
  { id: 12, name: "Acne Control Face Wash", brand: "The Derma Co", category: "Face Wash", price: 249, rating: 4.5, image: image2, description: "Daily cleansing face wash." },
  { id: 13, name: "Vitamin C Face Wash", brand: "Mamaearth", category: "Face Wash", price: 249, rating: 4.3, image: image3, description: "Vitamin C inspired face cleanser." },
  { id: 14, name: "Hydrating Cleanser", brand: "CeraVe", category: "Face Wash", price: 599, rating: 4.8, image: image4, description: "Hydrating facial cleanser." },
  { id: 15, name: "Tea Tree Face Wash", brand: "Good Vibes", category: "Face Wash", price: 199, rating: 4.4, image: image5, description: "Tea tree inspired cleanser." },
  { id: 16, name: "Aloe Gentle Face Wash", brand: "Plum", category: "Face Wash", price: 275, rating: 4.5, image: image6, description: "Gentle aloe inspired face wash." },

  // MOISTURIZER
  { id: 17, name: "Daily Moisturizing Cream", brand: "Cetaphil", category: "Moisturizer", price: 450, rating: 4.7, image: image7, description: "Daily moisturizing cream." },
  { id: 18, name: "Ceramide Moisturizer", brand: "Minimalist", category: "Moisturizer", price: 349, rating: 4.6, image: image8, description: "Ceramide based moisturizer." },
  { id: 19, name: "Light Moisturizer", brand: "Ponds", category: "Moisturizer", price: 199, rating: 4.3, image: image9, description: "Lightweight moisturizer." },
  { id: 20, name: "Hydro Boost Gel", brand: "Neutrogena", category: "Moisturizer", price: 499, rating: 4.8, image: image10, description: "Refreshing gel moisturizer." },
  { id: 21, name: "Oil Free Moisturizer", brand: "Mamaearth", category: "Moisturizer", price: 299, rating: 4.4, image: image1, description: "Lightweight oil free moisturizer." },
  { id: 22, name: "Aloe Moisturizer", brand: "The Body Shop", category: "Moisturizer", price: 599, rating: 4.6, image: image2, description: "Aloe inspired moisturizer." },

  // SUNSCREEN
  { id: 23, name: "SPF 50 Sunscreen", brand: "Minimalist", category: "Sunscreen", price: 399, rating: 4.8, image: image3, description: "Daily SPF 50 sunscreen." },
  { id: 24, name: "Ultra Sheer SPF 50", brand: "Neutrogena", category: "Sunscreen", price: 549, rating: 4.7, image: image4, description: "Lightweight sunscreen." },
  { id: 25, name: "Aqua Sunscreen", brand: "Dot & Key", category: "Sunscreen", price: 449, rating: 4.5, image: image5, description: "Aqua inspired sunscreen." },
  { id: 26, name: "Sun Expert SPF 50", brand: "Lakme", category: "Sunscreen", price: 350, rating: 4.4, image: image6, description: "Daily sun protection." },
  { id: 27, name: "Vitamin C Sunscreen", brand: "Mamaearth", category: "Sunscreen", price: 399, rating: 4.3, image: image7, description: "Vitamin C inspired sunscreen." },
  { id: 28, name: "Glow Sunscreen", brand: "Aqualogica", category: "Sunscreen", price: 399, rating: 4.6, image: image8, description: "Lightweight sunscreen." },

  // SERUM
  { id: 29, name: "Vitamin C Serum", brand: "Minimalist", category: "Serum", price: 499, rating: 4.7, image: image9, description: "Vitamin C facial serum." },
  { id: 30, name: "Niacinamide Serum", brand: "The Derma Co", category: "Serum", price: 349, rating: 4.5, image: image10, description: "Niacinamide skincare serum." },
  { id: 31, name: "Hyaluronic Acid Serum", brand: "L'Oreal", category: "Serum", price: 699, rating: 4.6, image: image1, description: "Hydrating serum." },
  { id: 32, name: "Glow Serum", brand: "Plum", category: "Serum", price: 450, rating: 4.4, image: image2, description: "Daily glow serum." },
  { id: 33, name: "Hydration Serum", brand: "Dot & Key", category: "Serum", price: 399, rating: 4.5, image: image3, description: "Hydrating facial serum." },

  // TONER
  { id: 34, name: "Rose Water Toner", brand: "Good Vibes", category: "Toner", price: 199, rating: 4.4, image: image4, description: "Rose water inspired toner." },
  { id: 35, name: "Hydrating Toner", brand: "Plum", category: "Toner", price: 399, rating: 4.5, image: image5, description: "Hydrating daily toner." },
  { id: 36, name: "Green Tea Toner", brand: "The Body Shop", category: "Toner", price: 499, rating: 4.6, image: image6, description: "Green tea inspired toner." },

  // BODY LOTION
  { id: 37, name: "Nourishing Body Lotion", brand: "Nivea", category: "Body Lotion", price: 299, rating: 4.6, image: image7, description: "Nourishing daily body lotion." },
  { id: 38, name: "Cocoa Body Lotion", brand: "Vaseline", category: "Body Lotion", price: 350, rating: 4.7, image: image8, description: "Cocoa inspired body lotion." },
  { id: 39, name: "Aloe Body Lotion", brand: "The Body Shop", category: "Body Lotion", price: 599, rating: 4.5, image: image9, description: "Aloe inspired body lotion." },
  { id: 40, name: "Soft Body Lotion", brand: "Dove", category: "Body Lotion", price: 275, rating: 4.5, image: image10, description: "Daily moisturizing body lotion." },

  // LIP CARE
  { id: 41, name: "Strawberry Lip Balm", brand: "Nivea", category: "Lip Care", price: 150, rating: 4.5, image: image1, description: "Strawberry scented lip balm." },
  { id: 42, name: "Lip Sleeping Mask", brand: "Laneige", category: "Lip Care", price: 650, rating: 4.8, image: image2, description: "Overnight lip care mask." },
  { id: 43, name: "Berry Lip Balm", brand: "Plum", category: "Lip Care", price: 199, rating: 4.4, image: image3, description: "Berry inspired lip balm." },

  // FACE MASK
  { id: 44, name: "Charcoal Face Mask", brand: "The Derma Co", category: "Face Mask", price: 349, rating: 4.5, image: image4, description: "Charcoal inspired face mask." },
  { id: 45, name: "Clay Face Mask", brand: "Mamaearth", category: "Face Mask", price: 299, rating: 4.4, image: image5, description: "Clay based face mask." },

  // HAND CREAM
  { id: 46, name: "Shea Hand Cream", brand: "The Body Shop", category: "Hand Cream", price: 399, rating: 4.6, image: image6, description: "Shea inspired hand cream." },
  { id: 47, name: "Soft Hand Cream", brand: "Nivea", category: "Hand Cream", price: 199, rating: 4.4, image: image7, description: "Daily hand moisturizer." },

  // SCRUB
  { id: 48, name: "Coffee Body Scrub", brand: "MCaffeine", category: "Scrub", price: 449, rating: 4.6, image: image8, description: "Coffee inspired body scrub." },
  { id: 49, name: "Sugar Body Scrub", brand: "Plum", category: "Scrub", price: 399, rating: 4.5, image: image9, description: "Sugar based body scrub." },
  { id: 50, name: "Walnut Face Scrub", brand: "Himalaya", category: "Scrub", price: 175, rating: 4.3, image: image10, description: "Walnut inspired face scrub." }
];

const product = [
  {
    id: 1,
    name: "Super Glow Face Wash with Papaya Enzyme",
    brand: "Foxtale",
    category: "Face Wash",
    price: 290,
    originalPrice: 329,
    discount: 12,
    rating: 4.5,
    sizes: ["100ml", "150ml", "200ml"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "Face wash for a refreshing cleansing routine.",
    buttonText: "Select Size"
  },
  {
    id: 2,
    name: "Gluta-Hya Dewy Radiance Lotion",
    brand: "Vaseline",
    category: "Body Lotion",
    price: 311,
    originalPrice: 415,
    discount: 25,
    rating: 4.6,
    sizes: ["100ml", "200ml"],
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    description: "Daily body lotion for moisturized skin.",
    buttonText: "Select Size"
  },
  {
    id: 3,
    name: "Exfoliating Coffee Body Scrub",
    brand: "MCaffeine",
    category: "Scrub",
    price: 382,
    originalPrice: 449,
    discount: 15,
    rating: 4.7,
    sizes: ["100g"],
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
    description: "Coffee inspired body exfoliating scrub.",
    buttonText: "Add to Bag"
  },
  {
    id: 4,
    name: "20% Urea Foot Roll On",
    brand: "Be Bodywise",
    category: "Foot Care",
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.4,
    sizes: ["50ml"],
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80",
    description: "Foot care roll on.",
    buttonText: "Add to Bag"
  },
  {
    id: 5,
    name: "Glow Up Body Lotion",
    brand: "Wanderlust",
    category: "Body Lotion",
    price: 324,
    originalPrice: 499,
    discount: 35,
    rating: 4.5,
    shades: ["Vanilla", "Shea Butter", "Citrus"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    description: "Brightening body lotion.",
    buttonText: "Select Shade"
  },
  {
    id: 6,
    name: "AHA Body Wash",
    brand: "Aminu",
    category: "Body Wash",
    price: 1650,
    originalPrice: 1800,
    discount: 8,
    rating: 4.5,
    sizes: ["150ml"],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    description: "AHA inspired body cleanser.",
    buttonText: "Add to Bag"
  }
];

export default products;