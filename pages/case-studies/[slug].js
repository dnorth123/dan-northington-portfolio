import { getAllCaseStudies, getCaseStudyBySlug } from '../../lib/case-studies'
import Layout from '../../components/Layout'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudy({ caseStudy }) {
  return (
    <Layout title={`${caseStudy.title} - Dan Northington`}>
      <article className="py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header section with controlled spacing */}
    <header className="mb-8"> {/* Reduced from mb-12 */}
      <h1 className="text-4xl font-bold text-executive-900 mb-4">{caseStudy.title}</h1>
      <p className="text-xl text-gray-600 mb-6">{caseStudy.summary}</p>
      
      <div className="grid md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
        <div>
          <h3 className="font-semibold text-executive-900 mb-2">Business Impact</h3>
          <p className="text-primary-600 font-bold">{caseStudy.impact}</p>
        </div>
        <div>
          <h3 className="font-semibold text-executive-900 mb-2">Timeline</h3>
          <p className="text-gray-600">{caseStudy.timeline}</p>
        </div>
        <div>
          <h3 className="font-semibold text-executive-900 mb-2">Role</h3>
          <p className="text-gray-600">{caseStudy.role}</p>
        </div>
      </div>
    </header>

    {/* Content with improved spacing */}
    <div 
      className="prose prose-lg max-w-none prose-headings:mb-4 prose-p:mb-4 prose-ul:mb-4" 
      dangerouslySetInnerHTML={{ __html: caseStudy.content }} 
    />
  </div>
</article>

    </Layout>
  )
}

export async function getStaticPaths() {
  const caseStudies = getAllCaseStudies()
  return {
    paths: caseStudies.map((study) => ({
      params: { slug: study.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const caseStudy = await getCaseStudyBySlug(params.slug)  // ✅ Added await!
  return {
    props: { caseStudy },
  }
}
