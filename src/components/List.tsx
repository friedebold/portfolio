import React from "react";

interface Props {
  listData: string[];
}

const List: React.FC<Props> = ({ listData }) => {
  return (
    <ul className="list">
      {listData.map((item, idx) => {
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
