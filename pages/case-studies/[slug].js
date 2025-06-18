import { getAllCaseStudies, getCaseStudyBySlug } from "../../lib/case-studies";
import Layout from "../../components/Layout";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Target,
  Award,
  Calendar,
  Code,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudy({ caseStudy }) {
  return (
    <Layout title={`${caseStudy.title} - Dan Northington`}>
      <article className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 mb-8 hover:text-primary-700"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </Link>

          {/* Executive Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="bg-executive-navy text-white px-3 py-1 rounded-full text-sm font-medium">
                {caseStudy.category || "Strategic Leadership"}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-executive-900 mb-4">
              {caseStudy.title}
            </h1>

            {caseStudy.subtitle && (
              <p className="text-xl text-executive-steel mb-6">
                {caseStudy.subtitle}
              </p>
            )}

            <div className="bg-gradient-to-r from-executive-navy to-executive-navy-dark text-white p-6 rounded-lg mb-8">
              <h2 className="text-lg font-semibold mb-3">Executive Summary</h2>
              <p className="text-blue-100 leading-relaxed">
                {caseStudy.executive_summary}
              </p>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.content }}
              />
            </div>

            {/* Sidebar Metrics */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Business Impact Metrics */}
                {caseStudy.business_impact?.primary_metrics && (
                  <div className="executive-card p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-executive-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-impact-success" />
                      Business Impact
                    </h3>
                    <div className="space-y-4">
                      {caseStudy.business_impact.primary_metrics
                        .slice(0, 4)
                        .map((metric, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-impact-success pl-4"
                          >
                            <div className="text-2xl font-bold text-impact-success">
                              {metric.value}
                            </div>
                            <div className="text-sm font-medium text-executive-900">
                              {metric.label}
                            </div>
                            <div className="text-xs text-executive-steel mt-1">
                              {metric.description}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Leadership Scope */}
                {caseStudy.leadership && (
                  <div className="executive-card p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-executive-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-impact-efficiency" />
                      Leadership Scope
                    </h3>
                    <div className="space-y-3">
                      {caseStudy.leadership.team_size && (
                        <div>
                          <div className="text-sm font-medium text-executive-900">
                            Team Size
                          </div>
                          <div className="text-sm text-executive-steel">
                            {caseStudy.leadership.team_size}
                          </div>
                        </div>
                      )}
                      {caseStudy.leadership.organizational_scope && (
                        <div>
                          <div className="text-sm font-medium text-executive-900">
                            Scope
                          </div>
                          <div className="text-sm text-executive-steel">
                            {caseStudy.leadership.organizational_scope}
                          </div>
                        </div>
                      )}
                      {caseStudy.strategic_approach?.methodology && (
                        <div>
                          <div className="text-sm font-medium text-executive-900">
                            Methodology
                          </div>
                          <div className="text-sm text-executive-steel">
                            {caseStudy.strategic_approach.methodology}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Strategic Outcomes */}
                {caseStudy.business_impact?.strategic_outcomes && (
                  <div className="executive-card p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-executive-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-impact-innovation" />
                      Strategic Outcomes
                    </h3>
                    <div className="space-y-3">
                      {caseStudy.business_impact.strategic_outcomes.map(
                        (outcome, index) => (
                          <div key={index}>
                            <div className="text-sm font-medium text-executive-900">
                              {outcome.title}
                            </div>
                            <div className="text-sm text-executive-steel">
                              {outcome.description}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Awards & Recognition */}
                {caseStudy.awards?.length > 0 && (
                  <div className="executive-card p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-executive-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-impact-award" />
                      Awards & Recognition
                    </h3>
                    <div className="space-y-3">
                      {caseStudy.awards.map((award, index) => (
                        <div
                          key={index}
                          className="text-sm text-executive-steel"
                        >
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Case Studies */}
                <div className="executive-card p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-executive-900 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-impact-related" />
                    Related Case Studies
                  </h3>
                  <div className="space-y-3">
                    {caseStudy.related_case_studies?.map((related, index) => (
                      <div key={index} className="text-sm">
                        <Link
                          href={`/case-studies/${related.slug}`}
                          className="text-executive-900 hover:text-executive-700"
                        >
                          {related.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-sm text-executive-steel">
            <p>
              <Lightbulb className="inline-block w-4 h-4 mr-1" />
              This case study is for demonstration purposes only. All data and
              information are fictional.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const caseStudies = await getAllCaseStudies();
  const paths = caseStudies.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const caseStudy = await getCaseStudyBySlug(params.slug);

  return {
    props: {
      caseStudy,
    },
  };
}
