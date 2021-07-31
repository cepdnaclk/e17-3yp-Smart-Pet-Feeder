import React from "react";
import { Link } from "react-router-dom";

const DropdownSubItem = ({ item }) => (
  <ul className="dropdown-menu dropdown-item" style={{display: "none"}}>
    {item.map((val, i) => (
      <li key={i}>
        <Link className="dropdown-item" to={val.link}>{val.title}</Link>
      </li>
    ))}
  </ul>
);

export default DropdownSubItem;
