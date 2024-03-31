import React from 'react';
import '../sytles/SearchBar.css'; // Importing CSS file for the search bar component

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">Search</button>
        </div>
    );
}

export default SearchBar;
