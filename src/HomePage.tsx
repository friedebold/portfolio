import React from "react";
import Contact from "./Contact";
import MotionPictures from "./MotionPicture/MotionPictures";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <>
      <header>
        <h1>Daniel Friedebold</h1>
        <h2>Maximizing Future Excitement</h2>
      </header>
      <div style={{ height: 20 }} />
      <Contact />
      <div style={{ height: 20 }} />
      <MotionPictures />
    </>
  );
};
export default HomePage;
