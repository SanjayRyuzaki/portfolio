import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock data for testing
export const mockProjects = [
  {
    id: 1,
    title: 'Test Project 1',
    description: 'A test project for unit testing',
    image: '/test-image-1.jpg',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/test/project1',
    liveUrl: 'https://test-project1.com',
    category: 'web',
  },
  {
    id: 2,
    title: 'Test Project 2',
    description: 'Another test project for integration testing',
    image: '/test-image-2.jpg',
    technologies: ['Node.js', 'Express'],
    githubUrl: 'https://github.com/test/project2',
    liveUrl: 'https://test-project2.com',
    category: 'backend',
  },
];

export const mockSkills = [
  {
    name: 'React',
    level: 85,
    category: 'Frontend',
    learning: false,
  },
  {
    name: 'TypeScript',
    level: 80,
    category: 'Language',
    learning: false,
  },
];

// Helper function to wait for animations
export const waitForAnimation = (ms: number = 100) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Helper function to mock scroll events
export const mockScrollEvent = (scrollY: number) => {
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    value: scrollY,
  });
  window.dispatchEvent(new Event('scroll'));
};

// Helper function to mock window size
export const mockWindowSize = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    value: width,
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    value: height,
  });
  window.dispatchEvent(new Event('resize'));
};

// Re-export everything from testing-library
export * from '@testing-library/react';
export { customRender as render }; 