'use client'

import React, { useState, useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import styles from "./Map.module.css";
import Image from 'next/image';

// Remember to replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

// This is the map styles which removes the labels from the map
const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  }
];

// This is the map container styling
const mapContainerStyle = {
  width: '100%',
  height: '100vh',
  margin: '0 auto'
}

// This is the map app
export default function MapApp({ markerLocations }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  })

  // This is the map state
  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({ lat: 52.48267771366152, lng: -1.8924990491205056 })
  const [zoom, setZoom] = useState(8)
  const [searchLocation, setSearchLocation] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')
  const [selectedLocation, setSelectedLocation] = useState(null)

  // This is the map reference
  const mapRef = useRef()

  // This is the map load function which sets the map to the map reference and the map state
  const onLoad = useCallback((map) => {
    mapRef.current = map
    setMap(map)
    map.setZoom(12)
  }, [])

  // This is the map unmount function which sets the map to null, I dont know what this does but it is needed
  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  // This is the search function which searches for a location and sets the center to the location and the zoom to 12
  const handleSearch = () => {
    if (searchLocation) {
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({ address: searchLocation }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const { lat, lng } = results[0].geometry.location
          setCenter({ lat: lat(), lng: lng() })
          setZoom(14)
        } else {
          alert('Location not found')
        }
      })
    }
  }

  // This is the current location function which gets the current location and sets the center to the current location and the zoom to 14
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCenter({ lat: latitude, lng: longitude })
          setZoom(14)
          setCurrentLocation(`${latitude}, ${longitude}`)
        },
        () => {
          alert('Error: The Geolocation service failed.')
        }
      )
    } else {
      alert('Error: Your browser does not support geolocation.')
    }
  }

  // This is the  function to handle closing the pop-up
  const handleClosePopup = () => {
    setSelectedLocation(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.mapSearchOnTop}>
        <Image className={styles.appLogo} src="/logo.png" alt="BaggIt Logo" width={144} height={160} />
        <div className={styles.mapSearchInput}>
          <input
            type="text"
            placeholder="Enter location to search"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            aria-label="Search location"
          />
          <button onClick={handleSearch} className={styles.mapSearchButton}>Search</button>
        </div>
        <div>
          <button onClick={handleCurrentLocation} className={styles.mapSearchInputGeo}>
            <Image className={styles.mapSearchInputGeoImg} src="/target.png" alt="Current Location" width={512} height={512} />
          </button>
        </div>
      </div>

      {/* This is the map which is loaded if the map is properly loaded */}

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ styles: mapStyles, streetViewControl: false, zoomControl: false }}
        >
          {markerLocations && markerLocations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => {
                setSelectedLocation(location);
                setCenter({
                  lat: location.position.lat - 0.003,
                  lng: location.position.lng,
              });
              }}
              icon={{
                url: '/marker.png',
                scaledSize: new window.google.maps.Size(40, 50),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(16, 32),
              }}
            />
          ))}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}

      {selectedLocation && (
        <div className={styles.popupContainer}>
          <div className={styles.popupContent}>

            <hr className={styles.popupContentHr} />

            <button className={styles.closeButton} onClick={handleClosePopup}>
              &times;
            </button>

            <h2 className={styles.popupContentTitle}>
              {selectedLocation.title}
            </h2>

            <div className={styles.popupContainerInfoWrapper}>
              <p className={styles.popupContentOpeningHours}>
                <span className={styles.popupContentOpeningHoursSpan}>Opening Times: </span>{selectedLocation.openingDays} {selectedLocation.openingHours}hrs
                - {selectedLocation.closingHours}hrs
              </p>

              <p className={styles.popupContentOpeningDays}>

              </p>

              <p><span className={styles.popupContentRatingSpan}>Rating: </span>
                <Image src='/star50px.png' alt='star' width={15} height={13} />
                <Image src='/star50px.png' alt='star' width={15} height={13} />
                <Image src='/star50px.png' alt='star' width={15} height={13} />
                <Image src='/star50px.png' alt='star' width={15} height={13} />
                <Image src='/star50px.png' alt='star' width={15} height={13} /> (2+ reviews)</p>

              <p className={styles.popupContentSmallAvailability}>
                <span
                  className={styles.popupContentSmallAvailabilitySpan}>
                  Space Available: </span>

                {selectedLocation.smallAvailability} small bags, {selectedLocation.largeAvailability} large bags
              </p>

            </div>

            <Image className={styles.popupContentImage} src='/storehobbs.png' alt='Image of the store' width={100} height={100} />

            <button onClick={
              () => window.location.href = 'https://baggit-app.vercel.app/storeinfo'}
              className={styles.visitLink}>
              Details
            </button>

          </div>
        </div>
      )
      }
    </div >
  )
}