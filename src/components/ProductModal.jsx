import Rating from "./Rating";
import PriceTag from "./PriceTag";
import { useCart } from "../context/CartContext";

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <img src={product.image} alt={product.name} />

        <div>
          <p className="product-category">{product.category}</p>
          <h2>{product.name}</h2>
          <Rating rating={product.rating} reviews={product.reviews} />
          <PriceTag price={product.price} oldPrice={product.oldPrice} />
          <p>{product.description}</p>

          <button
            className="modal-add"
            onClick={() => {
              addToCart(product);
              onClose();
            }}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}