"use client";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <Hero />
      </div>
    </>
  );
}
