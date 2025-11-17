import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function GenericPage({ title, children, kicker }){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {kicker && <p className="text-sm text-gray-500">{kicker}</p>}
        <h1 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        <div className="mt-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
