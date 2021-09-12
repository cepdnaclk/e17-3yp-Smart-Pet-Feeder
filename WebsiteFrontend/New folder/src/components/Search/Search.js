import React from "react";
import "./Search.css"


const SearchBar = () => (
    <div className="searchBar">
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;
                  