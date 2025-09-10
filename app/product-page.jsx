"use client";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";


const categoriesData = [
  { name: "All Products", subtypes: [] },
  { name: "Clothing", subtypes: ["Men's Wear", "Women's Wear", "Kids' Wear"] },
  { name: "Ornaments", subtypes: ["Gold", "Silver", "Diamond"] },
  { name: "Footwear", subtypes: ["Sneakers", "Formal Shoes"] },
  { name: "Kitchenware", subtypes: ["Utensils", "Appliances"] },
  { name: "Electronics", subtypes: ["Mobiles", "Laptops"] },
  { name: "Home & Decor", subtypes: ["Furniture", "Lighting"] },
];

export default function ProductPage({ initialProducts, searchQuery }) {
  const [products] = useState(initialProducts);
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [sortOption, setSortOption] = useState("Recommended");

  const toggleCategory = (index) =>
    setOpenCategory(openCategory === index ? null : index);

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  // Filter Products
  let filteredProducts = products.filter((p) => {
    if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()))
      return false;
    if (selectedFilters.length === 0 || selectedFilters.includes("All Products"))
      return true;
    return selectedFilters.some((filter) =>
      p.category.toLowerCase().includes(filter.toLowerCase())
    );
  });

  // Sorting
  if (sortOption === "Price: Low to High") filteredProducts.sort((a, b) => a.price - b.price);
  else if (sortOption === "Price: High to Low") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="page-container">
      <div className="content-wrapper">
        {/* Sidebar */}
        {showFilters && (
          <aside className="sidebar">
            <h2>Filters</h2>
            {categoriesData.map((cat, index) => (
              <div key={index} className="filter-group">
                <div className="filter-header" onClick={() => toggleCategory(index)}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(cat.name)}
                      onChange={() => toggleFilter(cat.name)}
                      onClick={(e) => e.stopPropagation()}
                    />{" "}
                    {cat.name}
                  </label>
                  {cat.subtypes.length > 0 && (
                    <span>{openCategory === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                  )}
                </div>
                {openCategory === index && cat.subtypes.length > 0 && (
                  <ul className="sub-filters">
                    {cat.subtypes.map((sub, i) => (
                      <li key={i}>
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes(sub)}
                            onChange={() => toggleFilter(sub)}
                          />{" "}
                          {sub}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </aside>
        )}

        {/* Main Content */}
        <main className="main-content">
          <div className="top-bar">
            <button
              className="toggle-filters-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <div className="sort-dropdown">
              <label>Sort by: </label>
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Popular</option>
              </select>
            </div>
          </div>

          <h1>Products</h1>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>₹{(product.price * 82).toFixed(0)}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
