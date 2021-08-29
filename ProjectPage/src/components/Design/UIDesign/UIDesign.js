import React, { useEffect, useRef, useState, forwardRef } from "react";
import dataPortfolio from "../../../data/UIDesign/ui-design-data.json";
import UICatogories from "./UICategories";
import UIDesignItem from "./UIDesignItem";
import Shuffle from "shufflejs";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

const Portfolio = forwardRef(
  ({ filter, layout, columns, space, items, classAppend, children }, ref) => {
    const categories = ["all", "home", "user", "admin"];
    const element = useRef();
    const [shuffle, setShuffle] = useState();

    useEffect(() => {
      if (element.current) {
        setShuffle(
          new Shuffle(element.current, {
            itemSelector: ".portfolio-item",
          })
        );
      }
    }, []);

    const filterElements = (evt) => {
      const btn = evt.currentTarget;
      evt.target.parentElement
        .querySelectorAll(".active")
        .forEach((e) => e.classList.remove("active"));
      evt.currentTarget.classList.add("active");
      const cat = btn.getAttribute("value");
      shuffle.filter((element) => {
        return element.getAttribute("data-groups").toLowerCase().includes(cat);
      });
    };

    const [isOpen, setIsOpen] = useState(false);
    const [photo, setPhoto] = useState(0);

    const closeLightbox = () => {
      setIsOpen(false);
    };
    const openLightbox = (e, photo) => {
      e.preventDefault();
      setPhoto(photo);
      setIsOpen(true);
    };

    return (
      <section
        id="portfolio"
        className={"pb-0 " + (classAppend ? classAppend : "")}
        ref={ref}
      >
        {children ? (
          <div className="container">
            <div className="row">{children}</div>
          </div>
        ) : null}
        <div className={"container" + (layout === "wide" ? "-fluid" : "")}>
          <div className="row">
            <div
              className={
                "container" +
                (layout === "wide" ? "-fluid" : "") +
                " text-center"
              }
            >
              {filter === "true" ? (
                <UICatogories
                  categories={categories}
                  handleClick={filterElements}
                />
              ) : null}

              <div id="portfolio-grid" ref={element} className="hover-two row">
                {
                  items &&
                    dataPortfolio
                      .filter((v, i) => i < items)
                      .map((item, i) => (
                        <UIDesignItem
                          key={item.id}
                          title={item.title}
                          image={item.image}
                          groups={item.groups}
                          space={space ? "true" : "false"}
                          columns={columns}
                          openLightbox={openLightbox}
                        />
                      ))
                  // : dataPortfolio.map((item, i) => (
                  //     <UIDesignItem
                  //       key={item.id}
                  //       title={item.title}
                  //       image={item.image}
                  //       groups={item.groups}
                  //       space={space ? "true" : "false"}
                  //       columns={columns}
                  //       openLightbox={openLightbox}
                  //     />
                  //   ))
                }
              </div>
              {isOpen && (
                <Lightbox
                  mainSrc={require("../../../assets/images/" + photo)}
                  onCloseRequest={() => closeLightbox()}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Portfolio;
