import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2015-2018"}
            title={"Subject Matter Expert - Non Technical"}
            subTitle={"Accenture Solutions Pvt Ltd"}
            text={
              "I worked as a Subject Matter Expert supporting tech support to help customers with Chromebooks, Google Pixel Phones, Google Play Store & Digital Content. It was a non-technical & hardware tech support role."
            }
          />
          <ResumeItem
            year={"2018 - Present"}
            title={"Assistant Manager Operation - Non Technical"}
            subTitle={"Concentrix Daksh Services Pvt Ltd"}
            text={`I'm currently working as an Assistant Manager Operation. I handle a team of 30 direct reportees as a team leader. My team is responsible for content moderation. It is a non-technical & people management role.`}
          />
          <ResumeItem
            year={"2021 - Present"}
            title={"Full Stack Developer"}
            subTitle={"Freelancer & Learner"}
            text={
              "Starting 2021, I enrolled to Fullstack development bootcamp by The Hacking School. After completion, I have been working on several projects & freelancing to improve my portfolio for a full time web developer."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2009 - 2013"}
            title={"E&E Engineering - Bachelors"}
            subTitle={"Biju Patnaik University of Technology, Odisha, India"}
            text={
              "I completed my bachelors in E&E Engineering in 2013 from BPUT, Odisha, India."
            }
          />
          <ResumeItem
            year={"2007 - 2009"}
            title={"College - 10th +2"}
            subTitle={"Kendriya Vidyalaya, Angul, Odisha, India"}
            text={
              "I completed my college (10th +2) in 2009 from Kendriya Vidyalaya, Angul, Odisha, India."
            }
          />
          <ResumeItem
            year={"2006 - 2007"}
            title={"High School Graduation"}
            subTitle={"Maharishi Vidya Mandir, Angul, Odisha, India"}
            text={
              "I completed my high school graduation in 2007 from Maharishi Vidya Mandir, Angul, Odisha, India."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
