/**
 * `build:static`: export icons to packages/static-{svg,png,webp,avatar}.
 *
 * - no flags: export every icon (full build).
 * - `--only <Id,Id,...>` (or `ICONS_ONLY`): export just these icons, e.g. `--only OpenAI,Claude`.
 * - `--since <ref|auto>`: incremental export of the icons changed since `ref` (`auto`: the last
 *   "Auto build static icons" commit, see ./changes.ts). Removed icons are deleted, shared changes
 *   fall back to a full build. `--full` (or `STATIC_FULL=true`) forces the full build,
 *   `--dry-run` only prints the plan.
 */
import { consola } from 'consola';

import { planExport } from './changes';
import { SvgWorkflow } from './workflow';

const args = process.argv.slice(2);

const getArg = (name: string): string | undefined => {
  const index = args.findIndex((arg) => arg === `--${name}` || arg.startsWith(`--${name}=`));
  if (index === -1) return undefined;
  return args[index].includes('=') ? args[index].split('=')[1] : args[index + 1];
};

const parseOnly = (): string[] | undefined => {
  const raw = getArg('only') ?? process.env.ICONS_ONLY;
  const ids = raw
    ?.split(',')
    .map((id) => id.trim())
    .filter(Boolean);
  return ids && ids.length > 0 ? ids : undefined;
};

const main = async () => {
  const since = getArg('since');
  if (!since) {
    await new SvgWorkflow({ only: parseOnly() }).run();
    return;
  }

  const plan = planExport({
    full: args.includes('--full') || process.env.STATIC_FULL === 'true',
    since,
  });
  consola.info(`Static export baseline: ${plan.baseline ?? '(none)'}`);
  if (args.includes('--dry-run')) {
    consola.log(JSON.stringify(plan, null, 2));
    return;
  }

  if (plan.full) {
    consola.info(`Full export: ${plan.reasons.join('; ')}`);
    await new SvgWorkflow().run();
    return;
  }

  consola.info(
    `Incremental export: ${plan.only.join(', ') || '(nothing to export)'}; removed: ${plan.remove.join(', ') || '(none)'}`,
  );
  const workflow = new SvgWorkflow({ only: plan.only });
  // Clear touched icons first so dropped variants disappear; a re-export rewrites the rest.
  const removed = workflow.removeIconFiles([
    ...plan.remove,
    ...plan.only.map((id) => id.toLowerCase()),
  ]);
  consola.info(`Cleared ${removed.length} existing file(s)`);
  if (plan.only.length > 0) await workflow.run();
};

main().catch((error) => {
  consola.error(error);
  process.exit(1);
});
