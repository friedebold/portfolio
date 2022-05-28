import React, { useState } from "react";
import { Experience } from "../apis/model";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import { Spacer } from "../components/Spacer";
import { margin, shortMonthNames } from "../constants";

interface Props {
  title: string;
  data: Experience[];
}

const ExperiencePage: React.FC<Props> = ({ title, data }) => {
  const [openDropdown, setOpenDropdown] = useState<string>("");

  const sortedData = data.sort((a, b) => {
    if (a.start.year === b.start.year) {
      if (a.start.month > b.start.month) return -1;
      else return 0;
    } else {
      return b.start.year - a.start.year;
    }
  });

  return (
    <>
      <Header title={title} />
      <Spacer height={margin * 2} />
      {sortedData.map((experience, idx) => {
        const isLast = idx + 1 === sortedData.length;
        const { company, desc, end, start, location, position, link } =
          experience;
        return (
          <div key={idx}>
            <Dropdown
              title={company ? company : position}
              content={() => {
                const time = end
                  ? `${shortMonthNames[start.month.toString()]} ${
                      start.year
                    } - ${shortMonthNames[end.month.toString()]} ${end.year}`
                  : `${shortMonthNames[start.month.toString()]} ${
                    start.year
                  } - now`;
                return (
                  <>
                    <h3>{company ? `${position} (${time})` : time}</h3>
                    <p>{location}</p>
                    <Spacer height={margin} />
                    {desc && desc.map((descElement, idx) => {
                      return <p key={idx}>{descElement}</p>;
                    })}
                    <Spacer height={margin} />
                    {link && (
                      <a
                        style={{ textDecoration: "none" }}
                        target="none"
                        href={link}
                      >
                        <li style={{ opacity: 0.5 }}>
                          <p>learn more...</p>
                        </li>
                      </a>
                    )}
                  </>
                );
              }}
              {...{ openDropdown }}
              {...{ setOpenDropdown }}
            />
            <Spacer height={!isLast ? margin : 0} />
          </div>
        );
      })}
    </>
  );
};

export default ExperiencePage;
