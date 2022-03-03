import React from "react";
import { ContactPoint } from "../../apis/model";
import ContactItem from "./ContactItem";

interface Props {
  contactInfo: ContactPoint[];
  /*  setViewedPage: React.Dispatch<SetStateAction<string>> */
}

const Contact: React.FC<Props> = ({ contactInfo /* , setViewedPage */ }) => {
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
