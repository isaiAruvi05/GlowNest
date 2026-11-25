import { useCart } from "../context/CartContext";

export default function WishlistButton({ product }) {
  const { toggleWishlist, isWishlisted } = useCart();

  return (
    <button
      className="wishlist-btn"
      onClick={() => toggleWishlist(product)}
      title="Wishlist"
    >
      {isWishlisted(product.id) ? "❤️" : "🤍"}
    </button>
  );
}