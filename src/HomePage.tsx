import React from "react";
import Cloud from "./assets/cloud.png";
import Container from "./Container";

export interface Version {
  title: string;
  status: "achieved" | "upcoming";
  distance: string;
  duration: string;
  maxSpeed: string;
  payload: string;
}

interface Props {}

const HomePage: React.FC<Props> = () => {
  const versions: Version[] = [
    {
      title: "V0",
      status: "achieved",
      distance: "200 m",
      duration: "15 s",
      maxSpeed: "50 km/h",
      payload: "0 kg",
    },
    {
      title: "V1",
      status: "upcoming",
      distance: "15 km",
      duration: "20 min",
      maxSpeed: "50 km/h",
      payload: "0 kg",
    },
  ];
  return (
    <>
      <div id="name">
      <h1>DANIEL FRIEDEBOLD</h1>
      </div>
      <div className="page">
        <img id="cloud-img" src={Cloud} />
      </div>
      <div className="page">
        {versions.map((version) => (
          <Container {...{ version }} />
        ))}
      </div>
    </>
  );
};
export default HomePage;
