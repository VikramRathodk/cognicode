import React, { useState } from "react";
import "./searchbar.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


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
  const [searchTerm, setSearchTerm] = useState("");
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
        <div>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: "24px", color: "blue" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
