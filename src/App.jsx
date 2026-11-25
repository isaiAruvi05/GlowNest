
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryTabs from "./components/CategoryTabs";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import products from "./data/product.js";

function Store() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const { dark } = useTheme();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar onCartOpen={() => setCartOpen(true)} />

      <Hero />

      <main id="products" className="shop-section">
        <SectionTitle
          title="Your Self-Care Collection 🌸"
          subtitle="Find your little everyday happiness"
        />

        <SearchBar search={search} setSearch={setSearch} />

        <CategoryTabs active={category} setActive={setCategory} />

        <ProductGrid
          products={filteredProducts}
          onView={setSelectedProduct}
        />
      </main>

      <section className="promo-banner">
        <div>
          <span>YOUR BEAUTY. YOUR RITUAL.</span>
          <h2>Self-care is never selfish ♡</h2>
          <p>Take a little time for yourself today.</p>
        </div>
      </section>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Store />
      </CartProvider>
    </ThemeProvider>
  );
}