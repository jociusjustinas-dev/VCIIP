const vilniusVciipLocationMapSrc = "/vilnius-vciip-location-map.png";

export function VilniusVciipMap() {
  return (
    <div className="vilnius-vciip-map">
      <img
        src={vilniusVciipLocationMapSrc}
        alt="VCIIP Bio ir VCIIP Tech vieta Vilniaus žemėlapyje"
        className="vilnius-vciip-map__image"
      />
    </div>
  );
}
