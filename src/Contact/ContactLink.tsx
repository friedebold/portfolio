import { FiExternalLink } from "react-icons/fi";
import { ContactPoint } from ".";

interface Props {
  contact: ContactPoint;
}

const ContactLink: React.FC<Props> = ({ contact }) => {
  return (
    <li>
      <a target="none" href={contact.href!}>
        <p>{contact.title}</p>
      </a>
      <div style={{ width: 10 }} />
      <FiExternalLink color="white" opacity={0.5} size="14" />
    </li>
  );
};

export default ContactLink;
