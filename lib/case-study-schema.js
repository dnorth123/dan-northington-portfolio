// Enhanced frontmatter schema for business impact communication
export const caseStudySchema = {
  // Basic Information
  title: "String - Executive-focused title emphasizing business impact",
  subtitle: "String - Supporting context highlighting leadership scope",
  slug: "String - URL-friendly identifier",
  category: "String - Business category (Digital Transformation, Revenue Growth, etc.)",
  industry: "String - Primary industry context",
  transferable_industries: "Array - Industries where framework applies",

  // Executive Summary
  executive_summary: "String - 2-3 sentence business impact summary for C-suite audience",

  // Business Impact Metrics
  business_impact: {
    primary_metrics: [
      {
        value: "String - Metric value ($230M, 70%, etc.)",
        label: "String - Metric description",
        description: "String - Context and methodology",
        category: "String - revenue|growth|efficiency|savings"
      }
    ],
    cost_savings: [
      {
        value: "String - Cost savings amount",
        label: "String - Savings category", 
        description: "String - Implementation approach"
      }
    ],
    strategic_outcomes: [
      {
        title: "String - Outcome category",
        description: "String - Detailed impact description"
      }
    ],
    leadership_metrics: [
      {
        metric: "String - Leadership measurement",
        impact: "String - Organizational influence"
      }
    ]
  },

  // Leadership & Organization
  leadership: {
    team_size: "String - Team composition and size",
    team_composition: "String - Professional disciplines represented",
    organizational_scope: "String - Cross-functional reach and influence",
    stakeholder_levels: "Array - Executive levels engaged"
  },

  // Strategic Framework
  strategic_approach: {
    methodology: "String - Core leadership methodology",
    key_principles: "Array - Strategic principles applied",
    success_metrics: "Array - Quantifiable success measurements"
  },

  // Cross-Industry Applications
  transferable_frameworks: [
    {
      framework: "String - Framework name",
      application: "String - Cross-industry applicability"
    }
  ],

  // Timeline & Implementation
  timeline: {
    duration: "String - Project timeline",
    key_phases: [
      {
        phase: "String - Phase name",
        focus: "String - Phase objectives"
      }
    ]
  },

  // Technology & Innovation
  technology_stack: {
    design_tools: "Array - Design and prototyping tools",
    analytics_platforms: "Array - Data and measurement tools", 
    development_integration: "Array - Technical implementation tools",
    ai_implementation: "Array - AI and automation technologies"
  },

  // Metadata
  date: "String - Publication date",
  featured: "Boolean - Homepage feature flag",
  weight: "Number - Sort order priority"
};

// Validation function for case study frontmatter
export function validateCaseStudy(frontmatter) {
  const required = [
    'title',
    'executive_summary', 
    'business_impact.primary_metrics',
    'leadership.team_size',
    'strategic_approach.methodology'
  ];

  const missing = required.filter(field => {
    const keys = field.split('.');
    let value = frontmatter;
    
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return true;
    }
    
    return false;
  });

  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  return true;
}
