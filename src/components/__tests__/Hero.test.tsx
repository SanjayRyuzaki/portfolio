import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../Hero';

// Mock Framer Motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  useInView: () => ({ ref: vi.fn(), isInView: true }),
}));

// Mock Lucide React
vi.mock('lucide-react', () => ({
  Github: () => <div data-testid="github-icon">GitHub</div>,
  Linkedin: () => <div data-testid="linkedin-icon">LinkedIn</div>,
  Mail: () => <div data-testid="mail-icon">Mail</div>,
  Download: () => <div data-testid="download-icon">Download</div>,
}));

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Sanjay Chilumuru')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/Aspiring Software Development Engineer/)).toBeInTheDocument();
  });

  it('renders download resume button', () => {
    render(<Hero />);
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  it('renders view projects button', () => {
    render(<Hero />);
    expect(screen.getByText('View Projects')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Hero />);
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Hero />);
    const downloadButton = screen.getByText('Download Resume').closest('button');
    expect(downloadButton).toHaveAttribute('aria-label');
  });
}); 