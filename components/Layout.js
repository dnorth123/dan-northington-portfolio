import Head from 'next/head'
import Link from 'next/link'
import { Mail, Phone, Linkedin, Github, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Layout({ children, title = "Dan Northington - Digital Transformation Executive" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Director of User Experience | $230M Revenue Impact | Enterprise Design Strategy Leader | Digital Transformation Executive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-semibold text-executive-900">
              Dan Northington
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <Link href="/#case-studies" className="text-gray-700 hover:text-primary-600 transition-colors">Case Studies</Link>
              <Link href="/#experience" className="text-gray-700 hover:text-primary-600 transition-colors">Experience</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-primary-600">Home</Link>
                <Link href="/#case-studies" className="text-gray-700 hover:text-primary-600">Case Studies</Link>
                <Link href="/#experience" className="text-gray-700 hover:text-primary-600">Experience</Link>
                <Link href="/#contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-executive-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:dan.northington@gmail.com" className="hover:text-primary-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:404-268-4002" className="hover:text-primary-400 transition-colors">
              <Phone size={24} />
            </a>
            <a href="https://linkedin.com/in/northington" className="hover:text-primary-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Dan Northington. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
