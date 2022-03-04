import React, { useEffect, useState } from "react";
import { ContactPoint } from "../../apis/model";

interface Props {
  contact: ContactPoint;
}

const ContactItem: React.FC<Props> = ({ contact }) => {
  const [savedToClipboard, setSavedToClipboard] = useState(false);

  useEffect(() => {
    if (savedToClipboard) {
      setTimeout(() => {
        setSavedToClipboard(false);
      }, 1000);
    }
  }, [savedToClipboard]);

  const saveToClipboard = () => {
    navigator.clipboard.writeText(contact.title);
    setSavedToClipboard(true);
  };

  if (contact.href) {
    return (
      <a
        className="list-item"
        style={{
          textDecoration: "none",
        }}
        target="none"
        href={contact.href}
      >
        <li>
          <p>{contact.title}</p>
        </li>
      </a>
    );
  } else
    return (
      <button
        className="list-item"
        style={{ cursor: "pointer" }}
        onClick={() => saveToClipboard()}
      >
        <li>
          <p style={{ opacity: savedToClipboard ? 0.5 : 1 }}>
            {!savedToClipboard ? contact.title : "copying to clipboard..."}
          </p>
        </li>
      </button>
    );
};

export default ContactItem;
