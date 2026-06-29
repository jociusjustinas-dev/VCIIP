import vilniusVciipLocationMap from "../../assets/images/vilnius-vciip-location-map.svg";

export function VilniusVciipMap() {
  return (
    <div className="vilnius-vciip-map">
      <img
        src={vilniusVciipLocationMap}
        alt="VCIIP Bio ir VCIIP Tech vieta Vilniaus žemėlapyje"
        className="vilnius-vciip-map__image"
      />
    </div>
  );
}
