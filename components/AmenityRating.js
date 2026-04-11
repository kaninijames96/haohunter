import React from 'react';

export default function AmenityRating({ amenities }) {
  const calculateStars = () => {
    let score = 0;
    if (amenities.water === 'Borehole') score += 1;
    if (amenities.parking > 0) score += 1;
    if (amenities.fiber) score += 1;
    if (amenities.security) score += 1;
    if (amenities.lift || amenities.garbage) score += 1;
    return score;
  };

  const stars = calculateStars();

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg border-l-4 border-[#D4AF37]">
      <div className="flex text-[#D4AF37] text-xl">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < stars ? '★' : '☆'}</span>
        ))}
      </div>
      <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
        {amenities.fiber && <span className="mr-2">📶 Fiber Ready ({amenities.isp})</span>}
        {amenities.water && <span>💧 {amenities.water}</span>}
      </div>
    </div>
  );
}
