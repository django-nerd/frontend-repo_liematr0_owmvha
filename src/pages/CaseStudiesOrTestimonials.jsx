import GenericPage from './GenericPage'

export default function CaseStudiesOrTestimonials(){
  return (
    <GenericPage title="Testimonials">
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { name: 'Head of Product, SaaS', quote: 'They shipped in weeks what we expected in months — with governance built-in.'},
          { name: 'COO, Fintech', quote: 'Agentic workflows cut handle time by 40% without sacrificing quality.'},
        ].map(t => (
          <div key={t.name} className="rounded-2xl border border-black/10 p-6 bg-white">
            <p className="text-gray-800">“{t.quote}”</p>
            <div className="mt-3 text-sm text-gray-500">— {t.name}</div>
          </div>
        ))}
      </div>
    </GenericPage>
  )
}
