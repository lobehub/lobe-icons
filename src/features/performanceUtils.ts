// 性能监控工具
export interface CacheStats {
  iconCacheSize: number;
  modelCacheSize: number;
  providerCacheSize: number;
}

export interface PerformanceMetrics {
  cacheStats: CacheStats;
  iconLoadTime: number;
  mappingLookupTime: number;
}

// 缓存命中率统计
let cacheHits = 0;
let cacheMisses = 0;

export const recordCacheHit = () => {
  cacheHits++;
};

export const recordCacheMiss = () => {
  cacheMisses++;
};

export const getCacheHitRate = (): number => {
  const total = cacheHits + cacheMisses;
  return total === 0 ? 0 : cacheHits / total;
};

export const resetCacheStats = () => {
  cacheHits = 0;
  cacheMisses = 0;
};

// 性能测量工具
export const measurePerformance = <T>(name: string, fn: () => T): T => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  }

  return result;
};

export const measureAsyncPerformance = async <T>(
  name: string,
  fn: () => Promise<T>,
): Promise<T> => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  }

  return result;
};

// 内存使用监控
export const getMemoryUsage = (): number | undefined => {
  if (typeof performance !== 'undefined' && 'memory' in performance) {
    return (performance as any).memory?.usedJSHeapSize;
  }
  return undefined;
};

// 批量预加载图标
export const preloadIcons = async (iconImports: (() => Promise<any>)[]): Promise<void> => {
  try {
    await Promise.all(iconImports.map((importFn) => importFn()));
    console.log(`[Performance] Preloaded ${iconImports.length} icons`);
  } catch (error) {
    console.warn('[Performance] Icon preloading failed:', error);
  }
};
