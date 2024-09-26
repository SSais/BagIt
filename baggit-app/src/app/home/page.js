"use client";

import Map from "../components/Map/Map";
import Nav from "../components/Navigation/Nav";
import supabase from "../../config/supabaseClient.js";
import { useEffect, useState } from "react";

export default function MapPage() {
  const [markerLocations, setmarkerLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLocations() {
      setIsLoading(true);
      const { data, error } = await supabase.from("storeLocations").select("*");
      
      if (error) {
        console.log("error", error);
        setIsLoading(false);
        return;
      }

      const formattedLocations = data.map((location) => ({
        id: location.host_id,
        position: { lat: location.latitude, lng: location.longitude },
        title: location.host_name,
        openingHours: location.opening_time,
        closingHours: location.closing_time,
        openingDays: location.opening_days,
        smallAvailability: location.small_bag_availability,
        largeAvailability: location.large_bag_availability,
        link: "empty for now",
      }));

      setmarkerLocations(formattedLocations);
      setIsLoading(false);
    }
    fetchLocations();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Map markerLocations={markerLocations} />
      )}
      <Nav />
    </>
  );
}
