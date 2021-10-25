import React from "react";

const HeadingSection = ({ title, tagline, classAppend, font, children }) => {
  return (
    <div
      className={"col-sm-8 section-heading " + (classAppend ? classAppend : "")}
    >
      <h2
        className={font ? font : "" + " " + (classAppend ? classAppend : "")}
        data-aos-delay={100}
        data-aos={"fade-up"}
        data-aos-duration={700}
      >
        {title}
      </h2>
      {tagline && (
        <h3
          className={"text-uppercase " + (font ? font : "")}
          data-aos-delay={200}
          data-aos={"fade-up"}
          data-aos-duration={700}
        >
          {`- ${tagline} -`}
        </h3>
      )}
      {children ? (
        <p
          data-aos-delay={300}
          data-aos={"fade-up"}
          data-aos-duration={700}
          className="mt-30 paragraph_"
        >
          {children}
        </p>
      ) : null}
    </div>
  );
};

export default HeadingSection;
