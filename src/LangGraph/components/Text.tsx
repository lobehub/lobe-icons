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
      viewBox="0 0 137 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M75.843 1.506C74.48.506 72.598 0 70.254 0c-1.69 0-3.229.368-4.573 1.092a7.992 7.992 0 00-3.192 3.142c-.776 1.361-1.168 3.024-1.168 4.944 0 1.465.232 2.783.691 3.917.457 1.131 1.103 2.1 1.915 2.879a8.292 8.292 0 002.848 1.778 9.92 9.92 0 003.482.604c1.84 0 3.441-.37 4.76-1.099a7.645 7.645 0 003.053-3.036c.708-1.287 1.067-2.78 1.067-4.438 0-.048-.005-.2-.013-.455a8.398 8.398 0 00-.029-.497h-6.654v2.162h3.417l-.015.099c-.162 1.027-.482 1.897-.95 2.585a4.413 4.413 0 01-1.833 1.55c-.743.338-1.626.505-2.6.496-1.308-.016-2.415-.299-3.288-.841a5.053 5.053 0 01-1.97-2.282c-.432-.966-.65-2.118-.65-3.424s.221-2.465.655-3.443c.44-.982 1.1-1.757 1.97-2.3.87-.542 1.977-.809 3.282-.793 1.301 0 2.39.324 3.232.964.823.623 1.426 1.462 1.8 2.495l3.115-.455c-.49-1.764-1.419-3.158-2.763-4.142v.004zM116.276 5.28c-1.005-.614-2.189-.92-3.556-.92-1.366 0-2.528.306-3.461.92a5.715 5.715 0 00-.541.407v-.956h-2.853V24h3.254v-6.607c.058.041.115.083.175.122.955.618 2.137.927 3.548.927 1.33 0 2.492-.309 3.482-.927a6.314 6.314 0 002.304-2.52c.544-1.063.818-2.261.818-3.595s-.277-2.555-.83-3.613a6.308 6.308 0 00-2.337-2.507h-.003zm-.643 8.34c-.264.661-.668 1.188-1.212 1.574-.544.387-1.237.58-2.077.58-.841 0-1.566-.184-2.098-.55-.531-.365-.92-.878-1.164-1.538-.247-.658-.369-1.421-.369-2.286s.122-1.638.369-2.29c.244-.656.628-1.167 1.145-1.532.518-.366 1.187-.55 2.009-.55.866 0 1.582.195 2.143.586.563.391.977.918 1.247 1.583.266.662.401 1.398.401 2.205 0 .807-.132 1.555-.394 2.217zM134.421 9.369a7.715 7.715 0 00-.381-1.638 5.383 5.383 0 00-.911-1.63c-.411-.51-.965-.931-1.66-1.26-.696-.33-1.582-.495-2.651-.495-1.357 0-2.502.274-3.429.821-.499.295-.93.644-1.3 1.047V.283h-2.88v17.786h3.27v-6.856c0-.814.097-1.483.294-2.007.197-.522.456-.934.783-1.235a2.836 2.836 0 011.092-.637 4.11 4.11 0 011.22-.187c.768 0 1.376.152 1.827.458.452.306.791.695 1.018 1.168.227.474.371.966.436 1.477.063.51.095.975.095 1.396v6.423h3.269V10.62c0-.322-.03-.738-.087-1.253l-.005.002zM88.703 4.848c-.444.027-.88.106-1.302.23a4.746 4.746 0 00-1.154.51 3.712 3.712 0 00-1.05.883 4.545 4.545 0 00-.359.511l-.12.195V4.903h-2.69v13.058h3.074v-6.64c0-.505.067-.986.2-1.425.134-.44.344-.84.625-1.185.282-.347.651-.634 1.1-.857a3.662 3.662 0 011.514-.435c.521-.04.992-.007 1.404.092V4.894a6.017 6.017 0 00-1.242-.046zM2 .25v17.747h13.254v-2.681H5.01V.25H2zM22.322 4.462c-2.888 0-5.05 1.248-5.928 3.426l-.225.559 2.477 1.476.336-.81c.574-1.379 1.636-2.02 3.34-2.02 1.703 0 2.678.76 2.66 2.262 0 .062-.005.246-.005.246s-2.254.338-3.182.518c-3.962.773-5.623 2.166-5.623 4.45 0 1.216.733 2.532 2.07 3.27.803.444 1.85.61 3.005.61.76 0 1.498-.104 2.184-.297 1.556-.476 1.988-1.412 1.988-1.412v1.223h2.576V9.21c0-2.975-2.12-4.75-5.67-4.75l-.003.002zm2.668 9.341c0 .92-1.087 2.215-3.619 2.215-.713 0-1.221-.175-1.558-.435a1.367 1.367 0 01-.539-1.288c.028-.19.152-.605.619-.963.476-.368 1.316-.628 2.616-.89a98.96 98.96 0 012.48-.451v1.812zM97.718 4.462c-2.888 0-5.05 1.248-5.928 3.426l-.224.559 2.476 1.476.337-.81c.573-1.379 1.636-2.02 3.34-2.02 1.702 0 2.677.76 2.66 2.262 0 .062-.005.246-.005.246s-2.255.338-3.182.518c-3.963.773-5.624 2.166-5.624 4.45 0 1.216.733 2.532 2.07 3.27.803.444 1.85.61 3.005.61.761 0 1.5-.104 2.184-.297 1.557-.476 1.988-1.412 1.988-1.412v1.223h2.576V9.21c0-2.975-2.12-4.75-5.67-4.75l-.003.002zm2.668 9.341c0 .92-1.087 2.215-3.618 2.215-.714 0-1.222-.175-1.559-.435a1.368 1.368 0 01-.539-1.288c.028-.19.153-.605.62-.963.475-.368 1.316-.628 2.615-.89 1.07-.214 2.481-.451 2.481-.451v1.812zM37.511 4.462c-.359 0-.708.022-1.045.066-2.307.32-2.982 1.4-2.982 1.4v-1.08h-2.886V17.97h3.01v-7.278c0-2.473 1.955-3.6 3.773-3.6 1.965 0 2.921.975 2.921 2.978v7.898h3.01v-8.28c0-3.226-2.222-5.229-5.8-5.229v.003zM55.87 4.839V6.19s-.738-1.73-4.092-1.73c-4.167 0-6.758 2.654-6.758 6.923 0 2.41.835 4.307 2.31 5.505 1.144.932 2.675 1.41 4.5 1.442 1.267.023 2.09-.297 2.601-.598.985-.577 1.35-1.127 1.35-1.127s-.043.43-.118 1.012c-.055.421-.157.718-.157.718-.459 1.504-1.798 2.373-3.753 2.373s-3.14-.593-3.374-1.762l-2.925.805c.506 2.247 2.793 3.59 6.117 3.59 2.26 0 4.032-.566 5.267-1.685 1.244-1.127 1.877-2.753 1.877-4.832V4.839H55.87zm-.189 6.666c0 2.627-1.392 4.195-3.72 4.195-2.497 0-3.929-1.573-3.929-4.314s1.432-4.291 3.928-4.291c2.274 0 3.701 1.561 3.721 4.075v.335z" />
    </svg>
  );
});

export default Icon;
