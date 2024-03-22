import React from "react";

function Hero() {
  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50">
          {/* Text */}
          <div className="text-gray-200 text-center my-48">
            <h1 className="font-bold text-6xl">Live in the moment</h1>
            <p className="text-xl">Your next night to remember.</p>
            <p className="text-xl">Find tickets with us.</p>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
