import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Rakesh Sahu</span>
        </h1>
        <p>
          I'm a full-stack developer, specializing in MERN stack. I've completed
          several projects to skill up my knowledge in web-development. Please
          visit the about section to know more.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/rakesh.sahu.1401933/"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a href="https://github.com/rksdevs" className="icon i-github">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-kumar-sahu-716b27192/"
            className="icon i-youtube"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
