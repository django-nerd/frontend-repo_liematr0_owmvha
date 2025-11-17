import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

// Pages
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Locations from './pages/Locations'
import LocationDetail from './pages/LocationDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import CaseStudies from './pages/CaseStudies'
import FAQ from './pages/FAQ'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import BlogRss from './pages/BlogRss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:slug" element={<LocationDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/rss.xml" element={<BlogRss />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
