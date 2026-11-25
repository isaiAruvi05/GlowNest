export default function PriceTag({ price, oldPrice }) {
  return (
    <div className="price">
      <strong>₹{price}</strong>
      {oldPrice && <del>₹{oldPrice}</del>}
    </div>
  );
}