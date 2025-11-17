import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  async function onSubmit(e){
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks — we will reach out within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-gray-600">Tell us about your goals.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input required placeholder="Name" className="rounded-lg border border-black/10 p-3" />
          <input required type="email" placeholder="Work email" className="rounded-lg border border-black/10 p-3" />
          <input placeholder="Company" className="rounded-lg border border-black/10 p-3" />
          <textarea required placeholder="What are you looking to achieve?" rows={5} className="rounded-lg border border-black/10 p-3" />
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-white">Send</button>
          {status && <div className="text-sm text-gray-600">{status}</div>}
        </form>
      </main>
      <Footer />
    </div>
  )
}
