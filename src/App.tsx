import React from 'react';
import './App.css';
import Index from './pages/Index';
import PerformanceMonitor from './components/PerformanceMonitor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Index />
      <PerformanceMonitor />
      <ScrollToTop />
    </div>
  );
}

export default App;
