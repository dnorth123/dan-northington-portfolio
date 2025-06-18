import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { TrendingUp, Users, Target, Menu, X, Mail, Phone, MapPin } from 'lucide-react';

export default function Layout({ children, title = 'Dan Northington - Digital Transformation Executive' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Strategic design leader driving $230M+ revenue through digital transformation and user experience excellence across Fortune 500 organizations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Director of User Experience with proven track record of 70% YoY growth and cross-functional team leadership delivering measurable business outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dnorthington.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Strategic design leader driving $230M+ revenue through digital transformation and cross-functional team leadership." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-neutral-50 font-executive">
        {/* Executive Navigation */}
        <nav className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-executive-navy">Dan Northington</span>
                  <span className="text-sm text-executive-steel hidden sm:block">Digital Transformation Executive</span>
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-executive-charcoal hover:text-executive-navy transition-colors font-medium">
                  Strategic Impact
                </Link>
                <Link href="/case-studies" className="text-executive-charcoal hover:text-executive-navy transition-colors font-medium">
                  Leadership Portfolio
                </Link>
                <Link href="/experience" className="text-executive-charcoal hover:text-executive-navy transition-colors font-medium">
                  Executive Experience
                </Link>
                <Link href="/contact" className="bg-executive-navy text-white px-6 py-2 rounded-lg hover:bg-executive-navy-dark transition-colors font-medium shadow-sm">
                  Connect
                </Link>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6 text-executive-charcoal" /> : <Menu className="h-6 w-6 text-executive-charcoal" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden border-t border-neutral-200 py-4">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="text-executive-charcoal hover:text-executive-navy transition-colors font-medium">
                    Strategic Impact
                  </Link>
                  <Link href="/case-studies" className="text-executive-charcoal hover:text-executive-navy transition-colors font-medium">
                    Leadership Portfolio
                  </Link>
                  <Link href="/experience" className="text-executive-charcoal hover:text-executive-navy transition-colors font-medium">
                    Executive Experience
                  </Link>
                  <Link href="/contact" className="bg-executive-navy text-white px-6 py-2 rounded-lg hover:bg-executive-navy-dark transition-colors font-medium text-center">
                    Connect
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        {/* Executive Footer */}
        <footer className="bg-executive-navy text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Dan Northington</h3>
                <p className="text-neutral-300 text-lg mb-6 max-w-md">
                  Digital Transformation Executive driving measurable business outcomes through strategic design leadership and cross-functional team orchestration.
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-neutral-300">dan.northington@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-neutral-300">404-268-4002</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-neutral-300">Atlanta, GA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Leadership Focus</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>Digital Transformation</li>
                  <li>Cross-Functional Leadership</li>
                  <li>Revenue Growth Strategy</li>
                  <li>AI Implementation</li>
                  <li>Design Systems Architecture</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Business Impact</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li>$230M+ Annual Revenue</li>
                  <li>70% YoY Growth Achievement</li>
                  <li>16-Person Team Leadership</li>
                  <li>$700K+ Cost Savings</li>
                  <li>12x J.D. Power Awards</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-executive-steel/30 mt-12 pt-8 text-center">
              <p className="text-neutral-400">
                © 2025 Dan Northington. Strategic design leadership focused on measurable business outcomes.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
