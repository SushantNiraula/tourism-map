// 'use client';
// import React, { useRef, useEffect } from "react";

// // Extend the Window interface to include the google property
// declare global {
//   interface Window {
//     google: any;
//     initMap: () => void;
//   }
// }

// const Map: React.FC = () => {
//   const mapRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Add Google Maps script dynamically
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIhlu48Rgp5oPbgPAV6CTslmRu5S1mI6g&callback=initMap`;
//     script.async = true;
//     (window as any).initMap = () => {
        
//       if (mapRef.current) {
//         new window.google.maps.Map(mapRef.current, {
//           center: { lat: 26.73059231379446, lng: 85.9256516386191 }, // Janakpur's approximate center
//           zoom: 13,
//         });
//       }
//     };
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <div
//       ref={mapRef}
//       style={{
//         width: "100%",
//         height: "100%",
//         border: "2px solid #333",
//         borderRadius: "8px",
//       }}
//     ></div>
//   );
// };

// export default Map;

'use client';
import React, { useRef, useEffect, useState } from "react";

interface MarkerData {
  position: { lat: number; lng: number };
  name: string;
  description: string;
}

// Extend the Window interface to include the google property and initMap function
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface MapProps {
  onMarkerClick: (place: MarkerData | null) => void;
}

const Map: React.FC<MapProps> = ({ onMarkerClick }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const markersData: MarkerData[] = [
    {
      position: { lat: 26.729006, lng: 85.924764 },
      name: "Janaki Mandir",
      description: "A historic temple dedicated to Sita Devi.",
    },
    {
      position: { lat: 26.727727, lng: 85.924833 },
      name: "Ram Mandir",
      description: "One of the oldest temples in Janakpur.",
    },
    {
      position: { lat: 26.730135, lng: 85.923789 },
      name: "Dhanush Sagar",
      description: "A sacred pond near Janaki Mandir.",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIhlu48Rgp5oPbgPAV6CTslmRu5S1mI6g&callback=initMap`;
    script.async = true;

    window.initMap = () => {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 26.729006, lng: 85.924764 },
          zoom: 15,
        });

        // Add markers
        markersData.forEach((markerData) => {
          const marker = new window.google.maps.Marker({
            position: markerData.position,
            map,
            title: markerData.name,
          });

          // Add click event to marker
          marker.addListener("click", () => {
            onMarkerClick(markerData);
          });
        });

        // Default behavior when clicking outside any marker
        map.addListener("click", () => {
          onMarkerClick(null);
        });
      }
    };

    document.body.appendChild(script);
  }, [onMarkerClick]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        border: "2px solid #333",
        borderRadius: "8px",
      }}
    />
  );
};

export default Map;