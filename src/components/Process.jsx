import { motion } from 'framer-motion'
import { Sparkles, Workflow, Rocket, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: Sparkles,
    title: 'Discover',
    desc: 'Rapid audit of processes, data, and opportunities. We align on ROI and risks.'
  },
  {
    icon: Workflow,
    title: 'Design',
    desc: 'Solution architecture, model choices, evaluation plan, and change management.'
  },
  {
    icon: Rocket,
    title: 'Deliver',
    desc: 'Ship a usable v1 in weeks. Automate, iterate, and measure real outcomes.'
  },
  {
    icon: ShieldCheck,
    title: 'Scale',
    desc: 'Governance, monitoring, and training for reliable production performance.'
  }
]

export default function Process(){
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How we work</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl" />
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
