import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollButton({ scrollTop }) {
  return (
    <div className="right-fixed-component">
        <FontAwesomeIcon icon={faArrowUp} onClick={scrollTop}/>
    </div>
  );
}