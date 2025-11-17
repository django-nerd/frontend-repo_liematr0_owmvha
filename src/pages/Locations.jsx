import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const phase1 = ['australia','melbourne','sydney','united-states','new-york','san-francisco','united-kingdom','london','canada','toronto','new-zealand','auckland']
const phase2 = ['singapore','ireland','dublin','united-arab-emirates','dubai']

export default function Locations(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Areas We Serve</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">We work remotely and on-site with teams across the globe.</p>

        <section className="mt-8">
          <h2 className="font-semibold text-gray-900">Phase 1</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {phase1.map(slug => (
              <Link key={slug} to={`/locations/${slug}`} className="rounded-xl border border-black/10 p-4 hover:shadow-md transition">{slug.replace('-', ' ')}</Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-semibold text-gray-900">Phase 2</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {phase2.map(slug => (
              <Link key={slug} to={`/locations/${slug}`} className="rounded-xl border border-black/10 p-4 hover:shadow-md transition">{slug.replace('-', ' ')}</Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
