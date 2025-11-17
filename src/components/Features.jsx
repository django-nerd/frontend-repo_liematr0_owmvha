import { motion } from 'framer-motion'
import { Bot, LineChart, Shield, Zap, Brain, Search } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Weeks not months', desc: 'Ship usable outcomes in weeks with focused sprints.' },
  { icon: Shield, title: 'Enterprise-ready', desc: 'Security, governance, and evals from day one.' },
  { icon: Brain, title: 'Pragmatic AI', desc: 'Model-agnostic with an obsession for measurable value.' },
  { icon: LineChart, title: 'Compounding ROI', desc: 'Automate, optimize, and scale once the flywheel spins.' },
  { icon: Search, title: 'AI SEO', desc: 'Programmatic content systems that actually convert.' },
  { icon: Bot, title: 'Agentic workflows', desc: 'Orchestrated agents that get real work done.' },
]

export default function Features(){
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Why teams choose us</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="absolute -top-24 -left-24 h-44 w-44 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-2xl" />
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
