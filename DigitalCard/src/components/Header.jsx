import avatar from "../images/Sunshine.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <img className="avatar" src={avatar} alt="" />
        <h1 className="name">Laura Smith</h1>
        <h2 className="position">Frontend Dev</h2>
        <h3 className="website">laurasmith.website</h3>
        <div className="button-wrapper">
          <button className="emailButton">{envelope} Email</button>
          <button className="linkedinButton">{linkedinIcon} Linkedin</button>
        </div>
      </div>
    </header>
  );
}
