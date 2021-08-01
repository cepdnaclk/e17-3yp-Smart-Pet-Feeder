import React from "react";
import teamData from "../../data/Team/team-data.json";
import advisorData from "../../data/Team/advisor-data.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import OurTeam from "./OurTeam";

const Team = () => (
  <section className="white-bg" id="team">
    <div className="container">
      <div className="row">
        <HeadingSection title="Our Team" tagline="" />
      </div>
      <div className="row mt-50">
        {teamData
          .filter((team, i) => i <= 2)
          .map((member, i) => (
            <OurTeam
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
              delay={i + 3}
            />
          ))}
      </div>

      <div className="row pt-5">
        <HeadingSection title="Our Advisors" tagline="" />
      </div>
      <div className="row mt-50 justify-content-center pb-5">
        {advisorData
          .filter((team, i) => i <= 2)
          .map((member, i) => (
            <OurTeam
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
              delay={i + 3}
            />
          ))}
      </div>
    </div>
  </section>
);

export default Team;
