import { TrendingUp, DollarSign, Users, Target, Award, Zap, ArrowUpRight } from 'lucide-react';

const metrics = [
  {
    icon: DollarSign,
    value: '$230M',
    label: 'Annual Digital Revenue',
    description: 'Generated through strategic UX leadership and cross-functional team orchestration',
    color: 'impact-revenue',
    trend: '+20% YoY'
  },
  {
    icon: TrendingUp,
    value: '70%',
    label: 'YoY Growth Achievement',
    description: 'New customer acquisition increase through digital transformation initiatives',
    color: 'impact-success',
    trend: 'Sustained'
  },
  {
    icon: Users,
    value: '16',
    label: 'Cross-Functional Team Size',
    description: 'Led across 12 agile squads delivering enterprise-scale digital experiences',
    color: 'impact-efficiency',
    trend: '85% retention'
  },
  {
    icon: Zap,
    value: '$700K',
    label: 'Annual Cost Savings',
    description: 'Through AI-driven automation and process optimization initiatives',
    color: 'impact-innovation',
    trend: '+15% efficiency'
  },
  {
    icon: Target,
    value: '20%',
    label: 'Lifetime Value Increase',
    description: 'Digital channel optimization establishing highest-performing sales channel',
    color: 'impact-success',
    trend: 'Industry leading'
  },
  {
    icon: Award,
    value: '12x',
    label: 'J.D. Power Awards',
    description: 'Customer experience excellence recognition across purchase and care metrics',
    color: 'impact-revenue',
    trend: 'Consecutive years'
  }
];

export default function ExecutiveMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-executive-2xl text-executive-navy mb-6">
            Quantifiable Business Impact
          </h2>
          <p className="text-xl text-executive-steel max-w-4xl mx-auto leading-relaxed">
            Proven track record of driving measurable outcomes through strategic design leadership, 
            cross-functional team orchestration, and digital transformation initiatives across Fortune 500 organizations.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="group bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:shadow-executive transition-all duration-300 hover:border-executive-silver">
              {/* Icon and Trend */}
              <div className="flex items-start justify-between mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${metric.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors`}>
                  <metric.icon className={`h-7 w-7 text-${metric.color}`} />
                </div>
                <div className="flex items-center space-x-1 text-sm text-impact-success font-medium">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>{metric.trend}</span>
                </div>
              </div>
              
              {/* Metric Value */}
              <div className={`text-3xl font-bold mb-3 text-${metric.color} group-hover:text-executive-navy transition-colors`}>
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
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-executive-steel mb-6">
            Ready to discuss how this proven leadership approach can drive outcomes for your organization?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-executive-navy text-white px-8 py-4 rounded-lg hover:bg-executive-navy-dark transition-colors font-medium shadow-sm"
          >
            <span>Schedule Executive Discussion</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
