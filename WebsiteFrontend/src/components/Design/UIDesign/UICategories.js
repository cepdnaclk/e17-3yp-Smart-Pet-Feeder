import React from "react";

const UICategories = ({ categories, handleClick }) => (
  <ul
    id="portfolio-filter"
    className="list-inline filter-transparent"
    data-wow-delay="0.1s"
  >
    {categories.map((cat, i) =>
      i === 0 ? (
        <li
          className="active list-inline-item"
          key={i}
          value={cat}
          data-group={cat}
          onClick={handleClick}
        >
          {cat}
        </li>
      ) : (
        <li
          key={i}
          className="list-inline-item"
          value={cat}
          onClick={(evt) => handleClick(evt)}
        >
          {cat}
        </li>
      )
    )}
  </ul>
);

export default UICategories;
