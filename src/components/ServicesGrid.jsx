import { Link } from 'react-router-dom'
import { Bot, Workflow, Search } from 'lucide-react'

const services = [
  {
    slug: 'ai-strategy',
    title: 'AI Strategy',
    icon: Bot,
    desc: 'Roadmaps, governance, and platform selection to align AI to business outcomes.'
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    icon: Workflow,
    desc: 'Streamline operations with agentic workflows, RPA + LLMs, and integrations.'
  },
  {
    slug: 'ai-seo',
    title: 'AI SEO',
    icon: Search,
    desc: 'Programmatic SEO, content automation, and search experiences that convert.'
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Services</h2>
          <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900">View all</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, desc, icon: Icon }) => (
            <Link key={slug} to={`/services/${slug}`} className="group rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <span className="mt-4 inline-block text-sm text-purple-600 group-hover:translate-x-0.5 transition">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
