import { useEffect, useState } from "react";
import { fetchData } from "./apis/firebaseApi";
import { Profile } from "./apis/model";

interface Props {
  children: (profileData: Profile) => JSX.Element;
}

const DataWrapper: React.FC<Props> = ({ children }) => {
  const [profileData, setProfileDate] = useState<Profile | null>(null);

  /*useEffect(() => {
    if (profileData !== null) {
      const data = profileData.projects .map((experience) => {
        console.log(new Date(experience.start.seconds * 1000));
        const startYear = new Date(
          experience.start.seconds * 1000
        ).getFullYear();
        const startMonth =
          new Date(experience.start.seconds * 1000).getMonth() + 1;
        const start = { year: startYear, month: startMonth };
        console.log(start);

        const endYear = new Date(experience.end.seconds * 1000).getFullYear();
        const endMonth = new Date(experience.end.seconds * 1000).getMonth() + 1;
        const end = { year: endYear, month: endMonth };
        return { ...experience, start: start, end: end };
      }); 
      addToDB("workExperience", data);
    }
  }, [profileData]);*/

  useEffect(() => {
    fetchData().then((data) => {
      if (data) setProfileDate({ ...data });
    });
  }, []);
  if (profileData === null) return <></>;
  return <>{children(profileData)}</>;
};

export default DataWrapper;
