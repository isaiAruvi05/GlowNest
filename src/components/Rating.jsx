export default function Rating({ rating, reviews }) {
  return (
    <div className="rating">
      ⭐ {rating} <span>({reviews} reviews)</span>
    </div>
  );
}