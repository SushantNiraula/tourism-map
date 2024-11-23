import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 text-center">
      <h2 className="font-semibold mb-2">Upcoming Events in Janakpur</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-white p-3 rounded shadow w-64">Event 1: Janaki Festival</div>
        <div className="bg-white p-3 rounded shadow w-64">Event 2: Ram Navami Celebration</div>
        <div className="bg-white p-3 rounded shadow w-64">Event 3: Cultural Fair</div>
        <div className="bg-white p-3 rounded shadow w-64">Event 4: Religious Conference</div>
      </div>
    </div>
  );
};

export default Footer;