import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "./MapWrapper.css";

function MapWrapper() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const center = useMemo(() => ({ lat: 43.464302, lng: -80.466494 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-wrapper">
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default MapWrapper;
