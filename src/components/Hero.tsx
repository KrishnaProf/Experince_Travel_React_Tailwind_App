import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div>
          <p>All Inclusive</p>
          <h1>Private Beaches & Getaways</h1>
          <p>
            RXJS (Reactive Extensions for JavaScript) is a library for composing
            asynchronous and event-based programs using observable sequences. It
            provides an easy way to create and work with streams of data in a
            functional programming style.
          </p>
        </div>
      </div>
    </div>
  );
}
