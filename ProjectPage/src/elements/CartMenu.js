import React from "react";
import { Link } from "react-router-dom";
import useWindowResizeListener from "../helpers/useWindowResizeListener";
import cartData from "../data/Cart/cart-data.json";

const CartMenu = () => {
  useWindowResizeListener();
  const handleHover = (e) => {
    e.preventDefault();
    const width = window.innerWidth;
    if (width < 991) {
      const el = e.target;
      if (e.target.nextSibling) {
        if (el.parentElement.classList.contains("on")) {
          el.nextSibling.style.display = "none";
          el.parentElement.classList.remove("on");
          el.nextSibling.style.opacity = 0;
          el.nextSibling.classList.remove("fadeIn");
        } else {
          el.parentElement.classList.add("on");
          el.nextSibling.style.display = "block";
          el.nextSibling.style.opacity = 1;
          el.nextSibling.classList.add("fadeIn");
        }
      }
    }
  };

  return (
    <li className="dropdown">
      <a
        href="!#"
        className="dropdown-toggle"
        data-toggle="dropdown"
        onClick={handleHover}
      >
        <i className="icofont icofont-cart"></i>
        <span className="badge">{cartData.length}</span>
      </a>
      <ul
        className="dropdown-menu dropdown-item cart-list animated " style={{display: "none"}}
      >
        {cartData.map((item) => (
          <li key={item.id}>
            <a href="!#" onClick={(e) => e.preventDefault()} className="photo">
              <img
                src={require("../assets/images/" + item.photo)}
                className="cart-thumb"
                alt=""
              />
            </a>
            <h6>
              <a href="!#" onClick={(e) => e.preventDefault()}>
                {item.name}
              </a>
            </h6>
            <p>
              {item.qty}x -
              <span className="price">{item.currency + item.price}</span>
            </p>
          </li>
        ))}
        <li className="total">
          <span className="float-right">
            <strong>Total</strong>: $0.00
          </span>
          <Link
            to={`${process.env.PUBLIC_URL}/shop-cart`}
            className="btn btn-light btn-cart"
          >
            Cart
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default CartMenu;
