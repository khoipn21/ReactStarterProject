import fbIcon from "../images/fb.jpg";
import gitIcon from "../images/git.jpg";
import instIcon from "../images/inst.jpg";
import twitterIcon from "../images/twitter.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const fb = <FontAwesomeIcon icon="fa-brands fa-facebook" />;
  return (
    <footer>
      <div className="icon-wrapper">
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </div>
    </footer>
  );
}
