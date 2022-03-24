import React from "react";
import { ContactPoint } from "../../apis/model";
import ContactItem from "./ContactItem";

interface Props {
  contactInfo: ContactPoint[];
}

const Contact: React.FC<Props> = ({ contactInfo }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        transform: "translateY(12px)",
      }}
    >
      <div style={{ display: "flex", flex: 1 }} />
     {/*  <Link
        to="/Daniel_Friedebold.pdf"
        target="_blank"
        download
        style={{ alignSelf: "flex-start" }}
      >
        <div className="list-item">
          <p>↓ Download CV</p>
        </div>
      </Link> */}
      <ul className="list" style={{}}>
        {contactInfo
          .sort((a, b) => b.priority - a.priority)
          .map((contact, index) => {
            return <ContactItem {...{ contact }} key={index} />;
          })}
      </ul>
    </div>
  );
};
export default Contact;
