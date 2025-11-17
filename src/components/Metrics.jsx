import { motion } from 'framer-motion'

const metrics = [
  { label: 'Avg. ROI in 6 months', value: '4.1x' },
  { label: 'Automations shipped', value: '120+' },
  { label: 'Time-to-value', value: '< 4 weeks' },
  { label: 'NPS from clients', value: '72' },
]

export default function Metrics(){
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{m.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-gray-500">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
