import React from "react";
import Icofont from "react-icofont";

const SearchItem = ({ showSearchForm }) => {

  return (
    <li className="search">
      <a href="!#" id="search-button" onClick={showSearchForm}>
        <Icofont icon="search-1" />
      </a>
    </li>
  );
};

export default SearchItem;
