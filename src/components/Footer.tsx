import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  const data = [
    {
      position: { lat: 26.771017645031975, lng: 85.9234104125973 },
      name: "Janaki Mandir",
      description: "A historic temple dedicated to Sita Devi.",
      image: "/JANAKPUR.JPG",
    },
    {
      position: { lat: 26.730008050564077, lng: 85.92655558692753 },
      name: "Ram Mandir",
      description: "One of the oldest temples in Janakpur.",
      image: "/rammandir.jpg",
    },
    {
      position: { lat: 26.72911470354643, lng: 85.92804600967762 },
      name: "Dhanush Sagar",
      description: "A sacred pond near Janaki Mandir.",
      image: "/DhanusSagar.jpg",
    },
    {
      position: { lat: 26.72990489490625, lng: 85.92927576417682 },
      name: "Ganga Sagar",
      description: "A sacred pond near Janaki Mandir.",
      image: "/GangaSagar.jpg",
    },
    {
      position: { lat: 26.7315797122424, lng: 85.92463704832791 },
      name: "Ram Janaki Vivaha Mandap",
      description:
        "A historical place where Lord Ram and Goddess Sita had their marriage.",
      image: "/RamjanakiBibahaMandap.jpg",
    },
    {
      position: { lat: 26.653154576118574, lng: 85.79912424087415 },
      name: "Jaleshwor",
      description:
        "A municipality and the headquarters of Mahottari district in Madhesh Province.",
      image: "/jaleshwor.jpg",
    },
  ];

  return (
    <div className="bg-gray-200 p-4 text-center">
      <h2 className="font-semibold mb-4">Other Places To Visit</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((place, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded shadow w-72 flex flex-col items-center"
          >
            <Image
              alt={place.name}
              src={place.image}
              width={200}
              height={150}
              className="rounded mb-3"
            />
            <h3 className="font-bold text-lg">{place.name}</h3>
            <p className="text-gray-600 text-sm">{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
