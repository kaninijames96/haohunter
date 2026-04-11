import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="p-20 text-center">
        <h1 className="text-4xl font-bold text-[#6B21A8]">HaoHunters</h1>
        <p className="text-[#D4AF37] text-xl mt-4 font-semibold">Kenya's #1 Verified Property Platform</p>
      </div>
    </div>
  )
}
