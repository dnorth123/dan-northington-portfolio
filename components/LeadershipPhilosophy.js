import { Quote, Users, Target, TrendingUp, Lightbulb } from 'lucide-react';

export default function LeadershipPhilosophy({ className = "" }) {
  const principles = [
    {
      icon: Users,
      title: "Human-Centered Leadership",
      description: "Design organizations that prioritize both user needs and team member growth, creating environments where exceptional work naturally emerges."
    },
    {
      icon: Target,
      title: "Outcome-Driven Strategy",
      description: "Focus on measurable business impact while maintaining unwavering commitment to user-centered design principles and ethical practices."
    },
    {
      icon: TrendingUp,
      title: "Systematic Innovation",
      description: "Build repeatable frameworks for innovation that scale across diverse teams and industry contexts, reducing dependence on individual heroics."
    },
    {
      icon: Lightbulb,
      title: "Evidence-Based Decision Making",
      description: "Combine quantitative metrics with qualitative insights to make informed decisions that advance both user satisfaction and business objectives."
    }
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-executive-2xl text-executive-navy mb-6">
            Strategic Leadership Philosophy
          </h2>
          <p className="text-xl text-executive-steel max-w-3xl mx-auto leading-relaxed">
            A framework for design leadership that drives measurable business outcomes 
            while building sustainable organizational capability and team excellence.
          </p>
        </div>

        {/* Philosophy Statement */}
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-12 mb-16">
          <div className="flex items-start space-x-6">
            <Quote className="h-12 w-12 text-executive-navy flex-shrink-0 mt-2" />
            <div>
              <blockquote className="text-2xl text-executive-charcoal leading-relaxed mb-6 font-medium">
                "Exceptional user experiences emerge from the strategic intersection of user needs, 
                business objectives, and technological capabilities. My approach combines data-driven design 
                methodologies with cross-functional team orchestration to deliver measurable outcomes that 
                drive sustainable competitive advantage across diverse industry contexts."
              </blockquote>
              <cite className="text-lg text-executive-steel">
                — Dan Northington, Digital Transformation Executive
              </cite>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-executive-navy bg-opacity-10 group-hover:bg-opacity-20 transition-colors flex-shrink-0">
                  <principle.icon className="h-8 w-8 text-executive-navy" />
                </div>
                <div>
                  <h3 className="text-executive-lg text-executive-navy mb-4 group-hover:text-executive-navy-dark transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-executive-slate leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Framework */}
        <div className="bg-executive-navy rounded-2xl text-white p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-executive-lg mb-6">
                Executive Leadership Methodology
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                At the Director/VP level, design leadership requires balancing user advocacy with business pragmatism. 
                This methodology provides a framework for navigating competing priorities while maintaining focus on 
                measurable outcomes that advance organizational objectives and user satisfaction simultaneously.
              </p>
              <div className="space-y-4">
                {[
                  "Establish clear metrics connecting design decisions to business outcomes",
                  "Build cross-functional alignment through shared understanding and common goals",
                  "Develop systematic approaches to innovation that reduce risk while maintaining creativity",
                  "Create organizational capability that extends beyond individual contributor excellence"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h4 className="text-lg font-semibold mb-6">Framework Application</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium text-blue-200 mb-2">Strategic Planning</h5>
                  <p className="text-sm text-blue-100">
                    Integrate user research insights with business strategy to inform product roadmaps and organizational priorities.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-blue-200 mb-2">Team Development</h5>
                  <p className="text-sm text-blue-100">
                    Create career advancement pathways that align individual growth with organizational capability building.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-blue-200 mb-2">Executive Communication</h5>
                  <p className="text-sm text-blue-100">
                    Translate design impact into business language that resonates with C-suite stakeholders and board members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
