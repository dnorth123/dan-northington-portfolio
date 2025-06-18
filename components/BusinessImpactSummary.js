import { TrendingUp, DollarSign, Users, Target, Award, Zap, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function BusinessImpactSummary({ impact, className = "" }) {
  const {
    primary_metrics = [],
    cost_savings = [],
    strategic_outcomes = [],
    leadership_metrics = []
  } = impact;

  const allMetrics = [
    ...primary_metrics.map(metric => ({ ...metric, type: 'primary' })),
    ...cost_savings.map(metric => ({ ...metric, type: 'savings' })),
  ];

  const getIconForCategory = (category) => {
    const icons = {
      revenue: DollarSign,
      growth: TrendingUp,
      efficiency: Target,
      savings: Zap,
      leadership: Users,
      recognition: Award
    };
    return icons[category] || Target;
  };

  const getColorForCategory = (category) => {
    const colors = {
      revenue: 'impact-revenue',
      growth: 'impact-success',
      efficiency: 'impact-efficiency',
      savings: 'impact-innovation',
      leadership: 'impact-efficiency',
      recognition: 'impact-revenue'
    };
    return colors[category] || 'impact-efficiency';
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-neutral-50 to-neutral-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-executive-2xl text-executive-navy mb-6">
            Strategic Business Impact
          </h2>
          <p className="text-xl text-executive-steel max-w-4xl mx-auto leading-relaxed">
            Quantifiable outcomes demonstrating the strategic value of design leadership 
            in driving measurable business results across Fortune 500 organizations.
          </p>
        </div>

        {/* Primary Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allMetrics.map((metric, index) => {
            const IconComponent = getIconForCategory(metric.category);
            const colorClass = getColorForCategory(metric.category);
            
            return (
              <div key={index} className="group bg-white rounded-xl border border-neutral-200 p-8 hover:shadow-executive transition-all duration-300">
                {/* Metric Icon and Type */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${colorClass} bg-opacity-10 group-hover:bg-opacity-20 transition-colors`}>
                    <IconComponent className={`h-7 w-7 text-${colorClass}`} />
                  </div>
                  <span className="text-sm font-medium text-executive-slate uppercase tracking-wide">
                    {metric.type === 'primary' ? 'Revenue Impact' : 'Cost Optimization'}
                  </span>
                </div>
                
                {/* Metric Value */}
                <div className={`text-3xl font-bold mb-3 text-${colorClass} group-hover:text-executive-navy transition-colors`}>
                  {metric.value}
                </div>
                
                {/* Metric Label */}
                <h3 className="text-lg font-semibold text-executive-charcoal mb-3 group-hover:text-executive-navy transition-colors">
                  {metric.label}
                </h3>
                
                {/* Description */}
                <p className="text-executive-slate leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Outcomes Section */}
        {strategic_outcomes && strategic_outcomes.length > 0 && (
          <div className="bg-white rounded-2xl p-12 shadow-executive">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-executive-lg text-executive-navy mb-8">
                  Strategic Leadership Outcomes
                </h3>
                <div className="space-y-6">
                  {strategic_outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-impact-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-executive-charcoal mb-2">
                          {outcome.title}
                        </h4>
                        <p className="text-executive-slate leading-relaxed">
                          {outcome.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-executive-lg text-executive-navy mb-8">
                  Organizational Impact
                </h3>
                <div className="space-y-6">
                  {leadership_metrics && leadership_metrics.map((metric, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <Users className="h-6 w-6 text-impact-efficiency mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-executive-charcoal mb-2">
                          {metric.metric}
                        </h4>
                        <p className="text-executive-slate leading-relaxed">
                          {metric.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-executive-steel mb-6">
            Interested in discussing how this strategic approach can drive similar outcomes for your organization?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-executive-navy text-white px-8 py-4 rounded-lg hover:bg-executive-navy-dark transition-colors font-medium shadow-sm"
          >
            <span>Schedule Executive Consultation</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
