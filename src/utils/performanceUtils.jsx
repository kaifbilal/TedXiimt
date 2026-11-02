import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ImageOff, Package, Zap } from 'lucide-react';

// Intersection Observer Hook for Lazy Loading
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        
        if (isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasBeenVisible, options]);

  return { elementRef, isVisible, hasBeenVisible };
};

// Optimized Image Component with Lazy Loading
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/api/placeholder/400/300',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { elementRef, hasBeenVisible } = useIntersectionObserver();

  // Combine refs
  const setRefs = useCallback((node) => {
    elementRef.current = node;
    setImageRef(node);
  }, [elementRef]);

  useEffect(() => {
    if (hasBeenVisible && src && imageSrc === placeholder) {
      // Preload the actual image
      const imageToLoad = new Image();
      
      imageToLoad.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      
      imageToLoad.onerror = () => {
        setIsError(true);
      };
      
      imageToLoad.src = src;
    }
  }, [hasBeenVisible, src, imageSrc, placeholder]);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={setRefs}>
      <img
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-70'
        } ${className}`}
        sizes={sizes}
        loading={loading}
        {...props}
      />
      
      {/* Loading overlay */}
      {!isLoaded && !isError && hasBeenVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm">
          <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/70 text-white text-sm">
          <div className="text-center">
            <ImageOff className="w-6 h-6 mx-auto mb-2 text-gray-400" />
            <div>Image not available</div>
          </div>
        </div>
      )}
      
      {/* Blur-up effect for placeholder */}
      {imageSrc === placeholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse" />
      )}
    </div>
  );
};

// Lazy Loading Component Wrapper
export const LazySection = ({ 
  children, 
  className = '', 
  fallback = null,
  rootMargin = '100px' 
}) => {
  const { elementRef, hasBeenVisible } = useIntersectionObserver({ rootMargin });

  return (
    <div ref={elementRef} className={className}>
      {hasBeenVisible ? children : (fallback || <div className="h-64 bg-gray-900 animate-pulse rounded-lg" />)}
    </div>
  );
};

// Performance Monitoring Hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0
  });

  useEffect(() => {
    // Basic performance metrics
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      setMetrics(prev => ({
        ...prev,
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      }));
    }

    // Performance Observer for Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
            }
          }
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, largestContentfulPaint: entry.startTime }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return metrics;
};

// Resource Preloader
export const useResourcePreloader = (resources = []) => {
  const [loadedResources, setLoadedResources] = useState(new Set());

  useEffect(() => {
    resources.forEach((resource) => {
      if (resource.type === 'image') {
        const img = new Image();
        img.onload = () => {
          setLoadedResources(prev => new Set([...prev, resource.src]));
        };
        img.src = resource.src;
      } else if (resource.type === 'font') {
        const font = new FontFace(resource.family, `url(${resource.src})`);
        font.load().then(() => {
          document.fonts.add(font);
          setLoadedResources(prev => new Set([...prev, resource.src]));
        });
      }
    });
  }, [resources]);

  return loadedResources;
};

// Debounced Input Hook
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Memory Usage Monitor (Development)
export const useMemoryMonitor = () => {
  const [memoryUsage, setMemoryUsage] = useState(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
      const interval = setInterval(() => {
        const memory = performance.memory;
        setMemoryUsage({
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return memoryUsage;
};

// Bundle Size Analyzer Component (Development)
export const BundleAnalyzer = () => {
  const [bundleInfo, setBundleInfo] = useState(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Simulate bundle analysis
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      
      setBundleInfo({
        scripts: scripts.length,
        styles: styles.length,
        totalResources: scripts.length + styles.length
      });
    }
  }, []);

  if (process.env.NODE_ENV !== 'development' || !bundleInfo) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black/90 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="flex items-center space-x-1.5 font-bold mb-1">
        <Package className="w-3.5 h-3.5 text-blue-400" />
        <span>Bundle Info:</span>
      </div>
      <div>Scripts: {bundleInfo.scripts}</div>
      <div>Styles: {bundleInfo.styles}</div>
      <div>Total: {bundleInfo.totalResources}</div>
    </div>
  );
};

// Critical CSS Loader
export const loadCriticalCSS = (cssText) => {
  const style = document.createElement('style');
  style.textContent = cssText;
  document.head.appendChild(style);
};

// Service Worker Registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
      return registration;
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
    }
  }
};

// Performance Optimization Tips Component
export const PerformanceInsights = () => {
  const metrics = usePerformanceMonitor();
  const memoryUsage = useMemoryMonitor();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed top-4 right-4 bg-green-900/90 text-green-100 p-3 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2 flex items-center space-x-1.5">
        <Zap className="w-3.5 h-3.5 text-yellow-400" />
        <span>Performance</span>
      </div>
      {metrics.loadTime > 0 && (
        <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      )}
      {metrics.firstContentfulPaint > 0 && (
        <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
      )}
      {metrics.largestContentfulPaint > 0 && (
        <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
      )}
      {memoryUsage && (
        <div>Memory: {memoryUsage.used}MB/{memoryUsage.total}MB</div>
      )}
    </div>
  );
};

export default {
  useIntersectionObserver,
  OptimizedImage,
  LazySection,
  usePerformanceMonitor,
  useResourcePreloader,
  useDebounce,
  useMemoryMonitor,
  BundleAnalyzer,
  PerformanceInsights,
  loadCriticalCSS,
  registerServiceWorker
};