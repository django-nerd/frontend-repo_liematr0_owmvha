import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CaseStudies(){
  const items = [
    { company: 'Acme SaaS', result: 'Reduced support resolution time by 42% with agentic workflows.' },
    { company: 'FinX', result: 'Shipped RAG knowledge bot to 2k employees in 6 weeks.' },
    { company: 'RetailCo', result: 'Programmatic SEO added +120k monthly visits in 4 months.' },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Case Studies</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">Real outcomes from recent projects.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map(i => (
            <div key={i.company} className="rounded-2xl border border-black/10 p-6 bg-white">
              <div className="text-sm text-gray-500">{i.company}</div>
              <div className="mt-2 font-semibold">{i.result}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
