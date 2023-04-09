import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

const title = <FontAwesomeIcon icon={faEarth} />;
export default function Nav() {
  return (
    <div className="nav-title">
      <p>{title} my travel journal.</p>
    </div>
  );
}
