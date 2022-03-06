import React from "react";
import { RankedItem } from "../apis/model";

interface Props {
  listData: RankedItem[];
}

const List: React.FC<Props> = ({ listData }) => {
  const sortedData = listData
    .sort((a, b) => b.priority - a.priority)
    .map((e) => e.type);

  return (
    <ul className="list">
      {sortedData.map((item, idx) => {
        return (
          <li className="list-item" key={idx}>
            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
