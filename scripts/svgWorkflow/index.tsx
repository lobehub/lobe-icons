/**
 * `build:static`: export every icon to packages/static-{svg,png,webp,avatar}.
 *
 * Pass `--only <Id,Id,...>` (or set `ICONS_ONLY`) to export a subset of icons, e.g.
 * `bun scripts/svgWorkflow/index.tsx --only OpenAI,Claude`.
 */
import { SvgWorkflow } from './workflow';

const parseOnly = (): string[] | undefined => {
  const args = process.argv.slice(2);
  const flagIndex = args.findIndex((arg) => arg === '--only' || arg.startsWith('--only='));
  const raw =
    flagIndex === -1
      ? process.env.ICONS_ONLY
      : args[flagIndex].includes('=')
        ? args[flagIndex].split('=')[1]
        : args[flagIndex + 1];
  const ids = raw
    ?.split(',')
    .map((id) => id.trim())
    .filter(Boolean);
  return ids && ids.length > 0 ? ids : undefined;
};

const workflow = new SvgWorkflow({ only: parseOnly() });

workflow.run();
