import React from "react";
import { Version } from "./HomePage";

interface Props {
  version: Version;
}

const Container: React.FC<Props> = ({ version }) => {
  const { title, status, distance, duration, maxSpeed, payload } = version;
  return (
    <div className="container">
      <div className="container-header">
        <h1>{title}</h1>
        <div className={`tag ${status}`}>
          <p>{status}</p>
        </div>
      </div>
      <div className="container-graph">
        <h3>{distance}</h3>
        <h3 className="metrics-duration">{duration}</h3>
        <svg
          width="248"
          height="48"
          viewBox="0 0 248 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="43" r="5" fill="#ada99e" />
          <circle cx="243" cy="43" r="5" fill="#ada99e" />
          <path
            d="M5 41.9998C42.1123 8.04172 152 -29 242 42.0002"
            stroke="#ada99e"
          />
        </svg>
      </div>
      <div className="container-metrics">
        <div className="metric">
          <h4>Max Speed</h4>
          <h2>{maxSpeed}</h2>
        </div>
        <div className="metric" />
        <div className="metric">
          <h4>Payload</h4>
          <h2>{payload}</h2>
        </div>
      </div>
    </div>
  );
};
export default Container;
