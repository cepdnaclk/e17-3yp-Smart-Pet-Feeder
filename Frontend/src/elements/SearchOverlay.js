import React from "react";

const SearchOverlay = ({ show, onClick }) => {

  return (
    <div
      className={
        show === true
          ? "fullscreen-search-overlay fullscreen-search-overlay-show"
          : "fullscreen-search-overlay"
      }
      id="search-overlay"
    >
      <a
        href="!#"
        className="fullscreen-close"
        onClick={onClick}
        id="fullscreen-close-button"
      >
        <i className="icofont icofont-close"></i>
      </a>
      <div id="fullscreen-search-wrapper">
        <form method="get" id="fullscreen-searchform">
          <input
            type="text"
            placeholder="Type and hit Enter..."
            id="fullscreen-search-input"
            className="search-bar-top"
          />
          <i className="icofont icofont-search-1 fullscreen-search-icon">
            <input value="" type="submit" />
          </i>
        </form>
      </div>
    </div>
  );
};

export default SearchOverlay;
