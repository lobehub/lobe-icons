import assert from 'node:assert/strict';
import { Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import AMDRadeonCloudColor from '../src/AMDRadeonCloud/components/Color';
import AMDRadeonCloud from '../src/AMDRadeonCloud/components/Mono';
import Crusoe from '../src/Crusoe/components/Mono';
import CyberCut from '../src/CyberCut/components/Mono';
import OpenClaw from '../src/OpenClaw/components/Mono';
import Phind from '../src/Phind/components/Text';
import Rwkv from '../src/Rwkv/components/Mono';
import Together from '../src/Together/components/Text';

const markup = renderToStaticMarkup(
  <>
    {[AMDRadeonCloud, AMDRadeonCloudColor, Crusoe, CyberCut, OpenClaw, Phind, Rwkv, Together].map(
      (Icon, index) => (
        <Fragment key={index}>
          <Icon />
          <Icon />
        </Fragment>
      ),
    )}
  </>,
);
const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Repeated icons must have unique SVG IDs');

for (const [svg] of markup.matchAll(/<svg\b[\S\s]*?<\/svg>/g)) {
  for (const [, id] of svg.matchAll(/url\(#([^)]+)\)/g)) {
    assert.ok(svg.includes(`id="${id}"`), `SVG reference ${id} must resolve within its own icon`);
  }
}

console.log('SVG IDs and references pass for repeated icon instances.');
