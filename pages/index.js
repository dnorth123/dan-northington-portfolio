import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Users,
  Target,
  Award,
  ArrowRight,
  RefreshCw,
  Bot,
  Smartphone,
} from "lucide-react";

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
                Director of User Experience with proven track record delivering
                $230M revenue impact, 70% YoY growth achievement, and
                enterprise-scale digital transformation across Fortune 500
                organizations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#case-studies"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  View Case Studies
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
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
                  borderRadius: "50%",
                  display: "block",
                  objectFit: "cover",
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
            <h2 className="text-3xl font-bold text-executive-900 mb-4">
              Executive Impact at Scale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven track record of driving measurable outcomes through
              strategic design leadership, cross-functional team orchestration,
              and digital transformation initiatives across Fortune 500
              organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="metric-card text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">
                $230M
              </div>
              <div className="text-gray-600">Annual Digital Revenue</div>
            </div>
            <div className="metric-card text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">
                70%
              </div>
              <div className="text-gray-600">YoY Customer Growth</div>
            </div>
            <div className="metric-card text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">
                16+
              </div>
              <div className="text-gray-600">Team Members Led</div>
            </div>
            <div className="metric-card text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-executive-900 mb-2">
                12x
              </div>
              <div className="text-gray-600">J.D. Power Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-executive-900 mb-8">
            Strategic Leadership Philosophy
          </h2>

          <div className="mb-12">
            <blockquote className="text-xl italic text-gray-700 mb-6">
              &quot;Exceptional user experiences emerge from the strategic
              intersection of user needs, business objectives, and technological
              capabilities. My approach combines data-driven design
              methodologies with cross-functional team orchestration to deliver
              measurable outcomes that drive sustainable competitive
              advantage.&quot;
            </blockquote>
            <cite className="text-gray-600">
              — Dan Northington, Digital Transformation Executive
            </cite>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="capability-card">
              <Target className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-executive-900 mb-3">
                Strategic Business Alignment
              </h3>
              <p className="text-gray-600">
                Proven expertise in driving organizational transformation
                through strategic design leadership, cross-functional team
                management, and measurable business impact delivery.
              </p>
            </div>
            <div className="capability-card">
              <Users className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-executive-900 mb-3">
                Cross-Functional Leadership
              </h3>
              <p className="text-gray-600">
                Expert in orchestrating diverse teams across product,
                engineering, and business functions to deliver unified customer
                experiences and business outcomes.
              </p>
            </div>
            <div className="capability-card">
              <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-executive-900 mb-3">
                Measurable Impact Delivery
              </h3>
              <p className="text-gray-600">
                Systematic approach to quantifying design impact through
                business metrics, ensuring every initiative drives toward
                organizational success and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Case Studies */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-executive-900 mb-4">
              Strategic Leadership Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-level transformation initiatives delivering measurable
              business impact and organizational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Transformation & Agile Adoption */}
            <div className="case-study-card">
              <div className="p-8">
                <RefreshCw className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  Leading Digital Transformation & Agile Adoption
                </h3>
                <p className="text-gray-600 mb-6">
                  Orchestrated enterprise-wide transformation from waterfall to
                  agile across 12 teams, achieving 40% productivity improvement,
                  $900K cost savings, and 70% YoY growth while maintaining 12
                  consecutive J.D. Power Awards for customer experience
                  excellence.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Agile Transformation
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Team Leadership
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Process Innovation
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Digital Strategy
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    Performance Optimization
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    $900K Annual Savings + 70% YoY Growth
                  </span>
                </div>
                <Link
                  href="/case-studies/agile-adoption"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* AI-Powered Chatbot Transformation */}
            <div className="case-study-card">
              <div className="p-8">
                <Bot className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  AI-Powered Chatbot Transformation
                </h3>
                <p className="text-gray-600 mb-6">
                  Led integration of GenAI and advanced MarTech platforms,
                  designing AI-powered chatbot with dynamic segmentation.
                  Increased containment rates by 15% while ensuring FCC, CCPA,
                  and PCI-DSS compliance, delivering $700K annual cost savings.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    AI Implementation
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Customer Service
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Compliance
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Cost Optimization
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    MarTech Integration
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    $700K Annual Cost Savings
                  </span>
                </div>
                <Link
                  href="/case-studies/ai-chatbot"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* tryCricket Digital Trial Experience */}
            <div className="case-study-card">
              <div className="p-8">
                <Smartphone className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  Launching tryCricket Digital Trial Innovation
                </h3>
                <p className="text-gray-600 mb-6">
                  Led full product lifecycle for revolutionary network trial
                  experience, orchestrating cross-functional teams to deliver
                  frictionless app experience. Achieved 130,000 trials, 19,000
                  acquisitions, and established digital as highest-value channel
                  generating $230M annual revenue.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Product Innovation
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Digital Acquisition
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Revenue Generation
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Cross-functional Leadership
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    Customer Experience
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    $230M Annual Revenue
                  </span>
                </div>
                <Link
                  href="/case-studies/trycricket-launch"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Strategic UX Framework */}
            <div className="case-study-card">
              <div className="p-8">
                <Target className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-executive-900 mb-4">
                  Building Strategic UX Framework for Business Impact
                </h3>
                <p className="text-gray-600 mb-6">
                  Architected comprehensive UX Goals Framework connecting design
                  work to business objectives across 12 agile squads. Quantified
                  UX contribution to $230M revenue generation, documented $200K+
                  operational savings, and elevated UX to strategic business
                  partnership.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Strategy Framework
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Business Alignment
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    UX Leadership
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Process Standardization
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    Executive Communication
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    Strategic Business Alignment
                  </span>
                </div>
                <Link
                  href="/case-studies/ux-framework"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Competencies */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-executive-900 mb-4">
              Executive Competencies
            </h2>
            <p className="text-lg text-gray-600">
              Strategic leadership capabilities developed through 12+ years of
              enterprise-level experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">
                Strategic Leadership & P&L
              </h3>
              <p className="text-gray-600">
                $230M+ revenue portfolio management with cross-functional team
                leadership and executive stakeholder engagement
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">
                Digital Transformation
              </h3>
              <p className="text-gray-600">
                Organizational transformation from waterfall to agile
                methodologies with AI implementation and process innovation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">
                Enterprise Architecture
              </h3>
              <p className="text-gray-600">
                Design system governance and technical strategy for 4,500+
                touchpoints with measurable efficiency gains
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">
                Revenue Generation
              </h3>
              <p className="text-gray-600">
                Customer lifetime value optimization and acquisition strategy
                driving 70% YoY growth achievement
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">
                Operational Excellence
              </h3>
              <p className="text-gray-600">
                Cost savings implementation through automation and process
                optimization with $700K+ impact
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-executive-900 mb-3">
                Cross-Functional Leadership
              </h3>
              <p className="text-gray-600">
                16-person team leadership across 12 agile squads with
                stakeholder alignment and business partnership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-executive-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Drive Transformation
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Let&apos;s discuss how strategic UX leadership can generate
            measurable business impact for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dan.northington@gmail.com"
              className="bg-white text-executive-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              dan.northington@gmail.com
            </a>
            <a
              href="tel:404-268-4002"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-executive-navy transition-colors"
            >
              (404) 268-4002
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
