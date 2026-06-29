import bioLogo from "../../assets/logos/bio.svg";
import techLogo from "../../assets/logos/tech.svg";
import vilniusVciipMap from "../../assets/images/vilnius-vciip-map.svg";

export function VilniusVciipMap() {
  return (
    <div className="vilnius-vciip-map">
      <img
        src={vilniusVciipMap}
        alt="VCIIP Bio ir VCIIP Tech vieta Vilniaus žemėlapyje"
        className="vilnius-vciip-map__image"
      />

      <div className="vilnius-vciip-map__marker vilnius-vciip-map__marker--bio">
        <img src={bioLogo} alt="VCIIP Bio" className="vilnius-vciip-map__logo" />
        <div className="vilnius-vciip-map__dots" aria-hidden="true">
          <span className="vilnius-vciip-map__dot vilnius-vciip-map__dot--bio" />
          <span className="vilnius-vciip-map__dot vilnius-vciip-map__dot--bio-secondary" />
        </div>
      </div>

      <div className="vilnius-vciip-map__marker vilnius-vciip-map__marker--tech">
        <img src={techLogo} alt="VCIIP Tech" className="vilnius-vciip-map__logo" />
        <span className="vilnius-vciip-map__dot vilnius-vciip-map__dot--tech" aria-hidden="true" />
      </div>
    </div>
  );
}
