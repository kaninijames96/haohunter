import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold text-[#6B21A8]">Welcome to HaoHunters</h1>
        <p className="text-[#D4AF37] mt-4 text-xl">Kenya's #1 Verified Property Platform</p>
      </main>
    </div>
  );
}
