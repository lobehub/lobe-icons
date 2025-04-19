'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 90 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M40.768 15.267c-4.522 2.503-9.08 4.794-14.149 5.834-1.13.23-2.384.23-3.532.07-1.095-.14-1.643-1.127-1.254-2.167.37-.97.865-1.956 1.501-2.767 1.378-1.763 2.932-3.366 4.328-5.111a26.102 26.102 0 002.296-3.402c.494-.846.265-1.868-.6-2.29-1.45-.724-3.004-1.235-4.54-1.781-.177-.07-.442.123-.795.247.441.405.76.705 1.201 1.11-4.557.793-8.867 1.921-13.053 3.472-.018.088-.053.159-.036.194.619.97.336 1.71-.565 2.309-.336.229-.653.51-.918.863 2.755.829 5.21.353 7.56-1.216-.142-.211-.283-.405-.424-.617.883.159 1.413.653 1.483 1.428.018.176-.088.352-.14.529-.125-.141-.284-.282-.39-.44-.07-.107-.088-.23-.14-.406-2.792 1.903-5.794 2.38-9.098 1.392 0 .67-.035 1.234.018 1.78.035.476-.159.687-.583.934-.954.6-1.943 1.216-2.738 2.01-.953.969-.6 2.15.69 2.643 1.465.564 3.002.582 4.539.388 1.82-.23 3.603-.529 5.581-.81-2.313 1.11-4.592 1.885-6.994 2.202-1.678.23-3.356.353-5.017-.14-2.384-.688-3.444-2.486-2.826-4.9.583-2.256 1.996-4.054 3.515-5.71 5.07-5.517 11.481-8.32 18.9-8.883 1.731-.124 3.48.105 5.105.846 2.278 1.057 3.232 3.295 2.12 5.551-.725 1.498-1.732 2.873-2.738 4.23-.99 1.34-2.102 2.573-3.145 3.86-.3.388-.582.793-.812 1.234-.442.828-.141 1.374.795 1.286 1.96-.194 3.956-.352 5.846-.846 2.774-.722 5.476-1.745 8.214-2.644.283-.07.548-.176.795-.282zm3.603-10.75h2.084v5.305c0 .423-.211.793-.512 1.128-.159.158-.335.3-.512.44a2.11 2.11 0 01-1.06.388H42.27V4.517h2.102zm-.46 1.41v4.511h.884V5.927h-.883zm-2.33-3.772v3.437c0 .493-.584.899-.83 1.092.246.194.83.6.83 1.076v2.643c0 .476-.778 1.392-1.431 1.428h-.99v.599c0 .828-.918 1.586-1.766 1.586V2.155h4.186zM39.513 3.6h-.354v6.803h.69V6.966h-.566c.018 0 .035 0 .053-.017.018 0 .018 0 .018-.018l.141-.14.018-.018c.194-.194.335-.512.335-.688V3.618c-.017-.018-.335-.018-.335-.018zm9.785-1.445c0 .37-.282 1.445-.67 1.445v8.742c0 1.145-1.202 1.674-1.767 1.674V3.6h-5.034V2.155h7.471zm12.877 10.504c-.336.511-.742 1.375-1.183 1.375H50.359v-1.375h4.716v-1.128H50.5v-1.304h4.575v-.97H50.5V2.156h11.34v5.516c-.035.564-1.254 1.569-2.013 1.569h-2.65v.97h4.734c-.247.475-.707 1.303-1.236 1.303h-3.498v1.128l4.999.018zm-4.999-4.723h2.561V3.512h-2.56v1.533h2.366c-.106.106-.9 1.128-1.06 1.216h-.017c-.142.089-.248.141-.371.141h-.919v1.534zm-2.12-1.551H52.55v1.533h2.509V6.385zm0-2.873H52.55v1.533h2.509V3.512zm19.925 8.97c-.124.494-.918 1.534-1.572 1.534h-8.602c-.919 0-1.413-.828-1.413-1.674V2.155h11.27v5.358c-.036.564-1.22 1.621-1.873 1.621H65.55v3.349h9.432zM70.16 7.62h2.384V3.67H70.16v3.948zm-4.593 0h2.526V3.67h-2.526v3.948zM88 12.483c-.124.493-.919 1.533-1.572 1.533h-8.602c-.936 0-1.413-.828-1.413-1.674V2.155h11.27v5.358c-.036.564-1.22 1.621-1.873 1.621h-7.278v3.349H88zm-4.822-4.864h2.402V3.67h-2.402v3.948zm-4.61 0h2.508V3.67h-2.508v3.948zm-31 14.258V18.14h1.449v3.737h-1.449zm-.035-4.283v-1.04h1.501v1.04h-1.501zM45.2 21.877v-5.323h1.413v5.323h-1.413zm37.376 0V18.14h.548v.582c.194-.194.282-.353.494-.458.195-.141.407-.177.672-.177.265 0 .512.036.724.177.124.123.23.264.318.458.318-.423.689-.635 1.183-.635.354 0 .671.053.883.318.177.193.265.51.265.916v2.556h-.635V19.55c0-.282 0-.458-.036-.546-.035-.124-.141-.194-.23-.282a1.07 1.07 0 00-.423-.088c-.283 0-.513.088-.672.229-.14.176-.23.458-.23.881v2.133h-.6v-2.415c0-.317-.088-.493-.176-.634-.124-.141-.283-.194-.513-.194-.23 0-.406.053-.494.14-.177.054-.283.195-.353.424-.053.123-.089.37-.089.775v1.904h-.636zm-5.458-.459c-.194.141-.6.582-1.377.582-1.043 0-2.05-.81-2.05-1.992a2.04 2.04 0 012.05-2.062c.777 0 1.183.423 1.377.635-.088.14-.194.493-.282.6-.354-.46-.83-.583-1.095-.583-.778 0-1.414.635-1.414 1.41 0 .776.636 1.375 1.414 1.375.423 0 .83-.194 1.095-.634.123.317.265.528.282.67zm-4.751-.088h.512v.547h-.512v-.547zm-30.046-4.776h-1.82l-2.772 5.323h1.607l.495-1.058h2.932l.46 1.058h1.73l-2.632-5.323zm-1.996 3.225l1.007-2.062.919 2.062h-1.926zm14.096-1.18c-.371-.37-.813-.547-1.36-.547-.23 0-.46.035-.672.053-.353.123-.741.37-1.006.6v-2.15h-1.449v4.881c0 .123 0 .282-.035.423h1.448c0-.088.036-.141.036-.264v-.406c.194.23.406.423.777.635.23.123.671.14.812.14.6 0 1.06-.175 1.449-.546.318-.37.459-.828.459-1.445 0-.599-.141-1.057-.46-1.375zm-1.272 2.22c-.141.176-.406.265-.742.265-.318 0-.583-.089-.742-.265-.194-.194-.282-.458-.282-.81 0-.37.088-.688.282-.917.194-.194.424-.282.742-.282s.583.088.742.282c.194.194.283.493.283.864 0 .37-.071.652-.283.863zm12.24-2.22a1.803 1.803 0 00-1.324-.547c-.265 0-.46.035-.671.053-.371.123-.777.37-1.007.6v-2.15h-1.43v4.881c0 .123 0 .282-.036.423h1.448c0-.088.036-.141.036-.264v-.406c.194.23.406.423.777.635.23.123.6.14.812.14.6 0 1.095-.175 1.413-.546.318-.352.495-.828.495-1.445-.018-.599-.194-1.057-.512-1.375zm-1.236 2.22c-.141.176-.406.265-.742.265-.335 0-.6-.089-.777-.265-.176-.176-.265-.423-.265-.81 0-.406.089-.723.265-.917.195-.194.46-.282.777-.282.318 0 .583.088.742.282.177.194.265.493.265.864 0 .37-.088.652-.265.863zm-4.133.864v-2.186c0-.458-.177-.81-.548-1.057-.282-.23-.812-.353-1.554-.353h-.141c-.671 0-1.148.089-1.502.282-.353.194-.547.494-.636.882h1.449a.745.745 0 01.689-.423h.141c.265 0 .371.052.512.176.124.088.177.229.177.458v.088h-.83c-.548 0-.919.035-1.13.053-.283.035-.495.088-.637.194-.194.14-.37.282-.459.423-.088.23-.141.423-.141.634 0 .353.141.6.406.811.265.194.636.317 1.095.317.318 0 .6-.035.866-.123.318-.088.724-.317.865-.546v.088c0 .264.036.405.089.458h1.36c-.053 0-.071-.088-.071-.176zm-1.43-1.393c0 .318-.124.512-.23.67-.195.088-.318.194-.548.23h-.283c-.194 0-.37-.036-.459-.124-.123-.088-.176-.176-.176-.317 0-.194.123-.353.353-.406.088-.035.265-.088.512-.123h.83v.07zm12.434 1.393v-2.186c0-.458-.176-.81-.512-1.057-.318-.23-.865-.353-1.59-.353h-.14c-.672 0-1.131.053-1.502.282a1.156 1.156 0 00-.6.882h1.448c.035-.194.23-.423.67-.423h.142c.23 0 .406.052.512.176.124.053.177.194.177.458v.088h-.83c-.548 0-.883.035-1.13.053-.283.035-.513.088-.672.194-.194.14-.283.23-.424.423-.088.176-.123.37-.123.634 0 .37.123.635.353.811.318.194.689.317 1.13.317.318 0 .6-.035.866-.123.318-.088.742-.317.865-.546v.088c0 .264.036.423.124.458h1.325c-.071 0-.089-.088-.089-.176zm-1.413-1.393c0 .318-.088.512-.265.67-.141.088-.282.194-.512.23h-.265a.898.898 0 01-.494-.124c-.124-.053-.177-.176-.177-.317 0-.194.124-.353.353-.406.089-.035.23-.088.495-.123h.865v.07zm10.05-2.344c-1.13 0-1.995.917-1.995 2.062 0 1.058.865 1.992 1.996 1.992 1.13 0 2.013-.916 2.013-1.992 0-1.145-.9-2.062-2.013-2.062zm0 3.437c-.776 0-1.36-.6-1.36-1.375s.584-1.41 1.36-1.41c.778 0 1.379.635 1.379 1.41 0 .776-.601 1.375-1.378 1.375z" />
    </svg>
  );
});

export default Icon;
