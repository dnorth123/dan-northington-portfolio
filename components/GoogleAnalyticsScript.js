import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-TF3E12ZTFT';

// Enhanced Google Analytics Script Component for Executive Portfolio
export default function GoogleAnalyticsScript() {
  return (
    <>
      {/* Google Analytics 4 Global Site Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        async
      />
      
      {/* Google Analytics Configuration Script */}
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Executive Portfolio GA4 Configuration
          gtag('config', '${GA_MEASUREMENT_ID}', {
            // Privacy-first settings for professional use
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            ads_data_redaction: true,
            allow_google_signals: false,
            
            // Executive portfolio specific configuration
            custom_map: {
              'custom_parameter_1': 'executive_engagement_type',
              'custom_parameter_2': 'leadership_positioning_context'
            },
            
            // Enhanced audience segmentation
            content_group1: 'Executive Portfolio',
            content_group2: 'Director_VP_Positioning',
            content_group3: 'Digital_Transformation_Leadership',
            
            // Performance and user experience tracking
            send_page_view: true,
            page_title: document.title,
            page_location: window.location.href
          });
          
          // Track initial executive portfolio visit
          gtag('event', 'page_view', {
            event_category: 'Executive Portfolio Engagement',
            event_label: 'Initial Portfolio Visit',
            custom_parameter_1: 'executive_portfolio_entry',
            custom_parameter_2: 'director_vp_candidate_evaluation'
          });
          
          // Executive-specific event tracking functions
          window.trackExecutiveEngagement = function(eventName, properties = {}) {
            gtag('event', eventName, {
              event_category: 'Executive Leadership Demonstration',
              custom_parameter_1: 'executive_portfolio_engagement',
              custom_parameter_2: 'director_vp_positioning',
              ...properties
            });
          };
          
          // Business impact metrics tracking
          window.trackMetricEngagement = function(metricType, metricValue, engagementType = 'view') {
            gtag('event', 'business_metric_engagement', {
              event_category: 'Strategic Business Impact',
              event_label: metricType,
              metric_value: metricValue,
              engagement_type: engagementType,
              custom_parameter_1: 'revenue_leadership_demonstration',
              custom_parameter_2: 'quantifiable_impact_tracking'
            });
          };
          
          // Case study engagement tracking
          window.trackCaseStudyEngagement = function(caseStudyTitle, progressPercentage, timeSpent) {
            gtag('event', 'case_study_engagement', {
              event_category: 'Strategic Leadership Portfolio',
              event_label: caseStudyTitle,
              progress_percentage: progressPercentage,
              time_spent_seconds: timeSpent,
              custom_parameter_1: 'strategic_thinking_demonstration',
              custom_parameter_2: 'leadership_methodology_engagement'
            });
          };
          
          // Professional contact tracking
          window.trackExecutiveContact = function(contactType, source) {
            gtag('event', 'executive_contact_initiated', {
              event_category: 'Professional Networking',
              event_label: contactType,
              contact_source: source,
              custom_parameter_1: 'director_vp_interest_indication',
              custom_parameter_2: 'executive_conversation_potential'
            });
          };
          
          // Scroll depth tracking for content engagement
          window.trackScrollDepth = function(percentage, section) {
            gtag('event', 'scroll_depth', {
              event_category: 'Content Engagement Quality',
              event_label: section,
              scroll_percentage: percentage,
              custom_parameter_1: 'executive_content_consumption',
              custom_parameter_2: 'portfolio_depth_engagement'
            });
          };
          
          // Navigation tracking for portfolio sections
          window.trackNavigationClick = function(sectionName, elementType) {
            gtag('event', 'navigation_engagement', {
              event_category: 'Portfolio Navigation',
              event_label: sectionName,
              element_type: elementType,
              custom_parameter_1: 'executive_portfolio_exploration',
              custom_parameter_2: 'strategic_content_access'
            });
          };
        `}
      </Script>
    </>
  );
}

// Utility functions for component-level tracking
export const trackExecutiveEngagement = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Executive Leadership Demonstration',
      custom_parameter_1: 'executive_portfolio_engagement',
      custom_parameter_2: 'director_vp_positioning',
      ...properties
    });
  }
};

export const trackMetricEngagement = (metricType, metricValue, engagementType = 'view') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'business_metric_engagement', {
      event_category: 'Strategic Business Impact',
      event_label: metricType,
      metric_value: metricValue,
      engagement_type: engagementType,
      custom_parameter_1: 'revenue_leadership_demonstration',
      custom_parameter_2: 'quantifiable_impact_tracking'
    });
  }
};

export const trackCaseStudyEngagement = (caseStudyTitle, progressPercentage, timeSpent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'case_study_engagement', {
      event_category: 'Strategic Leadership Portfolio',
      event_label: caseStudyTitle,
      progress_percentage: progressPercentage,
      time_spent_seconds: timeSpent,
      custom_parameter_1: 'strategic_thinking_demonstration',
      custom_parameter_2: 'leadership_methodology_engagement'
    });
  }
};

export const trackExecutiveContact = (contactType, source) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'executive_contact_initiated', {
      event_category: 'Professional Networking',
      event_label: contactType,
      contact_source: source,
      custom_parameter_1: 'director_vp_interest_indication',
      custom_parameter_2: 'executive_conversation_potential'
    });
  }
};

export const trackScrollDepth = (percentage, section) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Content Engagement Quality',
      event_label: section,
      scroll_percentage: percentage,
      custom_parameter_1: 'executive_content_consumption',
      custom_parameter_2: 'portfolio_depth_engagement'
    });
  }
};
