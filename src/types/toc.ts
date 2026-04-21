export interface IconToc {
  color: string;
  colorGradient?: string;
  desc: string;
  docsUrl: string;
  fullTitle: string;
  group: 'model' | 'provider' | 'application';
  id: string;
  param: {
    hasAvatar: boolean;
    hasBrand: boolean;
    hasBrandColor: boolean;
    hasColor: boolean;
    hasCombine: boolean;
    hasText: boolean;
    hasTextCn: boolean;
    hasTextColor: boolean;
  };
  title: string;
}
