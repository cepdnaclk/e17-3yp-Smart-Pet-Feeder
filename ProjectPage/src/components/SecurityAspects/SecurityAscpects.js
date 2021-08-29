import React from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

import image from "../../assets/images/security-aspects/images.jpg";
import { height } from "dom-helpers";

const SecurityAspects = () => (
  <section id="security_aspects" className="dark_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 wrap-about py-md-5 ftco-animate fadeInUp ftco-animated">
          <HeadingSection title="Security Aspects" classAppend={"text-white"}>
            <div className="heading-section pr-md-5">
              2 factor authentication for login is used as a security mechanism.
              When user trying to login to the system he will receive OTP to his
              mobile phone. So If an attacker steals the email and password of a
              user he cannot login to the system unless he has owner’s mobile
              phone.
              <br />
              <br />
              Another security mechanism is AWS Web application firewalls. The
              firewall helps to protect our API from common web attacks and
              bots.
              <br />
              <br />
              Json web token are used to communicate between API and the UI.
              After user login to the system API will given a token to the
              frontend. So UI send request to the API along with the token. So
              the attackers cannot access our API without the token.
            </div>
          </HeadingSection>
        </div>

        <div className="col-md-6 order-md-last d-flex align-items-center">
          <img src={image} width="100%" height="80%" />
        </div>
      </div>
    </div>
  </section>
);

export default SecurityAspects;
