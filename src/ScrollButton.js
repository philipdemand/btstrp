import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollButton({ scrollTop, lightClicked }) {
  return (
    <div className="right-fixed-component" style={{backgroundColor: lightClicked ? "#235b6e" : "#ddeef4", borderRadius: "5px" }}>
        <FontAwesomeIcon className={!lightClicked ? "icon-light" : "icon-dark"} icon={faArrowUp} onClick={scrollTop}/>
    </div>
  );
}