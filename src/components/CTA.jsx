import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(124,58,237,0.10)_0%,rgba(59,130,246,0.08)_45%,transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl text-center px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          Turn AI experiments into reliable revenue
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 text-gray-700 max-w-2xl mx-auto"
        >
          Book a no-pressure discovery call. Well map your opportunities and ship a plan in days.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white shadow hover:bg-black transition">Book a Discovery Call</Link>
          <Link to="/case-studies" className="inline-flex items-center justify-center rounded-lg border border-black/10 px-5 py-3 bg-white text-gray-900 hover:bg-black/5 transition">See Success Stories</Link>
        </motion.div>
      </div>
    </section>
  )
}
