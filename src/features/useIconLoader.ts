import { useEffect, useState } from 'react';

import { measureAsyncPerformance, recordCacheHit, recordCacheMiss } from './performanceUtils';

interface IconLoaderState {
  IconComponent: any;
  error: Error | null;
  loading: boolean;
}

interface MappingItem {
  [key: string]: any;
  iconImport: () => Promise<{ default: any }>;
}

// 图标缓存，避免重复加载相同的图标
const iconCache = new Map<() => Promise<{ default: any }>, Promise<{ default: any }>>();

export const useIconLoader = (mappingItem: MappingItem | null): IconLoaderState => {
  const [state, setState] = useState<IconLoaderState>({
    IconComponent: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    if (!mappingItem) {
      setState({ IconComponent: null, error: null, loading: false });
      return;
    }

    setState((prev) => ({ ...prev, error: null, loading: true }));

    const { iconImport } = mappingItem;

    // 检查缓存
    let importPromise = iconCache.get(iconImport);

    if (!importPromise) {
      importPromise = measureAsyncPerformance(
        `Icon Import: ${iconImport.name || 'Unknown'}`,
        iconImport,
      );
      iconCache.set(iconImport, importPromise);
      recordCacheMiss();
    } else {
      recordCacheHit();
    }

    importPromise
      .then((module) => {
        setState({
          IconComponent: module.default,
          error: null,
          loading: false,
        });
      })
      .catch((error) => {
        console.error('Failed to load icon:', error);
        setState({
          IconComponent: null,
          error: error instanceof Error ? error : new Error(String(error)),
          loading: false,
        });
      });
  }, [mappingItem]);

  return state;
};

// 清除图标缓存的工具函数
export const clearIconCache = () => {
  iconCache.clear();
};
