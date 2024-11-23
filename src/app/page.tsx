// import Image from "next/image";
// import Map from "../components/Map";
// import FamousPlaces from "../components/FamousPlaces";
// import Footer from "../components/Footer";
// export default function Home() {
//   return (
//     <div className="h-screen flex flex-col">
//       <div className="flex-grow flex">
//         <div className="w-2/3 h-full">
//           <Map />
//         </div>
//         <div className="w-1/3 h-full bg-gray-100">
//           <FamousPlaces />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
'use client'
import React, { useState } from "react";
import Map from "../components/Map";
import FamousPlaces from "../components/FamousPlaces";
import Footer from "../components/Footer";

interface MarkerData {
  name: string;
  description: string;
}

const Home: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<MarkerData | null>(null);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex">
        <div className="w-2/3 h-full">
          <Map onMarkerClick={setSelectedPlace} />
        </div>
        <div className="w-1/3 h-full bg-gray-100">
          <FamousPlaces selectedPlace={selectedPlace} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;