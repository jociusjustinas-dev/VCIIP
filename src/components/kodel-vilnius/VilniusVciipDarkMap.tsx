import bioLogo from "../../assets/logos/bio.svg";
import techLogo from "../../assets/logos/tech.svg";
import vilniusDarkMap from "../../assets/images/vilnius-vciip-dark-map.svg";

export function VilniusVciipDarkMap() {
  return (
    <div className="vilnius-dark-map">
      <img src={vilniusDarkMap} alt="" className="vilnius-dark-map__base" />

      <div className="vilnius-dark-map__marker vilnius-dark-map__marker--bio">
        <img src={bioLogo} alt="VCIIP Bio" className="vilnius-dark-map__logo" />
        <div className="vilnius-dark-map__dots">
          <span className="vilnius-dark-map__dot vilnius-dark-map__dot--bio" aria-hidden="true" />
          <span className="vilnius-dark-map__dot vilnius-dark-map__dot--bio-secondary" aria-hidden="true" />
        </div>
      </div>

      <div className="vilnius-dark-map__marker vilnius-dark-map__marker--tech">
        <img src={techLogo} alt="VCIIP Tech" className="vilnius-dark-map__logo" />
        <span className="vilnius-dark-map__dot vilnius-dark-map__dot--tech" aria-hidden="true" />
      </div>
    </div>
  );
}
