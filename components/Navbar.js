export default function Navbar() {
  return (
    <nav className="bg-[#6B21A8] text-white p-4 flex justify-between items-center border-b-2 border-[#D4AF37]">
      <h1 className="text-xl font-bold text-[#D4AF37]">HaoHunters</h1>
      <div className="flex gap-4 text-sm font-semibold">
        <button>Browse</button>
        <button className="bg-[#D4AF37] text-[#6B21A8] px-4 py-1 rounded-full">Login</button>
      </div>
    </nav>
  )
}
