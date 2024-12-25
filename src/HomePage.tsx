import React from "react";
import Cloud from "./assets/cloud.png";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <div className="page">
      <div id="name">
        <h1>DANIEL FRIEDEBOLD</h1>
        <h1> </h1>
      </div>
      <img id="cloud-img" src={Cloud} />
    </div>
  );
};
export default HomePage;
