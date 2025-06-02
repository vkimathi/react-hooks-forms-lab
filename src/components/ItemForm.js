import React, { useState } from 'react';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: generateId(),
      name,
      category
    };
    onItemFormSubmit(newItem);
    setName("");
  }

  function generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="item-name-input"
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          data-testid="item-category-select"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" data-testid="add-item-button">
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;