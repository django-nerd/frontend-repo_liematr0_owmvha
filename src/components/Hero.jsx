import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              AI Consulting for Ambitious Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-gray-700 max-w-2xl"
            >
              We help you design, ship, and scale AI products. Strategy, automation, and search — all aligned to revenue.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white shadow hover:bg-black transition"
              >
                Book a Discovery Call
              </Link>
              <Link
                to="/services"
                className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-black/10 px-5 py-3 text-gray-900 bg-white hover:bg-black/5 transition"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative p-6 rounded-2xl bg-white/70 backdrop-blur border border-black/5 shadow-xl">
              <h3 className="text-xl font-semibold">Capabilities</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {['AI Strategy','Automation','AI SEO','RAG/LLM Apps','Data Pipelines','Agentic Workflows'].map((item) => (
                  <li key={item} className="rounded-lg border border-black/10 px-3 py-2 bg-white/80">{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">SOC2-ready processes. Privacy-first. Measurable outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
