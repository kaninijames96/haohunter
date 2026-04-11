import React from 'react';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="p-20 text-center">
        <h1 className="text-5xl font-extrabold text-[#6B21A8]">HaoHunters</h1>
        <p className="text-[#D4AF37] text-2xl mt-4 font-bold">Kenya's #1 Verified Property Platform</p>
      </div>
    </div>
  );
}
