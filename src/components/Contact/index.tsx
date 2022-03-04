import React from "react";
import { ContactPoint } from "../../apis/model";
import ContactItem from "./ContactItem";

interface Props {
  contactInfo: ContactPoint[];
}

const Contact: React.FC<Props> = ({ contactInfo }) => {
  return (
    <>
      <div style={{ display: "flex", flex: 1 }} />
      <ul className="list" style={{ transform: "translateY(12px)" }}>
        {contactInfo
          .sort((a, b) => a.priority - b.priority)
          .map((contact, index) => {
            return <ContactItem {...{ contact }} key={index} />;
          })}
      </ul>
    </>
  );
};
export default Contact;
