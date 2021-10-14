import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";
import { Link } from "react-scroll";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p
                  style={{
                    lineHeight: "30px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    paddingTop: "10px",
                  }}
                >
                  Smart Pet Feeder is a product that helps you to take care of
                  your pets. It will help you to build the relationship with
                  your pet better and better even you are not in the home. Have
                  you ever been worried about your pet's meals when you are away
                  from your pet? Smart pet feeder provide the platform to come
                  up with this problem
                </p>
              </div>
            </div>
            {/*<div className="col-sm-6 col-md-2">*/}
            {/*  <div className="widget widget-links">*/}
            {/*    <h5 className="widget-title">Work With Us</h5>*/}
            {/*    <ul>*/}
            {/*      <li>*/}
            {/*        <a href="#!">Themeforest</a>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#!">Audio Jungle</a>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#!">Code Canyon</a>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#!">Video Hive</a>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#!">Envato Market</a>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="col-sm-6 col-md-2 offset-1">
              <div className="widget widget-links">
                <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li>
                    <Link
                      className="footer_"
                      // activeclassname={"active"}
                      to="home"
                      spy={true}
                      duration={200}
                      delay={0}
                      // key={i}
                      smooth={"easeInOutQuart"}
                    >
                      {/*{dropdown.title}*/}
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="footer_"
                      // activeclassname={"active"}
                      to="about"
                      spy={true}
                      duration={200}
                      delay={0}
                      // key={i}
                      smooth={"easeInOutQuart"}
                    >
                      {/*{dropdown.title}*/}
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer_"
                      // activeclassname={"active"}
                      to="services"
                      spy={true}
                      duration={200}
                      delay={0}
                      // key={i}
                      smooth={"easeInOutQuart"}
                    >
                      {/*{dropdown.title}*/}
                      Our Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="footer_"
                      // activeclassname={"active"}
                      to="testimonials"
                      spy={true}
                      duration={200}
                      delay={0}
                      // key={i}
                      smooth={"easeInOutQuart"}
                    >
                      {/*{dropdown.title}*/}
                      Testimonials
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="footer_"
                      // activeclassname={"active"}
                      // to="services"
                      spy={true}
                      duration={200}
                      delay={0}
                      // key={i}
                      smooth={"easeInOutQuart"}
                    >
                      {/*{dropdown.title}*/}
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 offset-1">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href={process.env.PUBLIC_URL}>
                      Smart-pet-feeder, UOP, Kandy
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+94 76 869 9448</a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+94 76 682 1877</a>
                  </li>

                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+94 77 955 8616</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href={process.env.PUBLIC_URL}>
                      smartpetfeederuop@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href={process.env.PUBLIC_URL}>
                      www.smartpetfeederuop.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
