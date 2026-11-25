import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { changeQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <strong>₹{item.price}</strong>

        <div className="quantity">
          <button onClick={() => changeQuantity(item.id, -1)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => changeQuantity(item.id, 1)}>+</button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}