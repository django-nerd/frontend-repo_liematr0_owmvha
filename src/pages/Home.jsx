import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import ServicesGrid from '../components/ServicesGrid'
import Features from '../components/Features'
import Metrics from '../components/Metrics'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Marquee from '../components/Marquee'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'

export default function Home(){
  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <BackgroundFX />
      <main>
        <Hero />
        <Marquee />
        <Logos />
        <Features />
        <ServicesGrid />
        <Metrics />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
