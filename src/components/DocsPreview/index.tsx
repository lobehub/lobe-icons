'use client';

import { Flexbox } from '@lobehub/ui';
import { createStaticStyles } from 'antd-style';
import {
  PropsWithChildren,
  memo,
  useId,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from 'react';

const styles = createStaticStyles(({ css, cssVar }) => ({
  container: css`
    overflow-x: auto;

    min-height: 160px;
    margin-block: 16px;
    padding: 32px;
    border: 1px solid ${cssVar.colorBorderSecondary};
    border-radius: ${cssVar.borderRadiusLG};

    color: ${cssVar.colorText};

    background: ${cssVar.colorBgContainer};
  `,
}));

const getClientSnapshot = () => true;
const getServerSnapshot = () => false;
const unsubscribe = () => {};
const subscribe = () => unsubscribe;

const namespaceSvgIds = (container: HTMLDivElement, namespace: string) => {
  for (const [svgIndex, svg] of [...container.querySelectorAll('svg')].entries()) {
    const idMap = new Map<string, string>();

    for (const element of svg.querySelectorAll<HTMLElement>('[id]')) {
      const currentId = element.id;
      const namespacedId = `${namespace}-${svgIndex}-${currentId}`;
      idMap.set(currentId, namespacedId);
      element.id = namespacedId;
    }

    for (const element of svg.querySelectorAll('*')) {
      for (const attribute of element.getAttributeNames()) {
        const currentValue = element.getAttribute(attribute);
        if (!currentValue) continue;

        let nextValue = currentValue;
        for (const [currentId, namespacedId] of idMap) {
          nextValue = nextValue.replaceAll(`url(#${currentId})`, `url(#${namespacedId})`);
          if (nextValue === `#${currentId}`) nextValue = `#${namespacedId}`;
        }

        if (attribute === 'aria-describedby' || attribute === 'aria-labelledby') {
          nextValue = nextValue
            .split(/\s+/)
            .map((id) => idMap.get(id) ?? id)
            .join(' ');
        }

        if (nextValue !== currentValue) element.setAttribute(attribute, nextValue);
      }

      if (element.tagName.toLowerCase() === 'style' && element.textContent) {
        let nextValue = element.textContent;
        for (const [currentId, namespacedId] of idMap) {
          nextValue = nextValue.replaceAll(`url(#${currentId})`, `url(#${namespacedId})`);
        }
        element.textContent = nextValue;
      }
    }
  }
};

const DocsPreview = memo<PropsWithChildren>(({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hydrated = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const namespace = `docs-preview-${useId().replaceAll(/\W/g, '')}`;

  useLayoutEffect(() => {
    if (hydrated && containerRef.current) namespaceSvgIds(containerRef.current, namespace);
  }, [hydrated, namespace]);

  return (
    <Flexbox
      align={'center'}
      className={styles.container}
      data-docs-preview
      justify={'center'}
      ref={containerRef}
    >
      {hydrated ? children : null}
    </Flexbox>
  );
});

export default DocsPreview;
