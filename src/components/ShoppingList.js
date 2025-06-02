import React from 'react';
import Filter from './Filter';
import Item from './Item';
import ItemForm from './ItemForm';

function ShoppingList({ items, onSearchChange, onCategoryChange, onItemFormSubmit }) {
  const [search, setSearch] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearchChange = (value) => {
    setSearch(value);
    if (onSearchChange) onSearchChange(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    if (onCategoryChange) onCategoryChange(value);
  };

  return (
    <div className="ShoppingList">
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
    </div>
  );
}

export default ShoppingList;