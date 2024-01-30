import { useCallback, useEffect, useRef, useState } from 'react';

import SvgoClient, { SvgoConfig } from '@/components/Editor/svgo';

export const useSvgo = (svg: string, config: SvgoConfig) => {
  const svgoInstance = useRef<SvgoClient>();
  const [isLoading, setIsLoading] = useState(true);
  const [newSvg, setNewSvg] = useState(svg);

  const compressionSvg = useCallback(async () => {
    if (!svgoInstance.current) return;
    const data = await svgoInstance.current.optimize(svg);
    setNewSvg(data);
    setIsLoading(false);
  }, [svg]);

  useEffect(() => {
    svgoInstance.current = new SvgoClient(config);
  }, [config]);

  useEffect(() => {
    setIsLoading(false);
    compressionSvg();
  }, [config, svg]);

  return {
    isLoading,
    precent: `${-Math.floor((1 - newSvg.length / svg.length) * 100)}%`,
    svg: newSvg,
  };
};
