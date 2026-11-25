const categories = ["All", "Body Wash", "Soap", "Body Lotion"];

export default function CategoryTabs({ active, setActive }) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={active === category ? "active-category" : ""}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}