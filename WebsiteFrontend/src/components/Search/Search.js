import React from "react";
import "./Search.css";
import Button from "@material-ui/core/Button";

const SearchBar = () => (
  <div className>
    <form action="/" method="get">
      <input
        type="text"
        name="title"
        className="form-control"
        id="title"
        placeholder="User Email"
        // value={title}
        // onChange={titleChangeHandler}
        // onBlur={titleBlurHandler}
      />
    </form>
  </div>
);

export default SearchBar;
