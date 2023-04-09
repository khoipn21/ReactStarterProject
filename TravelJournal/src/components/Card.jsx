import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img src={`../public/images/${props.image}`} alt="" />
      </div>
      <div className="content">
        <p className="card-country">
          <span><FontAwesomeIcon icon={faLocationDot} /></span> {props.country}
          <a href={props.map}>View on Google Maps</a>
        </p>
        <h1 className="card-destination">{props.destination}</h1>
        <p className="card-schedule">{props.schedule}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}