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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M5.54 19.662s2.24-.25 2.365-.29c.125-.042 2.45.082 2.45.082l1.493.374 1.37.498.373.125 2.033-.748 2.45-.373 1.659.041 1.286.166.54.166-.042 2.242-1.12-.291-2.159-.166-1.494.124-1.286.291-1.161.374-.83.332-1.744-.664-2.116-.416H7.158l-1.618.291v-2.158z"
        fillOpacity=".5"
      />
      <path d="M13.46 23c-3.773-2.078-7.78-.832-7.82-.819l-.453.144v-2.86l.24-.078c.174-.056 4.324-1.354 8.366.871l-.333.607c-3.244-1.786-6.66-1.115-7.58-.885V21.4c1.203-.286 4.595-.834 7.913.993L13.46 23V23z" />
      <path d="M13.413 23l-.334-.607c3.319-1.827 6.71-1.279 7.914-.993v-1.419c-.92-.231-4.337-.9-7.58.885l-.334-.607c4.042-2.225 8.192-.927 8.366-.87l.24.077v2.862l-.452-.147c-.04-.013-4.046-1.258-7.82.819z" />
      <path
        d="M17.756 16.476a.904.904 0 00-.264-.651.822.822 0 00-.632-.255.997.997 0 00-.644.293c-.175.212-.26.433-.259.685a.874.874 0 00.256.632c.175.187.39.272.644.255.246 0 .459-.1.633-.293a.97.97 0 00.268-.667l-.002.001zM10.769 17.143a.928.928 0 00.264-.658.993.993 0 00-.262-.679.908.908 0 00-.633-.227 1.089 1.089 0 00-.644.274 1.005 1.005 0 00-.265.685c0 .25.089.465.264.643.17.187.383.271.636.255.26-.008.471-.1.639-.293z"
        fillOpacity=".5"
      />
      <path d="M13.4 19.65c-.693 0-1.374-.058-1.895-.192-1.403-.36-2.52-1.01-3.413-1.986-.929-1.017-.988-1.996-1.05-3.033-.008-.133-.016-.267-.026-.405-.083-1.147-.626-2.941-.631-2.958l-.043-.141.086-.119A6.966 6.966 0 019.44 8.441c1.128-.47 2.47-.716 4.105-.752 2.721-.159 5.688.973 7.056 2.692l.086.109-.62 2.89c-.006.155-.052.968-.276 2.63-.263 1.947-2.668 3.061-3.903 3.377-.628.162-1.57.262-2.488.262zm-6.41-8.603c.134.46.538 1.912.613 2.944.01.139.018.277.026.412.06 1.01.109 1.809.896 2.672.815.89 1.837 1.484 3.125 1.814 1.092.28 3.061.194 4.091-.071.887-.228 3.24-1.19 3.468-2.889.24-1.786.272-2.593.273-2.6v-.026l.572-2.664c-.9-1.728-1.433-2.082-2.578-2.514-1.206-.455-2.677.075-3.903.148h-.01c-3.126.068-5.418-.935-6.574 2.773h.001z" />
      <path d="M19.545 10.862c.223.573.317.86.526 1.386 0 0 .552-.887.727-1.522.175-.641.068-1.458-.07-2.221-.344-1.282-.612-1.381-1.647-2.14a8.668 8.668 0 00-1.565-.84 12.303 12.303 0 00-3.83-.8 12.175 12.175 0 00-3.842.57 8.258 8.258 0 00-1.602.745c-1.075.695-1.823 1.674-2.24 2.932-.112.473-.29.927-.245 1.365.2 2.01 1.512 2.893 1.422 2.409-.117-.625-.042-.994.119-1.592.304-1.13 1.025-1.965 2.163-2.497h.004c.221-.062 1.344-.7 2.834.062.396.17 1.088.629 1.434.618.347-.01.846-.345 1.21-.572.683-.428 1.33-.574 2.184-.303 1.243.39 2.005 1.274 2.418 2.401z" />
      <path
        d="M1.217 9.86l.934.274 1.071-.055.77-.522.825-.742.604-.825.77-.797.741-.467 1.016-.22-.687 1.209-.577.576-1.209 1.676-.549.825-.632.44-.907.604s-.797.165-.879.192c-.081.028-.741.138-.741.138l-.577-.028-.44-.137.412-.825.056-.604v-.714l-.001.002z"
        fillOpacity=".5"
      />
      <path
        d="M3.607 5.108l-.083.63-.22.441-.274.412-.688.412.825.412.907.357.934.193.412.028.99-.688 1.043-.934-.357-.11-1.29-.137-.963-.358-.687-.356-.55-.302z"
        fillOpacity=".5"
      />
      <path d="M1.521 12.399c-.29 0-.596-.018-.917-.051L0 12.278l.298-.19.159-.173c.022-.033.085-.144.19-.377v-.002c.17-.365.228-.975.177-1.813l-.036-.564.435.36c.454.376 1.024.466 1.74.272.64-.182 1.337-.78 2.068-1.774.673-.968 1.64-1.624 2.88-1.952l.116-.031.783.61-.704-.05a2.182 2.182 0 00-.191.206l-.014.017-.018.016c-.404.718-.982 1.426-1.56 2.201l-.008.014c-.089.156-.18.317-.279.477v.009l-.032.051c-.592.962-1.243 1.683-1.935 2.145-.635.445-1.49.67-2.548.67v-.001zm-.5-.505c1.194.077 2.124-.112 2.77-.567l.005-.003c.626-.417 1.223-1.078 1.773-1.964a.244.244 0 01.041-.074c.098-.159.19-.321.28-.48v-.001c.392-.75.842-1.417 1.343-1.988-.748.33-1.341.82-1.8 1.481l-.004.006c-.808 1.101-1.572 1.742-2.333 1.958-.673.182-1.263.15-1.764-.095.01.69-.068 1.207-.237 1.573-.026.058-.05.108-.072.153h-.002z" />
      <path d="M1.577 12.399c-.29 0-.596-.018-.917-.051l.05-.486c1.371.145 2.425-.035 3.136-.535l.006-.003c.626-.417 1.222-1.078 1.772-1.963a.277.277 0 01.079-.116l.32.37a.22.22 0 00.072-.141l-.005.058-.03.052c-.592.962-1.243 1.683-1.935 2.145-.636.445-1.49.67-2.548.67zM5.751 7.717a9.381 9.381 0 01-.311.016c-.823.029-1.7-.2-2.615-.682.792-.512 1.013-1.096.982-1.621.189.15.386.281.591.393 1.345.758 2.766.878 5.195.198l-.165-.46c-2.308.637-3.558.532-4.793-.165a3.803 3.803 0 01-.967-.759l-.033-.036-.5-.542.094.697c.014.058.3 1.417-1.01 2.08l-.398.201.383.228c1.073.638 2.114.96 3.094.96l.453-.507v-.001zM11.93 15.21a.405.405 0 01-.366-.253c-.326-.745-.582-1.055-.969-1.525-.39-.474-1.223-1.277-1.36-1.393-.184-.156-.236-.368-.126-.515.055-.072.219-.219.556.005.683.452 2.198 1.812 2.608 2.904.15.397 0 .667-.201.749a.367.367 0 01-.143.028h.001zM14.877 15.23a.37.37 0 01-.146-.03c-.201-.085-.346-.357-.192-.752.424-1.086 1.957-2.427 2.645-2.87.34-.22.502-.072.556.002.109.147.054.358-.131.512-.139.115-.982.905-1.379 1.376-.392.465-.651.772-.988 1.513a.404.404 0 01-.364.25v-.002z" />
      <path
        d="M16.382 3.316c.01-.566-.265-1.054-.827-1.462-.57-.4-1.252-.602-2.045-.608-.792-.006-1.471.189-2.031.587-.563.401-.85.884-.857 1.445.002.176.017.336.04.486 2.1-.676 3.981-.62 5.64.167.045-.21.072-.414.08-.616v.001z"
        fillOpacity=".5"
      />
      <path d="M7.6 14.716l-.01-.024a1.824 1.824 0 01-.072-.192l-.059-.189-.388.013-.03.326c.002.013.009.044.016.1v.011c.003.02.004.036.008.052a.555.555 0 01-.164.431c-.112.12-.258.172-.45.164-.24-.01-.32-.105-.358-.176-.105-.19-.112-.291-.107-.336.015-.123.04-.254.077-.385.055-.206.013-.444-.126-.708l-.143-.272a1.787 1.787 0 01-.14-.384.974.974 0 01.022-.458.641.641 0 01.264-.374.695.695 0 01.496-.1l.015.002h.015c.192 0 .349.02.469.051a2.208 2.208 0 01-.027-.58 1.5 1.5 0 00-.38-.107H6.52l-.095-.008a1.369 1.369 0 00-.826.189c-.272.16-.456.394-.544.7a1.691 1.691 0 00-.03.815c.008.041.017.09.033.136.043.135.113.285.21.446.148.243.193.323.205.35l.005.009c.018.033.022.084.01.15l-.005.023a7.4 7.4 0 01-.034.172c-.115.298-.127.574-.036.815a.964.964 0 00.486.558c.134.066.288.108.46.125.094.01.192.01.294.005a.957.957 0 00.784-.454 1.13 1.13 0 00.17-.87l-.004-.026H7.6zM21.925 12.059a1.165 1.165 0 00-.556-.697h-.001a1.325 1.325 0 00-.797-.175l-.031.003-.093.011h-.008a1.553 1.553 0 00-.528.197 1.959 1.959 0 01-.016.563l.1-.04c.128-.053.302-.095.532-.13l.013-.002a.567.567 0 01.474.103c.155.113.26.254.32.428.05.164.057.305.022.43a2.77 2.77 0 01-.144.41 9.169 9.169 0 01-.191.383.908.908 0 00-.102.57c.024.176.05.322.078.446a.608.608 0 01-.036.329l-.003.006c-.037.117-.235.18-.35.208-.263.063-.381-.033-.451-.12a.78.78 0 01-.173-.51l.004-.053a.806.806 0 01.014-.093l-.008-.337-.431.01-.046.185a1.285 1.285 0 01-.064.188l-.011.027-.005.029c-.05.307.013.598.187.868l.004.006c.19.274.463.426.787.437.087.005.17.002.25-.004.192-.018.363-.069.509-.15a.992.992 0 00.459-.567c.085-.252.068-.527-.05-.816l-.03-.171-.002-.013a.306.306 0 01.015-.18c.045-.108.106-.233.181-.375.098-.173.162-.32.196-.444a.665.665 0 00.033-.152 1.75 1.75 0 00-.053-.806l.002-.002zM16.59 3.853c.033-.185.053-.359.06-.533.012-.648-.301-1.209-.93-1.667-.609-.427-1.344-.646-2.184-.653-.843-.008-1.575.207-2.176.633-.628.45-.951 1.002-.96 1.643v.006c.002.128.01.256.026.39a.38.38 0 00-.095.23v.01c0 .216.032.433.097.643l.001.006c.09.265.245.518.46.75l.063.068.567.063c.485.282 1.132.433 1.928.447h.103c.587 0 1.1-.072 1.527-.213l.011-.004c.16-.063.316-.138.465-.224.452.043.791-.18.965-.633l.043-.046-.002-.065c.067-.205.184-.608.03-.851h.001zM11.643 2.03c.514-.365 1.149-.547 1.888-.542.74.006 1.38.196 1.903.562.497.361.735.774.727 1.255-.004.089-.01.18-.023.274a6.882 6.882 0 00-2.685-.527c-.816 0-1.67.13-2.558.39a4.038 4.038 0 01-.006-.165c.006-.482.253-.89.754-1.247zm4.513 2.293l-.165.357s-.215.311-.45.272l-.092-.015-.078.049a2.724 2.724 0 01-.454.226c-.397.13-.89.192-1.462.184-.708-.014-1.276-.14-1.688-.38l-.037-.021-.048-.03-.491-.054c-.094-.11-.226-.34-.226-.34l-.135-.392-.008-.204c1.988-.626 3.79-.574 5.355.155.002.029-.02.193-.02.193zm.147.364v-.004l.003.004h-.003z" />
    </svg>
  );
});

export default Icon;
