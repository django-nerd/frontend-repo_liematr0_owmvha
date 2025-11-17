import { motion } from 'framer-motion'

const quotes = [
  {
    quote: 'We shipped a high-impact automation in three weeks. The ROI was immediate.',
    author: 'COO, Fintech Scaleup'
  },
  {
    quote: 'The team brought clarity to a noisy space and got us shipping fast.',
    author: 'Head of Data, Marketplace Unicorn'
  },
  {
    quote: 'Our search traffic doubled after the AI SEO roadmap.',
    author: 'VP Marketing, SaaS'
  }
]

export default function Testimonials(){
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What clients say</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-gray-800">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">{q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
