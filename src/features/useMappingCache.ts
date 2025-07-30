import { useMemo } from 'react';

import { modelMappings } from './modelConfig';
import { measurePerformance } from './performanceUtils';
import { providerMappings } from './providerConfig';

// 创建提供商映射缓存
const createProviderMappingCache = () => {
  const keywordMap = new Map<string, (typeof providerMappings)[0]>();

  for (const item of providerMappings) {
    for (const keyword of item.keywords) {
      keywordMap.set(keyword.toLowerCase(), item);
    }
  }

  return keywordMap;
};

// 创建模型映射缓存
const createModelMappingCache = () => {
  const keywordMap = new Map<string, (typeof modelMappings)[0]>();
  const regexMap = new Map<RegExp, (typeof modelMappings)[0]>();

  for (const item of modelMappings) {
    for (const keyword of item.keywords) {
      // 检查是否是正则表达式模式
      if (keyword.startsWith('^') || keyword.includes('(') || keyword.includes('[')) {
        try {
          const regex = new RegExp(keyword, 'i');
          regexMap.set(regex, item);
        } catch {
          // 如果正则表达式无效，作为普通字符串处理
          keywordMap.set(keyword.toLowerCase(), item);
        }
      } else {
        keywordMap.set(keyword.toLowerCase(), item);
      }
    }
  }

  return { keywordMap, regexMap };
};

// 全局缓存实例
let providerCache: Map<string, (typeof providerMappings)[0]> | null = null;
let modelCache: {
  keywordMap: Map<string, (typeof modelMappings)[0]>;
  regexMap: Map<RegExp, (typeof modelMappings)[0]>;
} | null = null;

export const useProviderMapping = (provider?: string) => {
  return useMemo(() => {
    if (!provider) return null;

    // 延迟初始化缓存
    if (!providerCache) {
      providerCache = createProviderMappingCache();
    }

    const lowerProvider = provider.toLowerCase();
    return measurePerformance(
      'Provider Mapping Lookup',
      () => providerCache!.get(lowerProvider) || null,
    );
  }, [provider]);
};

export const useModelMapping = (model?: string) => {
  return useMemo(() => {
    if (!model) return null;

    // 延迟初始化缓存
    if (!modelCache) {
      modelCache = createModelMappingCache();
    }

    return measurePerformance('Model Mapping Lookup', () => {
      const lowerModel = model.toLowerCase();

      // 首先尝试精确匹配
      const exactMatch = modelCache!.keywordMap.get(lowerModel);
      if (exactMatch) return exactMatch;

      // 然后尝试正则表达式匹配
      for (const [regex, item] of modelCache!.regexMap) {
        if (regex.test(lowerModel)) {
          return item;
        }
      }

      return null;
    });
  }, [model]);
};

// 重置缓存的工具函数（用于测试或开发环境）
export const resetMappingCache = () => {
  providerCache = null;
  modelCache = null;
};
