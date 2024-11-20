'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 181 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M82.584 17V1.248h4.818c2.405 0 4.338.726 5.797 2.178 1.46 1.452 2.189 3.351 2.189 5.698 0 2.361-.73 4.264-2.189 5.709C91.739 16.278 89.807 17 87.402 17h-4.818zm2.024-13.816v11.88h2.794c1.833 0 3.278-.524 4.334-1.573 1.056-1.049 1.584-2.504 1.584-4.367 0-1.848-.528-3.3-1.584-4.356s-2.5-1.584-4.334-1.584h-2.794zm17.666 14.168c-1.584 0-2.89-.543-3.916-1.628-1.027-1.085-1.54-2.457-1.54-4.114 0-1.643.499-3.01 1.496-4.103s2.273-1.639 3.828-1.639c1.599 0 2.871.517 3.817 1.551.946 1.034 1.419 2.482 1.419 4.345l-.022.22h-8.47c.03 1.056.381 1.907 1.056 2.552a3.379 3.379 0 002.42.968c1.29 0 2.303-.645 3.036-1.936l1.804.88a5.377 5.377 0 01-2.013 2.134c-.858.513-1.83.77-2.915.77zm-3.234-7.04h6.182a2.684 2.684 0 00-.913-1.859c-.55-.491-1.287-.737-2.211-.737-.763 0-1.419.235-1.969.704-.55.47-.913 1.1-1.089 1.892zm15.026 7.04c-1.584 0-2.89-.543-3.916-1.628-1.027-1.085-1.54-2.457-1.54-4.114 0-1.643.499-3.01 1.496-4.103s2.273-1.639 3.828-1.639c1.599 0 2.871.517 3.817 1.551.946 1.034 1.419 2.482 1.419 4.345l-.022.22h-8.47c.03 1.056.381 1.907 1.056 2.552a3.379 3.379 0 002.42.968c1.29 0 2.303-.645 3.036-1.936l1.804.88a5.377 5.377 0 01-2.013 2.134c-.858.513-1.83.77-2.915.77zm-3.234-7.04h6.182a2.684 2.684 0 00-.913-1.859c-.55-.491-1.287-.737-2.211-.737-.763 0-1.419.235-1.969.704-.55.47-.913 1.1-1.089 1.892zm15.466 5.192c.968 0 1.782-.367 2.442-1.1.66-.719.99-1.65.99-2.794 0-1.13-.33-2.06-.99-2.794-.66-.733-1.474-1.1-2.442-1.1-.983 0-1.804.367-2.464 1.1-.645.733-.968 1.665-.968 2.794 0 1.144.323 2.083.968 2.816.66.719 1.481 1.078 2.464 1.078zm.33 1.848a4.649 4.649 0 01-2.167-.506c-.653-.337-1.155-.785-1.507-1.342h-.088l.088 1.496v4.752h-2.024V6.22h1.936v1.496h.088c.352-.557.854-1.005 1.507-1.342a4.649 4.649 0 012.167-.506c1.423 0 2.625.557 3.608 1.672 1.012 1.13 1.518 2.486 1.518 4.07 0 1.599-.506 2.955-1.518 4.07-.983 1.115-2.185 1.672-3.608 1.672zm9.35-.352h-2.024V1.248h2.024l5.478 9.592h.088l5.478-9.592h2.024V17h-2.024V7.65l.088-2.64h-.088l-4.928 8.646h-1.188l-4.928-8.646h-.088l.088 2.64V17zM154.48 2.502c0 .396-.14.733-.418 1.012a1.378 1.378 0 01-1.012.418c-.396 0-.733-.14-1.012-.418a1.378 1.378 0 01-.418-1.012c0-.396.14-.733.418-1.012a1.378 1.378 0 011.012-.418c.396 0 .733.14 1.012.418.279.279.418.616.418 1.012zm-.418 3.718V17h-2.024V6.22h2.024zm2.64 0h1.936v1.496h.088c.308-.528.781-.968 1.419-1.32a4.067 4.067 0 011.991-.528c1.32 0 2.336.378 3.047 1.133.711.755 1.067 1.83 1.067 3.223V17h-2.024v-6.644c-.044-1.76-.931-2.64-2.662-2.64-.807 0-1.481.326-2.024.979-.543.653-.814 1.434-.814 2.343V17h-2.024V6.22zm16.764 9.284c.997 0 1.811-.36 2.442-1.078.66-.719.99-1.657.99-2.816 0-1.13-.33-2.06-.99-2.794-.645-.733-1.46-1.1-2.442-1.1-.968 0-1.782.367-2.442 1.1-.66.733-.99 1.665-.99 2.794 0 1.144.33 2.075.99 2.794.66.733 1.474 1.1 2.442 1.1zm-.33 1.848c-1.408 0-2.618-.557-3.63-1.672-.997-1.13-1.496-2.486-1.496-4.07s.499-2.94 1.496-4.07c1.012-1.115 2.222-1.672 3.63-1.672.792 0 1.514.169 2.167.506.653.337 1.155.785 1.507 1.342h.088l-.088-1.496V1.248h2.024V17h-1.936v-1.496h-.088c-.352.557-.854 1.005-1.507 1.342a4.649 4.649 0 01-2.167.506zM19.947 8.482H11.43v2.536h6.041c-.298 3.557-3.247 5.074-6.03 5.074-3.562 0-6.67-2.812-6.67-6.753 0-3.839 2.963-6.795 6.677-6.795 2.866 0 4.555 1.833 4.555 1.833l1.77-1.84-.124-.126C17.123 1.898 14.94 0 11.357 0 6.081 0 2 4.468 2 9.294c0 4.729 3.84 9.34 9.491 9.34 4.972 0 8.61-3.417 8.61-8.47a8.69 8.69 0 00-.118-1.507l-.036-.175zm7.013.515c1.719 0 3.347 1.395 3.347 3.642 0 2.199-1.621 3.633-3.355 3.633-1.905 0-3.408-1.53-3.408-3.65 0-2.075 1.485-3.625 3.416-3.625zm-.035-2.352c-3.495 0-6 2.742-6 5.94 0 3.245 2.43 6.038 6.041 6.038 3.27 0 5.948-2.508 5.948-5.968 0-3.877-2.976-5.916-5.793-6.007l-.196-.003zM40.01 8.997c1.72 0 3.348 1.395 3.348 3.642 0 2.199-1.622 3.633-3.356 3.633-1.904 0-3.407-1.53-3.407-3.65 0-2.075 1.484-3.625 3.415-3.625zm-.034-2.352c-3.496 0-6 2.742-6 5.94 0 3.245 2.43 6.038 6.04 6.038 3.27 0 5.949-2.508 5.949-5.968 0-3.877-2.976-5.916-5.793-6.007l-.196-.003zM53.006 9c1.573 0 3.188 1.348 3.188 3.65 0 2.338-1.611 3.628-3.222 3.628-1.71 0-3.302-1.394-3.302-3.607 0-2.299 1.652-3.67 3.336-3.67zm-.232-2.348c-3.208 0-5.73 2.82-5.73 5.984 0 3.605 2.924 5.996 5.675 5.996 1.7 0 2.605-.678 3.273-1.455v1.18c0 2.067-1.25 3.304-3.137 3.304-1.824 0-2.738-1.36-3.056-2.132l-2.293.962c.813 1.726 2.451 3.527 5.368 3.527 3.19 0 5.62-2.016 5.62-6.244V7.012h-2.502v1.014c-.721-.78-1.691-1.306-2.96-1.368l-.258-.007zm16.951 2.29c1.09 0 1.875.581 2.209 1.279l-5.345 2.241c-.23-1.735 1.408-3.52 3.136-3.52zm-.104-2.304c-3.026 0-5.567 2.416-5.567 5.981 0 3.772 2.832 6.01 5.858 6.01 2.525 0 4.075-1.387 5-2.629l-2.063-1.377c-.536.833-1.43 1.648-2.925 1.648-1.678 0-2.45-.922-2.927-1.815L75 11.123l-.415-.976c-.747-1.847-2.454-3.399-4.719-3.504l-.245-.006zM60.24 18.272h2.628V.62H60.24v17.652z"></path>
    </svg>
  );
});

export default Icon;
