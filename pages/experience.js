import Layout from '../components/Layout';
import BusinessImpactSummary from '../components/BusinessImpactSummary';
import LeadershipPhilosophy from '../components/LeadershipPhilosophy';
import { TrendingUp, Users, Award, Target, Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const executiveExperience = [
    {
      company: "Cricket Wireless (AT&T Subsidiary)",
      role: "Director of User Experience",
      duration: "2012 - 2024",
      location: "Atlanta, GA",
      type: "Strategic Leadership",
      description: "Led enterprise-scale digital transformation resulting in $230M annual revenue generation and 70% YoY customer acquisition growth through strategic cross-functional team orchestration.",
      keyAchievements: [
        "Generated $230M annual digital revenue through strategic UX leadership",
        "Achieved 70% YoY growth in new customer acquisitions",
        "Led 16-person cross-functional team across 12 agile squads",
        "Implemented $700K annual cost savings through AI automation",
        "Earned 12 consecutive J.D. Power Awards for customer experience excellence"
      ],
      technologies: ["Figma", "React", "GenAI", "Google Analytics 4", "Azure DevOps"],
      businessImpact: {
        primary_metrics: [
          {
            value: "$230M",
            label: "Annual Digital Revenue",
            description: "Generated through strategic UX leadership and cross-functional team orchestration",
            category: "revenue"
          },
          {
            value: "70%",
            label: "YoY Growth Achievement",
            description: "New customer acquisition increase through digital transformation initiatives",
            category: "growth"
          },
          {
            value: "20%",
            label: "Customer Lifetime Value Increase",
            description: "Digital channel optimization establishing highest-performing sales channel",
            category: "efficiency"
          }
        ],
        cost_savings: [
          {
            value: "$700K",
            label: "Annual AI Automation Savings",
            description: "Through GenAI implementation and process optimization",
            category: "savings"
          }
        ],
        strategic_outcomes: [
          {
            title: "Enterprise Design System Leadership",
            description: "Established enterprise-wide design system with 80%+ component adherence, reducing design-to-development time by 35%"
          },
          {
            title: "Cross-Functional Team Excellence",
            description: "Maintained 85% retention rate with 60% internal promotion rate, demonstrating successful talent development"
          },
          {
            title: "Executive Influence & Communication",
            description: "Delivered executive-level presentations securing approval for major strategic initiatives including AI implementation"
          }
        ],
        leadership_metrics: [
          {
            metric: "Team Productivity Improvement",
            impact: "40% increase through agile transformation and systematic process optimization"
          },
          {
            metric: "Design System Adoption",
            impact: "80%+ adherence across enterprise digital ecosystem with measurable ROI"
          },
          {
            metric: "Organizational Change Management",
            impact: "Successfully transformed organization from waterfall to agile methodologies"
          }
        ]
      }
    },
    {
      company: "AT&T Mobility",
      role: "Senior Manager, Content Strategy & User Experience",
      duration: "2004 - 2012",
      location: "Atlanta, GA",
      type: "Foundation Building",
      description: "Progressive leadership roles establishing design operations and user-centered methodology across enterprise digital platforms serving 120K+ employees.",
      keyAchievements: [
        "Increased online sales 800% YoY through UX optimization",
        "Won Nielsen Norman Group 2013 Intranet Design Annual Award",
        "Led user experience for mission-critical merger integration tools",
        "Developed Frontline Focus program for 5,000 retail locations",
        "Established design thinking methodology for enterprise applications"
      ],
      technologies: ["Adobe Creative Suite", "User Research", "Information Architecture", "Content Strategy"],
      businessImpact: {
        primary_metrics: [
          {
            value: "800%",
            label: "Online Sales Increase",
            description: "Year-over-year growth through comprehensive UX optimization",
            category: "growth"
          },
          {
            value: "120K",
            label: "Employee Platform Users",
            description: "Internal knowledge management platform serving frontline staff",
            category: "efficiency"
          }
        ],
        strategic_outcomes: [
          {
            title: "Industry Recognition",
            description: "Nielsen Norman Group Intranet Design Annual Winner for innovative knowledge management platform"
          },
          {
            title: "Enterprise UX Foundation",
            description: "Established user-centered design methodology and processes adopted across broader organization"
          }
        ]
      }
    }
  ];

  const coreCompetencies = [
    {
      category: "Strategic Leadership",
      icon: TrendingUp,
      skills: [
        "Digital Transformation Strategy",
        "Cross-Functional Team Leadership",
        "Executive Stakeholder Management",
        "Business Impact Measurement",
        "Organizational Change Management"
      ]
    },
    {
      category: "Design Excellence",
      icon: Target,
      skills: [
        "Design Systems Architecture",
        "User-Centered Design Strategy",
        "AI-Driven Experience Design",
        "Enterprise Platform Design",
        "Omnichannel Experience Strategy"
      ]
    },
    {
      category: "Team Development",
      icon: Users,
      skills: [
        "High-Performance Team Building",
        "Talent Development & Mentoring",
        "Agile Methodology Implementation",
        "Design Operations (DesignOps)",
        "Cross-Functional Collaboration"
      ]
    },
    {
      category: "Business Innovation",
      icon: Award,
      skills: [
        "Revenue Growth Strategy",
        "AI Implementation & Automation",
        "Data-Driven Decision Making",
        "Customer Experience Optimization",
        "Competitive Advantage Development"
      ]
    }
  ];

  return (
    <Layout title="Executive Experience - Dan Northington">
      {/* Executive Overview */}
      <section className="py-20 bg-gradient-to-br from-executive-navy via-executive-navy-dark to-executive-steel text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              <span>Executive Leadership Experience</span>
            </span>
            
            <h1 className="text-executive-3xl mb-6 leading-tight">
              20+ Years Driving Digital Transformation 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100"> Across Fortune 500 Organizations</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Proven track record of strategic design leadership delivering measurable business outcomes, 
              building high-performing teams, and establishing enterprise-wide design capability that drives 
              sustainable competitive advantage.
            </p>
          </div>

          {/* Executive Summary Metrics */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "$230M+", label: "Annual Revenue Generated", icon: TrendingUp },
              { value: "16", label: "Person Team Leadership", icon: Users },
              { value: "12x", label: "Industry Awards", icon: Award },
              { value: "70%", label: "YoY Growth Achievement", icon: Target }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-blue-300 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-200 mb-2">{metric.value}</div>
                <div className="text-blue-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-executive-2xl text-executive-navy mb-6">
              Executive Leadership Portfolio
            </h2>
            <p className="text-xl text-executive-steel max-w-3xl mx-auto">
              Strategic roles demonstrating progressive responsibility and measurable impact 
              across enterprise digital transformation initiatives.
            </p>
          </div>

          <div className="space-y-16">
            {executiveExperience.map((role, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Role Overview */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-8">
                      <div className="flex items-center space-x-2 text-sm text-executive-slate mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{role.duration}</span>
                      </div>
                      
                      <h3 className="text-executive-lg text-executive-navy mb-2">
                        {role.role}
                      </h3>
                      
                      <p className="text-lg font-medium text-executive-steel mb-4">
                        {role.company}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-executive-slate mb-6">
                        <span>{role.location}</span>
                        <span className="bg-executive-navy text-white px-3 py-1 rounded-full">
                          {role.type}
                        </span>
                      </div>
                      
                      <p className="text-executive-slate leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Impact & Achievements */}
                <div className="lg:col-span-2">
                  {/* Business Impact Component */}
                  <BusinessImpactSummary impact={role.businessImpact} className="mb-12 py-12" />
                  
                  {/* Key Achievements */}
                  <div className="bg-white rounded-xl border border-neutral-200 p-8">
                    <h4 className="text-executive-lg text-executive-navy mb-6">Key Leadership Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {role.keyAchievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <Target className="h-5 w-5 text-impact-success mt-1 flex-shrink-0" />
                          <span className="text-executive-slate">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-executive-2xl text-executive-navy mb-6">
              Executive Leadership Competencies
            </h2>
            <p className="text-xl text-executive-steel max-w-3xl mx-auto">
              Comprehensive skill set developed through progressive leadership roles and 
              measurable business impact delivery across diverse organizational contexts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="bg-white rounded-xl border border-neutral-200 p-8 hover:shadow-executive transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-executive-navy bg-opacity-10 mb-4">
                    <competency.icon className="h-8 w-8 text-executive-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-executive-charcoal">
                    {competency.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {competency.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-executive-slate">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <LeadershipPhilosophy />
    </Layout>
  );
}
