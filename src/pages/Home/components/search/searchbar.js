import React, { useState } from 'react';
import './searchbar.css'; // Import the CSS file for styling

const ItemList = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <i className="search-icon fas fa-search">Icon</i>
      </div>
      
    </div>
  );
};

export default SearchBar;
