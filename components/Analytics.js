import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-TF3E12ZTFT';

// Executive portfolio specific event tracking
export const trackExecutiveEngagement = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      custom_map: {
        custom_parameter_1: 'executive_portfolio_engagement',
        custom_parameter_2: 'director_vp_positioning'
      },
      ...properties
    });
  }
};

// Business impact metrics engagement tracking
export const trackMetricEngagement = (metricType, metricValue, engagementType = 'view') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'business_metric_engagement', {
      event_category: 'Executive Positioning',
      event_label: metricType,
      metric_value: metricValue,
      engagement_type: engagementType,
      custom_parameter_1: 'revenue_leadership_demonstration',
      custom_parameter_2: 'quantifiable_impact_tracking'
    });
  }
};

// Case study completion and depth tracking
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

// Executive contact and networking tracking
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

// Scroll depth tracking for engagement measurement
export const trackScrollDepth = (percentage, section) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Content Engagement',
      event_label: section,
      scroll_percentage: percentage,
      custom_parameter_1: 'executive_content_consumption',
      custom_parameter_2: 'portfolio_depth_engagement'
    });
  }
};

export default function Analytics() {
  const router = useRouter();

  useEffect(() => {
    // Track page views with executive portfolio context
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: url,
          custom_map: {
            custom_parameter_1: 'executive_portfolio_navigation',
            custom_parameter_2: 'director_vp_role_exploration'
          },
          // Enhanced audience segmentation for executive stakeholders
          content_group1: 'Executive Portfolio',
          content_group2: router.pathname.includes('case-studies') ? 
            'Leadership Portfolio' : 
            router.pathname.includes('experience') ? 
            'Executive Experience' : 'Strategic Impact',
          content_group3: 'Director_VP_Positioning'
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.pathname]);

  useEffect(() => {
    // Scroll depth tracking for content engagement
    let scrollDepthTracked = new Set();
    
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthTracked.has(milestone)) {
          scrollDepthTracked.add(milestone);
          trackScrollDepth(milestone, router.pathname);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  return null;
}

// Enhanced Google Analytics Script Component
export function GoogleAnalyticsScript() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gt
