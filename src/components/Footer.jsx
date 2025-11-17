import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-black/5 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-extrabold tracking-tight text-xl">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">AICo</span>
          </Link>
          <p className="mt-3 text-sm text-gray-600 max-w-xs">Senior AI consultants helping you turn ideas into shipped products.</p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/services/ai-strategy">AI Strategy</Link></li>
            <li><Link to="/services/ai-automation">AI Automation</Link></li>
            <li><Link to="/services/ai-seo">AI SEO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Locations</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            {['australia','melbourne','sydney','united-states','new-york','san-francisco','united-kingdom','london','canada','toronto','new-zealand','auckland'].map(slug => (
              <li key={slug}><Link to={`/locations/${slug}`}>{slug.replace('-', ' ')}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} AICo Consulting. All rights reserved.</div>
    </footer>
  )
}