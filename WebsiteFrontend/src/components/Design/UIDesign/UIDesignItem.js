import React from "react";
// import ReactWow from "react-wow";
import Icofont from "react-icofont";

const PortfolioItem = ({
  title,
  image,
  space,
  groups,
  type,
  columns,
  openLightbox,
}) => {
  return (
    // <ReactWow animation="fadeIn">
    <div
      className={
        "portfolio-item col-md-" +
        12 / columns +
        (type === "product" ? " portfolio-masonry-item " : " ") +
        (space === "true" ? "gutter-space" : "no-gutter")
      }
      data-wow-delay="0.2s"
      data-groups={groups ? "[" + groups.map((val) => `"${val}"`) + "]" : null}
    >
      {/* <ReactWow animation="fadeIn"> */}
      <div
        className={
          "portfolio gallery-image-hover " +
          (type === "masonry" ? "portfolio-masonry-item" : "")
        }
      >
        <div className="dark-overlay"></div>
        <img src={require("../../../assets/images/" + image)} alt="" />
        <div className="portfolio-wrap">
          <div className="portfolio-description">
            <h3 className="portfolio-title">{title}</h3>
          </div>
        </div>
      </div>
      {/* </ReactWow> */}
    </div>
    // </ReactWow>
  );
};

export default PortfolioItem;
