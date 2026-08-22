import { useCallback, useEffect, useRef, useState } from 'react';

import SvgoClient, { type SvgoConfig } from '@/components/Editor/svgo';

export const useSvgo = (svg: string, config: SvgoConfig) => {
  const svgoInstance = useRef<SvgoClient | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newSvg, setNewSvg] = useState(svg);

  const compressionSvg = useCallback(async () => {
    if (!svgoInstance.current) return;
    try {
      const data = await svgoInstance.current.optimize(svg);
      setNewSvg(data);
    } catch {
      setNewSvg(svg);
    } finally {
      setIsLoading(false);
    }
  }, [svg]);

  useEffect(() => {
    svgoInstance.current = new SvgoClient(config);
  }, [config]);

  useEffect(() => {
    setIsLoading(true);
    void compressionSvg();
  }, [compressionSvg, config]);

  return {
    isLoading,
    precent: `${-Math.floor((1 - newSvg.length / Math.max(svg.length, 1)) * 100)}%`,
    svg: newSvg,
  };
};
