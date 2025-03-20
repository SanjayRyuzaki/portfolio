import React from 'react';
import './App.css';
import Index from './pages/Index';
import PerformanceMonitor from './components/PerformanceMonitor';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Index />
        <PerformanceMonitor />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}

export default App;
