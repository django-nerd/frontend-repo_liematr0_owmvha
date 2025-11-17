import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Bot, Workflow, Search } from 'lucide-react'

const services = [
  { slug: 'ai-strategy', title: 'AI Strategy', icon: Bot, bullets: [
    'AI readiness assessments and roadmaps',
    'Data and model governance frameworks',
    'Build vs. buy evaluation and platform selection',
  ]},
  { slug: 'ai-automation', title: 'AI Automation', icon: Workflow, bullets: [
    'Agentic workflows for ops and CX',
    'RPA + LLM orchestration and integrations',
    'Human-in-the-loop review and monitoring',
  ]},
  { slug: 'ai-seo', title: 'AI SEO', icon: Search, bullets: [
    'Programmatic SEO architecture',
    'Content generation pipelines',
    'Semantic search and on-site AI experiences',
  ]},
]

export default function Services(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Services</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">Partner with a senior team that ships. Clear strategy, pragmatic builds, and measurable growth.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({slug, title, bullets, icon: Icon}) => (
              <Link key={slug} to={`/services/${slug}`} className="group rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {bullets.map(b => <li key={b}>• {b}</li>)}
                </ul>
                <span className="mt-4 inline-block text-sm text-purple-600 group-hover:translate-x-0.5 transition">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
