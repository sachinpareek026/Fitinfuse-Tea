import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

// Global cache of loaded URLs to prevent re-fading already cached assets
const loadedImageUrls = new Set<string>();

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  fallbackSrc,
  alt,
  priority = false,
  className = '',
  containerClassName = '',
  aspectRatio,
  ...props
}) => {
  const [isInView, setIsInView] = useState<boolean>(priority);
  const [currentSrc, setCurrentSrc] = useState<string>(priority ? src : '');
  const [isLoaded, setIsLoaded] = useState<boolean>(() => loadedImageUrls.has(src));
  const [hasError, setHasError] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 1. IntersectionObserver for smooth pre-loading 400px before viewport
  useEffect(() => {
    if (priority || isInView) return;

    const target = containerRef.current;
    if (!target) return;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              setCurrentSrc(src);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '450px 0px', // Starts loading 450px before entering viewport
          threshold: 0.01,
        }
      );

      observer.observe(target);
      return () => observer.disconnect();
    } else {
      // Fallback for environments without IntersectionObserver
      setIsInView(true);
      setCurrentSrc(src);
    }
  }, [src, priority, isInView]);

  // Sync if src changes
  useEffect(() => {
    if (isInView || priority) {
      setCurrentSrc(src);
      setHasError(false);
      if (loadedImageUrls.has(src)) {
        setIsLoaded(true);
      }
    }
  }, [src, isInView, priority]);

  const handleLoad = () => {
    loadedImageUrls.add(currentSrc || src);
    setIsLoaded(true);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc && !hasError) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Background placeholder matching site palette to eliminate CLS */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-[#123524]/5 dark:bg-[#123524]/20 animate-pulse transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};
