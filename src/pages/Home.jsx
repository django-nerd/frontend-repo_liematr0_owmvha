import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import ServicesGrid from '../components/ServicesGrid'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
