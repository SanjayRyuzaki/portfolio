# Changelog

## [0.1.4] - 2025-03-07

### Fixed
- Improved mobile menu positioning and styling with better backdrop blur
- Fixed mobile responsiveness issues in About section layout
- Enhanced dark mode implementation with system preference detection
- Improved navigation sticky positioning and z-index
- Fixed mobile layout overflow issues in experience cards
- Enhanced responsive typography and spacing across components

### Changed
- Updated mobile menu to close automatically when links are clicked
- Improved dark mode toggle with proper DOM class management
- Enhanced mobile experience cards with better responsive layout
- Updated navigation to be sticky with proper z-index
- Improved responsive text sizing and spacing

### Known Issues
- Dark mode preference still not saved to localStorage (TODO)
- Some animations may still cause performance issues on very low-end devices
- Project filtering layout shifts on very small screens
- Skill progress bars may not animate smoothly on older devices

## [0.1.3] - 2025-03-05

### Added
- Enhanced Projects section with interactive filtering (AI/ML, Web Dev, Data)
- Added detailed project cards with technology tags and links
- Implemented project filtering functionality with category-based filtering
- Enhanced Skills section with detailed skill categories and progress bars
- Added skill proficiency levels with animated progress indicators
- Implemented "Currently Learning" section with emerging technologies
- Added comprehensive skill categories: Frontend, Backend, Database, AI/ML, Tools

### Changed
- Improved project card layout with better visual hierarchy
- Enhanced skill visualization with progress bars and learning indicators
- Updated project descriptions with more detailed information
- Improved responsive design for project and skill sections

### Known Issues
- Project filtering may cause layout shifts on mobile devices
- Skill progress bars may not animate smoothly on low-end devices
- Some project links may be broken (placeholder URLs)
- Mobile layout for skills grid needs improvement on very small screens
- Dark mode toggle still not persistent across page refresh

## [0.1.2] - 2025-03-03

### Added
- Enhanced About section with detailed personal story and experience timeline
- Added experience cards with company details and skill tags
- Implemented smooth animations with useInView for better performance
- Added key traits section with interactive badges
- Enhanced responsive design with glass morphism effects

### Changed
- Improved About section layout with two-column design
- Enhanced typography and color scheme for better readability
- Updated experience cards with better visual hierarchy
- Improved dark mode support across About section

### Known Issues
- Experience cards may overflow on very small screens (mobile layout issue)
- Some animations may cause layout shifts on slower devices
- Dark mode toggle still not persistent across page refresh
- Mobile menu positioning needs further improvement

## [0.1.1] - 2025-03-02

### Added
- Enhanced Hero component with floating particles animation
- Improved gradient backgrounds and text effects
- Added dark mode toggle to navigation
- Added mobile menu functionality
- Enhanced button hover effects and shadows
- Added useInView animations for better performance

### Changed
- Improved responsive design for better mobile experience
- Enhanced social media link animations
- Updated color scheme with better contrast

### Known Issues
- Mobile menu positioning needs improvement
- Dark mode toggle only changes local state (not persistent)
- Theme switching needs proper implementation
- Some animations may cause performance issues on low-end devices

## [0.1.0] - 2025-03-01

### Added
- Initial project setup with Vite + React
- Basic Hero component with animations
- Navigation component
- About, Projects, Skills, Contact sections (basic)
- Basic styling and responsive design

### TODO
- Add more detailed content to sections
- Improve mobile responsiveness
- Add dark mode toggle
- Add more animations and interactions 