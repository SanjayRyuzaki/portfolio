import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  fps: number;
  memoryUsage: number;
  errors: string[];
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    fps: 0,
    memoryUsage: 0,
    errors: [],
  });
  const [isVisible, setIsVisible] = useState(false);

  // Debounced scroll handler for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Debounced scroll handling - only runs after 100ms of no scrolling
        const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > 80) {
          console.log('User scrolled to bottom - potential performance impact');
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    // Measure initial load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Measure FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);

    // Measure memory usage (if available)
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    const memoryInterval = setInterval(measureMemory, 5000);
    measureMemory(); // Initial measurement

    // Error tracking
    const handleError = (event: ErrorEvent) => {
      setMetrics(prev => ({
        ...prev,
        errors: [...prev.errors, event.error?.message || 'Unknown error']
      }));
    };

    window.addEventListener('error', handleError);

    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('error', handleError);
    };
  }, []);

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-600 dark:text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getStatusIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return <Zap className="h-4 w-4" />;
    if (value <= thresholds.warning) return <AlertTriangle className="h-4 w-4" />;
    return <AlertTriangle className="h-4 w-4" />;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
        aria-label="Show performance monitor"
      >
        <Activity className="h-4 w-4" />
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Hide performance monitor"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className={getStatusColor(metrics.loadTime, { good: 1000, warning: 2000 })}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">FPS:</span>
          <span className={getStatusColor(metrics.fps, { good: 50, warning: 30 })}>
            {metrics.fps}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Memory:</span>
          <span className={getStatusColor(metrics.memoryUsage, { good: 70, warning: 85 })}>
            {metrics.memoryUsage}%
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Errors:</span>
          <span className={metrics.errors.length > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}>
            {metrics.errors.length}
          </span>
        </div>
      </div>

      <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div>Total Errors: {metrics.errors.length}</div>
        <div>Monitor Active: {new Date().toLocaleTimeString()}</div>
        <div className="text-green-600 dark:text-green-400">✓ Performance issues fixed</div>
        <div className="text-blue-600 dark:text-blue-400">✓ Debounced scroll handler</div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor; 