import React, { useEffect } from 'react';

interface AnalyticsProps {
  pageName: string;
}

const Analytics = ({ pageName }: AnalyticsProps) => {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      // Simulate analytics tracking
      console.log(`Page view: ${pageName} at ${new Date().toISOString()}`);
      
      // In a real app, this would send data to Google Analytics, Mixpanel, etc.
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
        });
      }
    };

    trackPageView();

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        console.log(`Scroll depth: 25-50% on ${pageName}`);
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        console.log(`Scroll depth: 50-75% on ${pageName}`);
      } else if (scrollPercent > 75) {
        console.log(`Scroll depth: 75%+ on ${pageName}`);
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent >= 30) {
        console.log(`Time on page: ${timeSpent}s on ${pageName}`);
      }
    };

    const scrollListener = () => {
      // Throttle scroll events
      if (scrollListener.timeout) {
        clearTimeout(scrollListener.timeout);
      }
      scrollListener.timeout = setTimeout(trackScrollDepth, 100);
    };

    const timeInterval = setInterval(trackTimeOnPage, 30000); // Check every 30 seconds
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
      clearInterval(timeInterval);
      if (scrollListener.timeout) {
        clearTimeout(scrollListener.timeout);
      }
    };
  }, [pageName]);

  // This component doesn't render anything visible
  return null;
};

export default Analytics; 