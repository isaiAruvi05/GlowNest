import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!open) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Shopping Bag 🛍️</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <span>🛍️</span>
            <h3>Your bag is empty!</h3>
            <p>Add your favourite products.</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: ₹{total}</h3>
              <button onClick={() => alert("Demo checkout!")}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}