import React from "react";
import Icofont from "react-icofont";

const OurTeam = ({ name, role, image, social, delay }) => {
  return (
    <div
      className="col-md-4 col-sm-4 col-xs-12"
      data-aos={"fade-up"}
      data-aos-delay={`${delay}00`}
      data-aos-duration={1000}
    >
      <div className="team-member-container gallery-image-hover">
        <img
          src={require("../../assets/images/" + image)}
          className="img-fluid"
          alt={image}
        />
        <div className="member-caption">
          <div className="member-description text-center">
            <div className="member-description-wrap">
              <h4 className="member-title">{name}</h4>
              <p className="member-subtitle">{role}</p>
              <ul className="member-icons">
                {social.map((item) => {
                  return (
                    <li className="social-icon" key={item.id}>
                      <a href={item.link}>
                        <Icofont icon={item.icon} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
