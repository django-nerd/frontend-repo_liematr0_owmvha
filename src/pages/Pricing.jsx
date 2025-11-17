import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Pricing(){
  const tiers = [
    { name: 'Advisor', price: '$4k/mo', features: ['Monthly strategy calls', 'AI roadmap', 'Vendor review'] },
    { name: 'Pilot', price: '$18k', features: ['4-6 week pilot', '1 use case', 'Enablement + handoff'] },
    { name: 'Scale', price: 'Custom', features: ['Multiple workstreams', 'SLOs and governance', 'Ongoing enablement'] },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Pricing</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {tiers.map(t => (
            <div key={t.name} className="rounded-2xl border border-black/10 p-6 bg-white">
              <div className="text-sm text-gray-500">{t.name}</div>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <button className="mt-6 inline-flex rounded-lg bg-gray-900 px-4 py-2 text-white">Get started</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
