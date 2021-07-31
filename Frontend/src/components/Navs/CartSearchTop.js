import React from "react";
import CartMenu from "../../elements/CartMenu";
import SearchItem from "../../elements/SearchItem";

const CartSearchTop = ({ showSearchForm }) => (
  <ul>
    <CartMenu />
    <SearchItem showSearchForm={showSearchForm} />
  </ul>
);

export default CartSearchTop;
