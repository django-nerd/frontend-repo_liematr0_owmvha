import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white">Go home</Link>
      </main>
      <Footer />
    </div>
  )
}
