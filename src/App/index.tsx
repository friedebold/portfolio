import React, { useEffect, useState } from "react";
import { fetchData } from "../apis/firebaseApi";
import { margin, Profile } from "../apis/model";
import Contact from "../other.../Contact";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import List from "./components/List";
import { Spacer } from "./sharedComponents";

interface Props {}

const App: React.FC<Props> = () => {
  const [profileData, setProfileDate] = useState<Profile | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string>("");

  //Fetch profile data
  useEffect(() => {
    fetchData().then((data) => {
      if (data) setProfileDate({ ...data });
    });
  }, []);

  /* //Analytics
  const [firebaseDocId, setFirebaseDocId] = useState("");
  const [viewedPage, setViewedPage] = useState("");
  useEffect(() => {
    if (profileData) {
      const windowDimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
      };
      fetchGeo().then((res) => {
        if (res) {
          const { location } = res;
          const startDate = new Date();
          addAnalytics(location, windowDimensions, startDate, setFirebaseDocId);
        }
      });
    }
  }, [profileData]);

  useEffect(() => {
    if (viewedPage !== "" && firebaseDocId !== "") {
      addContactAnalytics(firebaseDocId, viewedPage);
    }
  }, [viewedPage, firebaseDocId]); */

  /* useEffect(() => {
    if (profileData !== null) {
      const data = profileData.;
      console.log(data);
      addToDB("specialities", data);
    }
  }, [profileData]);
 */
  if (!profileData) return <></>;

  const {
    maschineLangs,
    humanLangs,
    interests,
    mission,
    contactInfo,
    formalEducation,
    projects,
    specialities,
    workExperience,
  } = profileData;

  const sortedHumanLangs = humanLangs
    .sort((a, b) => b.priority - a.priority)
    .map((e) => e.lang);

  const sortedMaschineLangs = maschineLangs
    .sort((a, b) => b.priority - a.priority)
    .map((e) => e.lang);

  const sortedSpecialities = specialities.map((e) => e.type);

  const sortedInterests = interests
    .sort((a, b) => a.priority - b.priority)
    .map((e) => e.type);

  /*  const sortedFormalEducation = formalEducation.sort(
    (a, b) => new Date(a.start) - b.start
  ); */

  return (
    <div className="page">
      <Header {...{ mission }} />

      <Spacer height={margin * 2} />

      <Dropdown
        title="🗣 Communication Ability"
        content={
          <>
            <h3>with humans</h3>
            <List listData={sortedHumanLangs} />
            <Spacer height={margin / 2} />
            <h3>with maschines</h3>
            <List listData={sortedMaschineLangs} />
          </>
        }
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />

      <Spacer height={margin} />

      <Dropdown
        title="💪🏽 Specialities"
        content={<List listData={sortedSpecialities} />}
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />

      <Spacer height={margin} />

      <Dropdown
        title="📚 Formal Education"
        content={<p>comming soon...</p>}
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />
      <Spacer height={margin} />
      <Dropdown
        title="👨🏼‍💻 Work Experience"
        content={<p>comming soon...</p>}
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />
      <Spacer height={margin} />
      <Dropdown
        title="🧪 Projects"
        content={<p>comming soon...</p>}
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />

      <Spacer height={margin} />

      <Dropdown
        title="💭 Interests"
        content={<List listData={sortedInterests} />}
        {...{ openDropdown }}
        {...{ setOpenDropdown }}
      />

      <Spacer height={margin * 2} />

      <Contact {...{ contactInfo }} />
    </div>
  );
};
export default App;
