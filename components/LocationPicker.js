import React, { useState } from 'react';

export default function LocationPicker() {
  const [mapLink, setMapLink] = useState('');

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps', '_blank' );
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <label className="block text-[#6B21A8] font-bold mb-2">Property Location</label>
      <button 
        onClick={openGoogleMaps}
        className="w-full mb-3 bg-gray-100 text-gray-700 py-2 rounded border border-dashed border-gray-400 hover:bg-gray-200"
      >
        📍 Open Google Maps to Drop a Pin
      </button>
      <input 
        type="text" 
        placeholder="Paste Google Maps Link or Plus Code here"
        className="w-full p-2 border rounded focus:ring-2 focus:ring-[#6B21A8]"
        onChange={(e) => setMapLink(e.target.value)}
      />
      {mapLink && (
        <a href={mapLink} target="_blank" className="text-blue-600 text-sm mt-2 block underline">
          Preview Location Link
        </a>
      )}
    </div>
  );
}
