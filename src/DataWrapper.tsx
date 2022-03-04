import { useEffect, useState } from "react";
import { fetchData } from "./apis/firebaseApi";
import { Profile } from "./apis/model";

interface Props {
  children: (profileData: Profile) => JSX.Element;
}

const DataWrapper: React.FC<Props> = ({ children }) => {
  const [profileData, setProfileDate] = useState<Profile | null>(null);

  useEffect(() => {
    fetchData().then((data) => {
      if (data) setProfileDate({ ...data });
    });
  }, []);
  if (profileData === null) return <></>;
  return <>{children(profileData)}</>;
};

export default DataWrapper;
