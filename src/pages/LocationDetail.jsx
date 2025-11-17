import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'

export default function LocationDetail(){
  const { slug } = useParams()

  const title = slug.replace('-', ' ').replace(/\w/g, (c) => c.toUpperCase())

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500"><Link to="/locations" className="text-purple-600">Locations</Link> / {title}</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">AI Consulting in {title}</h1>
        <p className="mt-3 text-gray-700">We partner with companies in {title} to ship AI initiatives that matter. On-site and remote options available.</p>
        <div className="mt-8 grid gap-4">
          {["Discovery and scoping","Rapid pilots","Enablement and training"].map((w) => (
            <div key={w} className="rounded-xl border border-black/10 p-4 bg-white">{w}</div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-black/10 p-6 bg-gradient-to-br from-purple-50 to-blue-50">
          <h3 className="font-semibold">Talk with a consultant</h3>
          <p className="mt-1 text-sm text-gray-600">Share your goals and we’ll tailor a plan for {title}.</p>
          <Link to="/contact" className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white">Contact us</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
