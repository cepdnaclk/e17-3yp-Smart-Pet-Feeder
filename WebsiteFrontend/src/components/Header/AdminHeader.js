import React, { useState, useEffect, useCallback } from "react";
import Icofont from "react-icofont";
import DropdownMenu from "../Navs/AdminDropdownMenu";
import SearchOverlay from "../../elements/SearchOverlay";
import MainLogo from "../MainLogo";
import "../../assets/css/style.css";
import * as PropTypes from "prop-types";

function AttributeNav(props) {
  return null;
}

AttributeNav.propTypes = { children: PropTypes.node };
const Header = ({ type, data ,handleLog,handleSignIn}) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  // const showSearchForm = (e) => {
  //   e.preventDefault();
  //   setShow(true);
  //   resizeForm();
  // };

  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeForm);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeForm);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resizeForm, handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg navbar-light navbar-fixed white bootsnav on no-full navbar-transparent"
        }
      >
        <SearchOverlay show={show} onClick={hideSearchForm} />
        <div className="container">
          <button
            type="button"
            className={"navbar-toggler " + (collapse ? "collapsed" : "")}
            data-toggle="dropdown"
            data-target="#navbar-menu"
            onClick={showMenu}
          >
            <Icofont icon="navigation-menu" />
          </button>
          <MainLogo showMenu={showMenu} />
          <DropdownMenu fixed={fixed} type={type} data={data} isClickedLog = {handleLog} signClickedHandler={handleSignIn} />
        </div>
      </nav>
    </>
  );
};

export default Header;
