import React, { useEffect } from 'react';

const Accessibility = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add keyboard navigation for sections
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K to focus search (if we had one)
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        console.log('Search shortcut triggered');
      }

      // Escape key to close any open modals/menus
      if (event.key === 'Escape') {
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          // Close mobile menu
          console.log('Closing mobile menu via escape key');
        }
      }
    };

    // Add focus indicators for keyboard navigation
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #3B82F6 !important;
          outline-offset: 2px !important;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels and roles
    const enhanceAccessibility = () => {
      // Add main content landmark
      const mainContent = document.querySelector('main') || document.querySelector('#main-content');
      if (mainContent) {
        mainContent.setAttribute('role', 'main');
        mainContent.setAttribute('id', 'main-content');
      }

      // Add navigation landmark
      const nav = document.querySelector('nav');
      if (nav) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // Add section landmarks
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
        if (heading) {
          const headingId = heading.id || `section-${index}`;
          heading.id = headingId;
          section.setAttribute('aria-labelledby', headingId);
        }
      });

      // Add button and link labels
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          const icon = button.querySelector('svg');
          if (icon) {
            const iconClass = Array.from(icon.classList).find(cls => cls.includes('icon'));
            if (iconClass) {
              button.setAttribute('aria-label', iconClass.replace('icon', '').trim());
            }
          }
        }
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    addFocusIndicators();
    enhanceAccessibility();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default Accessibility; 