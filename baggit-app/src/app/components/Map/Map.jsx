'use client'

import React, { useState, useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import styles from "./Map.module.css";

// You need to replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = ''

const locations = [
  { id: 1, position: { lat: 52.48267771366152, lng: -1.8924990491205056 }, title: "Birmimgham", description: "The Big Apple" },
  { id: 2, position: { lat: 34.0522, lng: -118.2437 }, title: "Los Angeles", description: "City of Angels" },
  { id: 3, position: { lat: 41.8781, lng: -87.6298 }, title: "Chicago", description: "The Windy City" },
] /// These are marked locations on the map

const mapContainerStyle = {
  width: '100%',
  height: '600px'
}

export default function MapApp() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({ lat: 52.48267771366152, lng: -1.8924990491205056 })
  const [zoom, setZoom] = useState(8)
  const [searchLocation, setSearchLocation] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')
  const [selectedLocation, setSelectedLocation] = useState(null)

  const mapRef = useRef()

  const onLoad = useCallback((map) => {
    mapRef.current = map
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const handleSearch = () => {
    if (searchLocation) {
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({ address: searchLocation }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const { lat, lng } = results[0].geometry.location
          setCenter({ lat: lat(), lng: lng() })
          setZoom(12)
        } else {
          alert('Location not found')
        }
      })
    }
  }

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCenter({ lat: latitude, lng: longitude })
          setZoom(12)
          setCurrentLocation(`${latitude}, ${longitude}`)
        },
        () => {
          alert('Error: The Geolocation service failed.')
        }
      )
    } else {
      alert('Error: Your browser doesn\'t support geolocation.')
    }
  }

  return (
    <div >
      <div >
        <h2>Map Search</h2>
        <div>
          <input
            type="text"
            placeholder="Enter location to search"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            aria-label="Search location"
          />
          <button onClick={handleSearch} >Search</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Current location"
            value={currentLocation}
            readOnly
            aria-label="Current location"
          />
          <button onClick={handleCurrentLocation}>Get Current Location</button>
        </div>
      </div>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom= {zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => setSelectedLocation(location)}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <h2>{selectedLocation.title}</h2>
                <p>{selectedLocation.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}