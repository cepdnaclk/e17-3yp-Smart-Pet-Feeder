import React from "react";
import { Link } from "react-scroll";

import dataNav from "../../data/Navbar/navbar-data.json";
import useWindowResizeListener from "../../helpers/useWindowResizeListener";

const DropdownMenu = (props) => {
  useWindowResizeListener();

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
        {dataNav.map((dropdown, i) => (
          <Link
            className={
              props.fixed || props.type === "white" ? "white_bg" : "black_bg"
            }
            activeClassName={"active"}
            to={dropdown.to}
            spy={true}
            duration={200}
            delay={0}
            smooth={"easeInOutQuart"}
            key={dropdown.id}
          >
            {dropdown.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
