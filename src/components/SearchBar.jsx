export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <span>🔍</span>
      <input
        type="text"
        placeholder="Search body wash, soap, lotion..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}