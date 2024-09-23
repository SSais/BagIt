'use client'

import React, { createContext } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from "./Map.module.css";

const containerStyle = {
  width: '100%',
  height: '100%' // Make height 100% for better responsiveness
};

const center = {
  lat: 52.48267771366152,
  lng: -1.8924990491205056
};

export default function Map() {
  const [mapError, setMapError] = React.useState(null);

  const handleLoadError = (error) => {
    console.error("Error loading Google Maps:", error);
    setMapError("Failed to load Google Maps. Please try again later.");
  };

  if (mapError) {
    return <div className={styles.errorMessage}>{mapError}</div>;
  }

  return (
    <div className={styles.mapContainer}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onError={handleLoadError}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
        >
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
