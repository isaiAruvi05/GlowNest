import Badge from "./Badge";
import PriceTag from "./PriceTag";
import Rating from "./Rating";
import WishlistButton from "./WishlistButton";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onView }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <Badge text={product.tag} />
        <WishlistButton product={product} />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <Rating rating={product.rating} reviews={product.reviews} />
        <PriceTag price={product.price} oldPrice={product.oldPrice} />

        <div className="product-actions">
          <button onClick={() => addToCart(product)}>
            Add to Bag
          </button>
          <button className="view-btn" onClick={() => onView(product)}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}