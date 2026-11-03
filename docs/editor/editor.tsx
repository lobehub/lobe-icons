'use client';

import type { ReactNode } from 'react';

export default function Editor({ children }: { children?: ReactNode }) {
  return (
    <>
      <h2 id="svg-editor">SVG Editor</h2>
      <ul>
        <li>
          SVG Minifier:{' '}
          <a href="https://svgminify.com" rel="noreferrer" target="_blank">
            https://svgminify.com
          </a>
        </li>
      </ul>
      {children}
    </>
  );
}
