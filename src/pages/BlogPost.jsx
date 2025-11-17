import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'

export default function BlogPost(){
  const { slug } = useParams()
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500"><Link to="/blog" className="text-purple-600">Blog</Link> / {title}</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        <article className="prose prose-gray max-w-none mt-6">
          <p>This is a placeholder article for {title}. Replace with your content platform or CMS later.</p>
        </article>
      </main>
      <Footer />
    </div>
  )
}
