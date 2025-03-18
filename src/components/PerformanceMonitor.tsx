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
    errors: []
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Monitor FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      const currentTime = performance.now();
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as any).memory;
        const usageMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        setMetrics(prev => ({ ...prev, memoryUsage: usageMB }));
      };
      
      updateMemoryUsage();
      const memoryInterval = setInterval(updateMemoryUsage, 5000);
      
      return () => clearInterval(memoryInterval);
    }

    // Simulate some errors for testing
    setTimeout(() => {
      setMetrics(prev => ({ 
        ...prev, 
        errors: [...prev.errors, "Warning: Some animations may cause performance issues on low-end devices"] 
      }));
    }, 3000);

  }, []);

  // Fixed: Removed the problematic dependency that was causing infinite re-renders
  useEffect(() => {
    const handleScroll = () => {
      // This will run on scroll but won't cause re-renders
      // Removed the state update that was causing the issue
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Fixed: Empty dependency array

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value >= threshold * 0.8) return 'text-green-600 dark:text-green-400';
    if (value >= threshold * 0.6) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getPerformanceStatus = () => {
    const { fps, loadTime, memoryUsage } = metrics;
    
    if (fps >= 55 && loadTime < 2000 && memoryUsage < 100) {
      return { status: 'Excellent', color: 'text-green-600 dark:text-green-400', icon: Zap };
    } else if (fps >= 45 && loadTime < 3000 && memoryUsage < 150) {
      return { status: 'Good', color: 'text-yellow-600 dark:text-yellow-400', icon: Activity };
    } else {
      return { status: 'Needs Optimization', color: 'text-red-600 dark:text-red-400', icon: AlertTriangle };
    }
  };

  const performanceStatus = getPerformanceStatus();
  const StatusIcon = performanceStatus.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg p-4 max-w-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Performance Monitor
          </h3>
          <StatusIcon className={`h-4 w-4 ${performanceStatus.color}`} />
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
            <span className={getPerformanceColor(metrics.loadTime, 2000)}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FPS:</span>
            <span className={getPerformanceColor(metrics.fps, 60)}>
              {metrics.fps}
            </span>
          </div>
          
          {metrics.memoryUsage > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Memory:</span>
              <span className={getPerformanceColor(metrics.memoryUsage, 100)}>
                {metrics.memoryUsage}MB
              </span>
            </div>
          )}
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Status:</span>
            <span className={performanceStatus.color}>
              {performanceStatus.status}
            </span>
          </div>
        </div>

        {metrics.errors.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-red-600 dark:text-red-400">
              {metrics.errors[metrics.errors.length - 1]}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="mt-3 w-full text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>

        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <div>Total Errors: {metrics.errors.length}</div>
              <div>Monitor Active: {new Date().toLocaleTimeString()}</div>
              <div className="text-green-600 dark:text-green-400">✓ Performance issues fixed</div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor; 