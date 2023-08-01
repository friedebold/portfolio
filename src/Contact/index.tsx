import React from "react";
import ContactClipboard from "./ContactClipboard";
import ContactLink from "./ContactLink";

interface Props {}

export interface ContactPoint {
  title: string;
  href?: string;
}

const Contact: React.FC<Props> = () => {
  const contactInfo: ContactPoint[] = [
    {
      title: "daniel@friedebold.net",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-friedebold-71a156163/",
    },
    {
      title: "X / Twitter",
      href: "https://twitter.com/d_friedebold",
    },
  ];

  return (
    <ul>
      {contactInfo.map((contact, idx) => {
        if (contact.href) {
          return <ContactLink {...{ contact }} key={idx} />;
        }
        return <ContactClipboard {...{ contact }} key={idx} />;
      })}
    </ul>
  );
};
export default Contact;
