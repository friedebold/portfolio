import React from "react";

interface Props {
  mission: string[];
}

const Header: React.FC<Props> = ({ mission }) => {
  return (
    <header className="header">
      <h1>Daniel Friedebold</h1>
      <h3>Mission: {mission[0]}</h3>
    </header>
  );
};
export default Header;
