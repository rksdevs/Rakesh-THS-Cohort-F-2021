import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
// import intelligence from "../img/intelligence.svg";
// import gamedev from "../img/game-dev.svg";
// import fullstack from "../img/fullstack.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Full Stack Developer"}
            paragraph={
              "As a full stack developer, I specialize in MERN stack, and build modern & scalable websites from scratch. To see my work on MERN stack please visit the Portfolios section."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={design}
              title={"Frontend Developer"}
              paragraph={
                "As a frontend developer, I specialize in React JS frontend framework. Which is one of the most used and preferred technologies for frontend development. To see my work on React JS please visit the Portfolios section."
              }
            />
          </div>
          <ServiceCard
            image={design}
            title={"Backend Developer"}
            paragraph={
              "As a backend developer, I specialize in Node Js run time, Express Js framework & MongoDB database, to build REST APIs for seemless support to the frontend technologies. To see my work on backend technologies please visit the Portfolios section."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
