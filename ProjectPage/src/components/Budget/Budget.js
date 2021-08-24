import React from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import budget from "../../assets/images/budget/budget.JPG";

const Budget = () => (
  <section id="budget">
    <div className="container">
      <div className="row">
        <HeadingSection title="Budget">
          <div className="pb-5 pt-3">
            <img src={budget} />
          </div>
        </HeadingSection>
      </div>
    </div>
  </section>
);

export default Budget;
