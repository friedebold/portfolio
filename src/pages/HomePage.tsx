import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Profile } from "../apis/model";
import Contact from "../components/Contact";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import List from "../components/List";
import { Spacer } from "../components/Spacer";
import { margin } from "../constants";

interface Props {
  profileData: Profile;
}

const HomePage: React.FC<Props> = ({ profileData }) => {
  const {
    maschineLangs,
    humanLangs,
    mission,
    contactInfo,
    specialities,
    interests,
  } = profileData;

  const [openDropdown, setOpenDropdown] = useState<string>("");

  return (
    <>
      <Header title={`Mission: ${mission[0]}`} />
      <Spacer height={margin * 2} />
      <Dropdown
        title="🗣 Communication Ability"
        content={
          <>
            <h3>with humans</h3>
            <List listData={humanLangs} />
            <Spacer height={margin / 2} />
            <h3>with maschines</h3>
            <List listData={maschineLangs} />
          </>
        }
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />
      <Spacer height={margin} />
      <Link to="/formalEducation">
        <h2 style={{ paddingLeft: margin + 5 }}>📚 Formal Education</h2>
      </Link>
      <Spacer height={margin} />
      <Link to="/workExperience">
        <h2 style={{ paddingLeft: margin + 5 }}>👨🏼‍💻 Work Experience</h2>
      </Link>
      <Spacer height={margin} />
      <Link to="/projects">
        <h2 style={{ paddingLeft: margin + 5 }}>🧪 Projects</h2>
      </Link>
      <Spacer height={margin} />
      <Dropdown
        title="💪🏽 Specialities"
        content={<List listData={specialities} />}
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />
      <Spacer height={margin} />
      <Dropdown
        title="💭 Interests"
        content={<List listData={interests} />}
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />
      <Spacer height={margin * 2} />
      <Contact {...{ contactInfo }} />
    </>
  );
};
export default HomePage;
