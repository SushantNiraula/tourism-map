import { useEffect, useRef } from "react";
import axios from "axios";

export default function TourismMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    async function loadMap() {
      // Fetch the API key from the backend
      const response = await axios.get("/api/maps-key");
      const { apiKey } = response.data;

      // Load the Google Maps script dynamically
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);

      window.initMap = () => {
        // Initialize the map
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 26.730542367888038, lng: 85.92548387193136 }, // Kathmandu as default
          zoom: 14,
        });

        // Add markers for locations
        
        const locations = [
          { lat: 26.730542367888038, lng: 85.92548387193136, name: "Janaki Mandir" },
        ];

        locations.forEach((location) => {
          const marker = new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map,
            title: location.name,
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `<div><h3>${location.name}</h3></div>`,
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        });
      };
    }

    loadMap();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
}