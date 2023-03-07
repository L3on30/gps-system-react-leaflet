import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useRef, useEffect, useState } from 'react';

function Map() {
  const mapRef = useRef();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition([latitude, longitude]);
      mapRef.current.setView([latitude, longitude], 13);
    });
  }, []);

  return (
    <MapContainer ref={mapRef} center={[0, 0]} zoom={13} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {position && (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;