import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  { q: 'How do you start engagements?', a: 'We begin with discovery to align on goals, data, and constraints, then co-design a plan and pilot.' },
  { q: 'What industries do you serve?', a: 'SaaS, finance, retail, and healthcare. We tailor approach to your regulatory needs.' },
  { q: 'How do you handle privacy?', a: 'Privacy-by-design. We implement governance, access controls, redaction, and observability.' },
]

export default function FAQ(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">FAQ</h1>
        <div className="mt-8 divide-y divide-black/5 rounded-2xl border border-black/10 bg-white">
          {faqs.map(f => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
