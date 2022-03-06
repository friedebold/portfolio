import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="header">
      <Link to="/" style={{ backgroundColor: "red" }}>
        <h1>Daniel Friedebold</h1>
      </Link>
      <h2>{title}</h2>
    </header>
  );
};
export default Header;
