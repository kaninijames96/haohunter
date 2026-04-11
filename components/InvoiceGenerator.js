import React, { useState } from 'react';

export default function InvoiceGenerator() {
  const [amount, setAmount] = useState('');
  const [tenant, setTenant] = useState('');

  const handleWhatsApp = () => {
    const message = `Hello ${tenant}, your invoice for KES ${amount} is ready. Please check HaoHunters for details.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message )}`, '_blank');
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#6B21A8] max-w-md mx-auto mt-10">
      <h3 className="text-xl font-bold text-[#6B21A8] mb-4">Generate Invoice</h3>
      <input 
        type="text" placeholder="Tenant Name" 
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setTenant(e.target.value)}
      />
      <input 
        type="number" placeholder="Amount (KES)" 
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex gap-2">
        <button className="flex-1 bg-[#6B21A8] text-white py-2 rounded font-bold">Download PDF</button>
        <button onClick={handleWhatsApp} className="flex-1 bg-[#25D366] text-white py-2 rounded font-bold">WhatsApp</button>
      </div>
    </div>
  );
}
