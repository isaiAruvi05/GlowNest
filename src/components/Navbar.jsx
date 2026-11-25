import ThemeToggle from "./ThemeToggle";
import { useCart } from "../context/CartContext";

export default function Navbar({ onCartOpen }) {
  const { cart, wishlist } = useCart();

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-icon">🌷</span>
        <span>GlowNest</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">
        <span title="Wishlist">❤️ {wishlist.length}</span>
        <button className="cart-btn" onClick={onCartOpen}>
          🛍️ Bag ({count})
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}