import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'  // ← Add this import
import { TrendingUp, Users, Target, Award, ArrowRight, Building, Zap, BarChart3 } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="executive-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Digital Transformation Executive
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Director of User Experience driving enterprise-scale transformation with $230M revenue impact, 
                70% YoY growth achievement, and 16-person team leadership across Fortune 500 organizations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#case-studies" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Case Studies
                </a>
                <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="text-center">
  <Image 
    src="/images/headshot-main.jpg" 
    alt="Dan Northington - Digital Transformation Executive" 
    width={320}
    height={320}
    className="rounded-full mx-auto object-cover border-4 border-white shadow-2xl"
    style={{ 
      borderRadius: '50%',
      display: 'block',
      objectFit: 'cover' 
    }}
    priority
  />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-executive-900 mb-4">Executive Impact at Scale</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven track record of driving digital transformation and revenue generation across enterprise organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="metric-card text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">$230M</div>
              <div className="text-gray-600">Annual Digital Revenue</div>
            </div>
            <div className="metric-card text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">70%</div>
              <div className="text-gray-600">YoY Customer Growth</div>
            </div>
            <div className="metric-card text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">16+</div>
              <div className="text-gray-600">Team Members Led</div>
            </div>
            <div className="metric-card text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">12x</div>
              <div className="text-gray-600">J.D. Power Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-executive-900 mb-4">Strategic Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-level transformation initiatives that generated measurable business impact and industry recognition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Enterprise Digital Transformation */}
            <div className="case-study-card">
              <div className="p-8">
                <Building className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  Enterprise Digital Transformation
                </h3>
                <p className="text-gray-600 mb-6">
                  Led comprehensive digital strategy transformation at Cricket Wireless, generating $230M annual revenue 
                  and achieving 70% YoY customer growth through strategic UX leadership and cross-functional collaboration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Revenue Generation</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Growth Strategy</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Team Leadership</span>
                </div>
                <Link href="/case-studies/digital-transformation" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Design System Architecture */}
            <div className="case-study-card">
              <div className="p-8">
                <Target className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  Enterprise Design System Architecture
                </h3>
                <p className="text-gray-600 mb-6">
                  Architected and governed enterprise-scale design system serving 4,500+ retail locations, 
                  reducing development time by 35% while ensuring consistency across all digital touchpoints.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Design Systems</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Process Optimization</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Enterprise Scale</span>
                </div>
                <Link href="/case-studies/design-system" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* AI Implementation */}
            <div className="case-study-card">
              <div className="p-8">
                <Zap className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  AI-Driven Operational Excellence
                </h3>
                <p className="text-gray-600 mb-6">
                  Pioneered GenAI implementation across customer service operations, achieving $700K cost savings 
                  and 15% improvement in containment rates through strategic automation and process innovation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI Implementation</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Cost Optimization</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Innovation</span>
                </div>
                <Link href="/case-studies/ai-implementation" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Strategic UX Framework */}
            <div className="case-study-card">
              <div className="p-8">
                <BarChart3 className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  Strategic UX Framework Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Created comprehensive UX Goals Framework aligning design strategy with business objectives, 
                  establishing metrics-driven approach that directly contributed to measurable ROI and team efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Strategy Framework</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Business Alignment</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Methodology</span>
                </div>
                <Link href="/case-studies/ux-framework" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Competencies */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-executive-900 mb-4">Executive Competencies</h2>
            <p className="text-lg text-gray-600">
              Strategic leadership capabilities developed through 12+ years of enterprise-level experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">Strategic Leadership & P&L</h3>
              <p className="text-gray-600">$230M+ revenue portfolio management with cross-functional team leadership and executive stakeholder engagement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600">Organizational transformation from waterfall to agile methodologies with AI implementation and process innovation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">Enterprise Architecture</h3>
              <p className="text-gray-600">Design system governance and technical strategy for 4,500+ touchpoints with measurable efficiency gains</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">Revenue Generation</h3>
              <p className="text-gray-600">Customer lifetime value optimization and acquisition strategy driving 70% YoY growth achievement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">Operational Excellence</h3>
              <p className="text-gray-600">Cost savings implementation through automation and process optimization with $700K+ impact</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">Cross-Functional Leadership</h3>
              <p className="text-gray-600">16-person team leadership across 12 agile squads with stakeholder alignment and business partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-executive-900 mb-4">Ready to Drive Transformation</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how strategic UX leadership can generate measurable business impact for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:dan.northington@gmail.com" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              dan.northington@gmail.com
            </a>
            <a href="tel:404-268-4002" className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
              (404) 268-4002
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
