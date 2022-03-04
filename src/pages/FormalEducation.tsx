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

const FormalEducation: React.FC<Props> = ({ title, data }) => {
  const [openDropdown, setOpenDropdown] = useState<string>("");

  const sortedData = data.sort((a, b) => {
    if (a.start.year > b.start.year) return -1;
    else if (a.start.month > b.start.month) return -1;
    else return 0;
  });
  return (
    <>
      <Header title={title} />
      <Spacer height={margin * 2} />
      {sortedData.map((experience, idx) => {
        const isLast = idx + 1 === sortedData.length;
        return (
          <div key={idx}>
            <Dropdown
              title={experience.position}
              content={() => {
                const { company, desc, end, start, location } = experience;
                const time = `${shortMonthNames[start.month.toString()]} ${
                  start.year
                } -
                ${shortMonthNames[end.month.toString()]} ${end.year}`;
                return (
                  <>
                    <h3>
                      {company} ({time})
                    </h3>
                    <p>{location}</p>
                    <Spacer height={margin} />
                    {desc.map((descElement, idx) => {
                      return <p key={idx}>{descElement}</p>;
                    })}
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

export default FormalEducation;