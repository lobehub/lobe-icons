// @ts-ignore
import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';

export interface SvgoConfig {
  addAttributesToSVGElement?: any;
  cleanupAttrs?: any;
  cleanupEnableBackground?: any;
  cleanupIDs?: any;
  cleanupNumericValues?: any;
  collapseGroups?: any;
  convertColors?: any;
  convertPathData?: any;
  convertShapeToPath?: any;
  convertStyleToAttrs?: any;
  convertTransform?: any;
  mergePaths?: any;
  moveElemsAttrsToGroup?: any;
  moveGroupAttrsToElems?: any;
  removeAttrs?: any;
  removeComments?: any;
  removeDesc?: any;
  removeDimensions?: any;
  removeDoctype?: any;
  removeEditorsNSData?: any;
  removeEmptyAttrs?: any;
  removeEmptyContainers?: any;
  removeEmptyText?: any;
  removeHiddenElems?: any;
  removeMetadata?: any;
  removeNonInheritableGroupAttrs?: any;
  removeRasterImages?: any;
  removeTitle?: any;
  removeUnknownsAndDefaults?: any;
  removeUnusedNS?: any;
  removeUselessDefs?: any;
  removeUselessStrokeAndFill?: any;
  removeViewBox?: any;
  removeXMLProcInst?: any;
  sortAttrs?: any;
}

export const defaultPlugins = {
  cleanupAttrs: true,
  cleanupEnableBackground: true,
  cleanupIDs: true,
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

export default class SVGO {
  app: any;
  constructor(config?: SvgoConfig) {
    this.app = getSvgoInstance({ ...defaultPlugins, ...config });
  }

  async optimize(svgData: string) {
    const { data } = await this.app.optimize(svgData);
    return data;
  }
}
