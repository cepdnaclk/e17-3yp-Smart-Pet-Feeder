import React from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import budget from "../../assets/images/budget/budget.png";

const Budget = () => (
  <section id="budget">
    <div className="container">
      <div className="row">
        <HeadingSection title="Budget">
          <div className=" pt-3">
            <img src={budget} />
          </div>
        </HeadingSection>
      </div>
    </div>
  </section>
);

export default Budget;
