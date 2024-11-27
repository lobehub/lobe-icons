export interface LobeIconCdnConfig {
  cdn?: 'aliyun' | 'unpkg';
  format?: 'svg' | 'png' | 'webp';
  isDarkMode?: boolean;
  type?: 'mono' | 'color' | 'text' | 'text-cn' | 'text-color' | 'brand' | 'brand-color';
}

const ALIYUN_ICON_CDN = (type: LobeIconCdnConfig['format']) =>
  `https://registry.npmmirror.com/@lobehub/icons-static-${type}/latest/files`;
const UNPKG_ICON_CDN = (type: LobeIconCdnConfig['format']) =>
  `https://unpkg.com/@lobehub/icons-static-${type}@latest`;

export const getLobeIconCDN = (id: string, config?: LobeIconCdnConfig): string => {
  const { format = 'png', isDarkMode = false, type = 'color', cdn = 'aliyun' } = config || {};
  const baseUrl = cdn === 'unpkg' ? UNPKG_ICON_CDN(format) : ALIYUN_ICON_CDN(format);

  const addon = type === 'mono' ? '' : `-${type}`;

  switch (format) {
    case 'svg': {
      return `${baseUrl}/icons/${id.toLowerCase() + addon}.svg`;
    }
    case 'webp': {
      return `${baseUrl}/${isDarkMode ? 'dark' : 'light'}/${id.toLowerCase() + addon}.webp`;
    }
    default: {
      return `${baseUrl}/${isDarkMode ? 'dark' : 'light'}/${id.toLowerCase() + addon}.png`;
    }
  }
};
