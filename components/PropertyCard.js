import React from 'react';
import AmenityRating from './AmenityRating';

export default function PropertyCard({ property = {} }) {
  const imageUrl = property.imageUrl || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80';
  
  // Dummy amenities for now
  const amenities = property.amenities || { 
    water: 'Borehole', 
    parking: 1, 
    fiber: true, 
    isp: 'Safaricom',
    security: true 
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden m-4 w-full md:w-80 border-b-4 border-[#D4AF37] transition-transform hover:scale-105">
      <div className="relative">
        <img src={imageUrl} alt="Property" className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-[#6B21A8] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {property.type || 'Apartment'}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#6B21A8] mb-1">{property.title || 'Modern 2-Bedroom'}</h3>
        <p className="text-gray-500 text-sm flex items-center mb-3">
          📍 {property.location || 'Westlands, Nairobi'}
        </p>
        
        {/* NEW: 5-Star Rating System Integrated */}
        <AmenityRating amenities={amenities} />

        <div className="flex items-center justify-between border-t mt-4 pt-4">
          <span className="text-[#6B21A8] font-extrabold text-lg">KES {property.price || '35,000'}/mo</span>
          <button className="bg-[#D4AF37] text-[#6B21A8] text-xs font-bold px-4 py-2 rounded-lg">View Details</button>
        </div>
      </div>
    </div>
   );
}
