import React, { useEffect, useState } from "react";
import { ContactPoint } from ".";

interface Props {
  contact: ContactPoint;
}

const ContactClipboard: React.FC<Props> = ({ contact }) => {
  const [savedToClipboard, setSavedToClipboard] = useState(false);

  useEffect(() => {
    if (savedToClipboard)
      setTimeout(() => {
        setSavedToClipboard(false);
      }, 1000);
  }, [savedToClipboard]);

  const saveToClipboard = () => {
    navigator.clipboard.writeText(contact.title);
    setSavedToClipboard(true);
  };

  return (
    <li onClick={() => saveToClipboard()}>
      <p style={{ opacity: savedToClipboard ? 0.5 : 1 }}>
        {!savedToClipboard ? contact.title : "copied to clipboard..."}
      </p>
    </li>
  );
};

export default ContactClipboard;
