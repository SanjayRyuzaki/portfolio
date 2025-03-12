import React from 'react';
import './App.css';
import Index from './pages/Index';
import PerformanceMonitor from './components/PerformanceMonitor';

function App() {
  return (
    <div className="App">
      <Index />
      <PerformanceMonitor />
    </div>
  );
}

export default App;
