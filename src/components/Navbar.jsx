import React from "react";

function Navbar() {
  return (
    <div className="py-4 px-24">
      {/* Entire Nav */}
      <div className="flex">
        <h1 className="font-bold text-2xl">
          Show <span className="text-blue-500">Me </span> |{" "}
        </h1>

        {/* Nav Items */}
        <div className="flex gap-4 py-1 px-2">
          <p>Concerts</p>
          <p>Comedy Shows</p>
          <p>Events</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
