import React from "react";

interface Props {
  title: string;
  content: JSX.Element;
  openDropdown: string;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<Props> = ({
  title,
  content,
  openDropdown,
  setOpenDropdown,
}) => {
  const isOpen = openDropdown === title;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          cursor: "pointer",
          userSelect: "none",
          paddingBottom: "10px",
        }}
        onClick={() => setOpenDropdown(isOpen ? "" : title)}
      >
        <h2 style={{ paddingRight: "10px" }}>{isOpen ? "↑" : "↓"}</h2>
        <h2>{title}</h2>
      </div>
      <div
        style={{
          transition: "all 0.2s ease-out",
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          paddingLeft: "35px",
          paddingBottom: isOpen ? "30px" : "0px",
        }}
      >
        {content}
      </div>
    </>
  );
};

export default Dropdown;
