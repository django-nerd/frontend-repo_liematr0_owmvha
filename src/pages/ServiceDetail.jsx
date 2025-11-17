import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'

const content = {
  'ai-strategy': {
    title: 'AI Strategy',
    intro: 'Make AI a durable advantage. We build pragmatic roadmaps that connect data, models, and teams to revenue.',
    what: [
      'Readiness assessments and capability mapping',
      'Governance, risk, and privacy frameworks',
      'Platform selection and vendor evaluation',
      'Operating model and enablement'
    ]
  },
  'ai-automation': {
    title: 'AI Automation',
    intro: 'Automate the mundane. We design agentic workflows that improve speed, accuracy, and customer experience.',
    what: [
      'Process discovery and prioritization',
      'RPA + LLM orchestration and integrations',
      'Human-in-the-loop review and monitoring',
      'Cost controls and observability'
    ]
  },
  'ai-seo': {
    title: 'AI SEO',
    intro: 'Compound growth through programmatic SEO and search experiences powered by AI.',
    what: [
      'Programmatic architecture and taxonomy',
      'Content generation pipelines and QA',
      'Semantic search and on-site AI experiences',
      'Analytics and experimentation'
    ]
  }
}

export default function ServiceDetail(){
  const { slug } = useParams()
  const data = content[slug]

  if(!data){
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-28 mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-bold">Service not found</h1>
          <p className="mt-2 text-gray-600">Return to <Link to="/services" className="text-purple-600">Services</Link></p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500"><Link to="/services" className="text-purple-600">Services</Link> / {data.title}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{data.title}</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">{data.intro}</p>

          <div className="mt-8 grid gap-4">
            {data.what.map(w => (
              <div key={w} className="rounded-xl border border-black/10 p-4 bg-white">{w}</div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 p-6 bg-gradient-to-br from-purple-50 to-blue-50">
            <h3 className="font-semibold">Get a tailored plan</h3>
            <p className="mt-1 text-sm text-gray-600">Tell us about your goals and constraints. We’ll respond within 24 hours.</p>
            <Link to="/contact" className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white">Contact us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
