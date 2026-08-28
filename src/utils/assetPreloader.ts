// Site Asset Preloader for instant asset loading
export const CRITICAL_PRELOAD_ASSETS = [
  '/product-canister.webp',
  '/brand-logo.webp',
  '/video-preview-poster.webp',
  '/botanical-editorial-card.webp',
  '/brewing-step-1.webp',
  '/brewing-step-2.webp',
  '/brewing-step-3.webp',
  '/botanicals/peppermint.webp',
  '/botanicals/chamomile.webp',
  '/botanicals/lavender.webp',
  '/botanicals/rose.webp',
  '/botanicals/ashwagandha.webp',
  '/botanicals/hibiscus.webp',
  '/botanicals/lemongrass.webp',
  '/botanicals/licorice.webp',
  '/botanicals/rooibos.webp',
  'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80'
];

// Preloaded image URL tracker
export const globalPreloadedSet = new Set<string>();

/**
 * Pre-fetches an image into the browser's HTTP and memory cache
 */
export function preloadSingleImage(url: string, priority: 'high' | 'auto' | 'low' = 'auto'): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    if (globalPreloadedSet.has(url)) {
      resolve();
      return;
    }

    const img = new Image();
    img.decoding = 'async';
    if ('fetchPriority' in img) {
      (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = priority;
    }
    img.onload = () => {
      globalPreloadedSet.add(url);
      resolve();
    };
    img.onerror = () => {
      // Resolve regardless to not block other downloads
      resolve();
    };
    img.src = url;
  });
}

/**
 * Performs warm-up of all website images in the background upon landing
 */
export function warmupSiteAssets(): void {
  if (typeof window === 'undefined') return;

  const startPreload = () => {
    // 1. Immediately warm up primary visual cards and hero companions
    const priorityGroup = CRITICAL_PRELOAD_ASSETS.slice(0, 7);
    priorityGroup.forEach((url) => {
      preloadSingleImage(url, 'high');
    });

    // 2. Warm up the remaining botanicals and lifestyle shots during idle or shortly after
    const remainingGroup = CRITICAL_PRELOAD_ASSETS.slice(7);
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        remainingGroup.forEach((url) => preloadSingleImage(url, 'auto'));
      });
    } else {
      setTimeout(() => {
        remainingGroup.forEach((url) => preloadSingleImage(url, 'auto'));
      }, 200);
    }
  };

  // Run as soon as DOM is ready or after paint
  if (document.readyState === 'complete') {
    startPreload();
  } else {
    window.addEventListener('load', startPreload, { once: true });
    // Also initiate immediate start for fast connections
    setTimeout(startPreload, 50);
  }
}
