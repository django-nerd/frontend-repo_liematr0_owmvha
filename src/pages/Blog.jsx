import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const posts = [
  { slug: 'shipping-ai-fast', title: 'Shipping AI Fast, Safely', date: '2025-01-10' },
  { slug: 'agentic-ops', title: 'Agentic Ops: Automations That Learn', date: '2025-01-05' },
]

export default function Blog(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-gray-600">Insights on AI strategy, automation, and growth.</p>

        <div className="mt-8 grid gap-4">
          {posts.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border border-black/10 p-4 hover:shadow-md transition">
              <div className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
              <div className="font-semibold">{p.title}</div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-sm text-gray-500">
          RSS available at /blog/rss.xml
        </div>
      </main>
      <Footer />
    </div>
  )
}
