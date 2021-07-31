import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";

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
                <p>
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
                    <a href={process.env.PUBLIC_URL}>About Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Contact Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Our Services</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Careers</a>
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
                    <a href="tel:441632960290">+766812877</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:helloscoda@gmail.com">
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
