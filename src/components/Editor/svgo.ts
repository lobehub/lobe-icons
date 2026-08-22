import { type Config, type PluginConfig, optimize } from 'svgo/browser';

export interface SvgoConfig {
  [key: string]: any;
}

/** Leva toggles for the editor Config panel (SVGO plugin names). */
export const defaultPlugins = {
  cleanupAttrs: true,
  cleanupEnableBackground: true,
  cleanupIds: true,
  cleanupNumericValues: true,
  collapseGroups: true,
  convertColors: true,
  convertPathData: true,
  convertShapeToPath: true,
  convertStyleToAttrs: true,
  convertTransform: true,
  mergePaths: true,
  moveGroupAttrsToElems: true,
  removeComments: true,
  removeDesc: true,
  removeDimensions: true,
  removeDoctype: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeEmptyContainers: true,
  removeEmptyText: true,
  removeHiddenElems: true,
  removeMetadata: true,
  removeNonInheritableGroupAttrs: true,
  removeRasterImages: false,
  removeTitle: true,
  removeUnknownsAndDefaults: true,
  removeUnusedNS: true,
  removeUselessDefs: true,
  removeUselessStrokeAndFill: true,
  removeViewBox: false,
  removeXMLProcInst: true,
  sortAttrs: true,
};

const PRESET_OVERRIDE_KEYS = [
  'cleanupAttrs',
  'cleanupEnableBackground',
  'cleanupIds',
  'cleanupNumericValues',
  'collapseGroups',
  'convertColors',
  'convertPathData',
  'convertShapeToPath',
  'convertTransform',
  'mergePaths',
  'moveElemsAttrsToGroup',
  'moveGroupAttrsToElems',
  'removeComments',
  'removeDesc',
  'removeDoctype',
  'removeEditorsNSData',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'removeEmptyText',
  'removeHiddenElems',
  'removeMetadata',
  'removeNonInheritableGroupAttrs',
  'removeUnknownsAndDefaults',
  'removeUnusedNS',
  'removeUselessDefs',
  'removeUselessStrokeAndFill',
  'removeXMLProcInst',
  'sortAttrs',
] as const;

const STANDALONE_BOOLEAN_PLUGINS = [
  'convertStyleToAttrs',
  'removeDimensions',
  'removeRasterImages',
  'removeTitle',
  'removeViewBox',
] as const;

const toPluginEnabled = (value: unknown): boolean => value !== false && value !== undefined;

const buildPlugins = (config: SvgoConfig = {}): PluginConfig[] => {
  const normalized: SvgoConfig = {
    ...config,
    cleanupIds: config.cleanupIds ?? config.cleanupIDs,
  };

  const overrides: Record<string, false> = {};
  for (const key of PRESET_OVERRIDE_KEYS) {
    if (normalized[key] === false) overrides[key] = false;
  }

  const plugins: PluginConfig[] = [
    {
      name: 'preset-default',
      params: { overrides },
    },
  ];

  for (const name of STANDALONE_BOOLEAN_PLUGINS) {
    if (toPluginEnabled(normalized[name])) {
      plugins.push(name);
    }
  }

  const removeAttrs = normalized.removeAttrs;
  if (removeAttrs && typeof removeAttrs === 'object' && removeAttrs.attrs) {
    plugins.push({
      name: 'removeAttrs',
      params: { attrs: removeAttrs.attrs },
    });
  }

  const addAttributes = normalized.addAttributesToSVGElement;
  if (addAttributes && typeof addAttributes === 'object') {
    const attributes =
      addAttributes.attributes ?? (addAttributes.attribute ? [addAttributes.attribute] : undefined);
    if (attributes?.length) {
      plugins.push({
        name: 'addAttributesToSVGElement',
        params: { attributes },
      });
    }
  }

  return plugins;
};

export default class SVGO {
  private readonly config: Config;

  constructor(config?: SvgoConfig) {
    this.config = {
      multipass: true,
      plugins: buildPlugins(config),
    };
  }

  async optimize(svgData: string) {
    const { data } = optimize(svgData, this.config);
    return data;
  }
}
