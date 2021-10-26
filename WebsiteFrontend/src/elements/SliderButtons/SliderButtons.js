import React from "react";

const SliderButtons = ({ buttons }) => {
  return buttons.map((button) => (
    <a
      key={button.id}
      href={`${process.env.PUBLIC_URL}/${button.link}`}
      className={"btn btn-animate " + (button.type ? button.type : "")}
    >
      <span>
        {button.text}
        <i className="icofont icofont-arrow-right" />
      </span>
    </a>
  ));
};

export default SliderButtons;
