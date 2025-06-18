import { TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

export default function ExecutiveSummary({ 
  title, 
  subtitle, 
  executiveSummary, 
  primaryMetrics = [], 
  leadership = {},
  strategicApproach = {},
  className = "" 
}) {
  return (
    <section className={`py-20 bg-gradient-to-br from-executive-navy via-executive-navy-dark to-executive-steel text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Executive Overview */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                <span>Strategic Leadership Case Study</span>
              </span>
              
              <h1 className="text-executive-3xl mb-4 leading-tight">
                {title}
              </h1>
              
              {subtitle && (
                <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-executive-lg mb-6">Executive Summary</h2>
              <p className="text-lg leading-relaxed text-blue-100">
                {executiveSummary}
              </p>
            </div>
          </div>

          {/* Key Metrics Sidebar */}
          <div className="space-y-6">
            {/* Primary Impact Metrics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Business Impact
              </h3>
              <div className="space-y-4">
                {primaryMetrics.slice(0, 3).map((metric, index) => (
                  <div key={index} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-2xl font-bold text-blue-200 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-blue-300">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Scope */}
            {leadership && Object.keys(leadership).length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Leadership Scope
                </h3>
                <div className="space-y-3 text-sm">
                  {leadership.team_size && (
                    <div>
                      <span className="text-blue-300">Team Size:</span>
                      <span className="text-white ml-2">{leadership.team_size}</span>
                    </div>
                  )}
                  {leadership.organizational_scope && (
                    <div>
                      <span className="text-blue-300">Scope:</span>
                      <span className="text-white ml-2">{leadership.organizational_scope}</span>
                    </div>
                  )}
                  {strategicApproach.methodology && (
                    <div>
                      <span className="text-blue-300">Methodology:</span>
                      <span className="text-white ml-2">{strategicApproach.methodology}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Strategic Framework */}
            {strategicApproach.key_principles && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-6">Strategic Principles</h3>
                <div className="space-y-3">
                  {strategicApproach.key_principles.slice(0, 3).map((principle, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-blue-300 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-100">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
