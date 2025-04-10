'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 81 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M23 8.333h-7.333v7.334H23V8.333z" fill="#06FDB7" />
      <path d="M1 1v14.667h7.333V8.333h7.334V1H1z" fill="#5B2AD8" />
      <path
        d="M14.038 4.333h.17l1.459 1.456v.17l-1.63-1.626zM13.224 4.333h.17l2.273 2.268v.17l-2.443-2.438zM12.41 4.333h.17l3.087 3.08v.17l-3.257-3.25zM11.596 4.333h.17l3.9 3.892v.108h-.06l-4.01-4zM10.782 4.333h.17l4.01 4h-.17l-4.01-4zM9.968 4.333h.17l4.009 4h-.17l-4.01-4zM9.154 4.333h.17l4.009 4h-.17l-4.01-4zM8.34 4.333h.17l4.01 4h-.17l-4.01-4zM7.521 4.333h.17l4.01 4h-.17l-4.01-4zM6.707 4.333h.17l4.01 4h-.17l-4.01-4zM5.892 4.333h.17l4.009 4h-.17l-4.01-4zM5.077 4.333h.17l4.01 4h-.17l-4.01-4zM4.333 4.403v-.07h.1l4.01 4h-.11v.06l-4-3.99zM4.333 5.215v-.17l4 3.991v.17l-4-3.99zM4.333 6.027v-.17l4 3.991v.17l-4-3.99zM4.333 6.84v-.17l4 3.99v.17l-4-3.99zM4.333 7.652v-.17l4 3.99v.17l-4-3.99zM4.333 8.464v-.17l4 3.99v.17l-4-3.99zM4.333 9.276v-.17l4 3.991v.17l-4-3.991zM4.333 10.088v-.17l4 3.991v.17l-4-3.991zM4.333 10.9v-.17l4 3.991v.17l-4-3.991zM4.333 11.712v-.17l4 3.991v.134h-.036l-3.964-3.955zM4.333 12.526v-.17l3.318 3.31h-.17l-3.148-3.14zM4.333 13.34v-.169l2.502 2.496h-.17L4.333 13.34zM4.333 14.152v-.169l1.688 1.684h-.17l-1.518-1.514zM4.333 14.965v-.17l.874.872h-.17l-.704-.702zM15.667 5.146l-.815-.813h.17l.645.644v.169z"
        fill="#06FDB7"
      />
      <path d="M23 15.667h-7.333V23H23v-7.333z" fill="#5B2AD8" />
      <path d="M15.667 15.667H8.333V23h7.334v-7.333z" fill="#06FDB7" />
      <path
        d="M79.243 5v.77s-.588.119-1.718.149l-1.04.005c.002.43.003 1.041.003 1.727h2.755v.77h-.386v6.386h-1.292V8.421h-1.077c-.003 1.952-.02 4.173-.084 4.625-.185 1.321-.415 1.761-.415 1.761h-1.196s.181-.819.32-1.761c.14-.943.084-7.127.084-7.127h.001l.001-.002v-.77c.622 0 .952.003 1.225.006.192.001.356.003.573.003 1.374 0 2.246-.156 2.246-.156zM30.819 5.015h1.603l.31.916h3.947v.761h-9.677v-.761h4.126l-.31-.916z"
        fill="#5B2AD8"
      />
      <path
        clipRule="evenodd"
        d="M59.633 5.183v9.44h7.177c.44 0 .796-.356.796-.794V5.182h-7.973zm6.507.924V9.44h-5.042V6.107h5.042zm-.222 7.602h-4.82v-3.344h5.042v3.124a.222.222 0 01-.222.222v-.002zM49.8 14.623h7.177c.44 0 .796-.355.796-.794V5.183H49.8v9.44zm6.285-.914h-4.82v-3.344h5.042v3.124a.222.222 0 01-.222.222v-.002zm.222-7.602v3.334h-5.041V6.107h5.041zM28.995 10.922v3.038h5.687v-3.038h-5.687zm4.26 2.276H30.42v-1.514h2.835v1.514z"
        fill="#5B2AD8"
        fillRule="evenodd"
      />
      <path
        d="M34.84 8.396h1.075v.002c.42 0 .761.34.761.762v3.86c0 1.256-.252 1.789-.252 1.789h-1.425s.252-.726.252-1.789V9.16h-.968l.402 1.184H33.08l-.402-1.184h-1.68l-.402 1.184h-1.604l.402-1.184h-.969v5.647H27v-6.41h1.837l-.398-1.173h1.604l.399 1.172h2.794l.399-1.172h1.605l-.4 1.172zM40.56 7.043L39.9 5.102h-1.605l.659 1.94h1.604zM38.462 8.397h1.604l.571 1.687c.058.168.073.345.048.52l-.62 4.203h-1.604l.63-4.283a.785.785 0 00-.031-.366l-.598-1.761zM47.072 8.397h-.607l.726-2.14a.76.76 0 00-.721-1.003h-4.98v.761h4.18l-.808 2.382H41.49v.761h4.918v3.86c0 1.063-.253 1.79-.253 1.79h1.425s.253-.534.253-1.79v-3.86a.761.761 0 00-.762-.761z"
        fill="#5B2AD8"
      />
      <path
        d="M41.713 12.789l.396-2.681h1.472s-.28 1.851-.395 2.68c-.183 1.309-.548 1.79-.548 1.79h-1.38s.318-.855.455-1.79zM43.954 12.789c-.137.934-.455 1.788-.455 1.788h1.38s.364-.48.547-1.788c.116-.83.396-2.681.396-2.681h-1.473l-.395 2.68zM69.757 13.222c.108-.953.1-2.527.1-2.527h1.006s-.01 1.679-.1 2.527c-.143 1.337-.314 1.586-.314 1.586h-.935s.136-.632.243-1.586zM74.263 10.695s-.008 1.574.101 2.527a17.8 17.8 0 00.242 1.586h-.935s-.171-.249-.313-1.586c-.09-.848-.1-2.527-.1-2.527h1.005z"
        fill="#5B2AD8"
      />
      <path
        d="M71.525 8.151l-.402-1.186h-1.352l.402 1.186h-.552v.77h1.805v.55h-1.805v.77h1.805v4.567h1.264V10.24h1.807v-.77H72.69v-.55h1.807v-.77h-.557l.402-1.186H72.99l-.402 1.186h-1.063zM69.621 5.61h1.627l-.201-.595h1.336l.201.594h1.913v.77H69.62v-.77zM27.1 21.766c.494.672 1.33 1.041 2.355 1.041l-.002.002c1.338 0 2.216-.643 2.234-1.64 0-1.355-1.307-1.545-2.213-1.677h-.002c-.723-.107-1.173-.246-1.18-.618a.398.398 0 01.12-.301c.178-.181.544-.288.985-.288.506-.01.945.066 1.362.447l.151.137.658-.741-.146-.134c-.529-.486-1.182-.723-1.996-.723-.745.01-1.38.21-1.773.6-.278.274-.424.629-.424 1.032.014 1.264 1.335 1.459 2.127 1.575.887.124 1.257.244 1.257.68 0 .581-.878.627-1.145.627-.692-.012-1.297-.28-1.622-.718l-.145-.198-.7.764.099.133z"
        fill="#5B2AD8"
      />
      <path
        clipRule="evenodd"
        d="M32.346 20.028c0 1.631 1.135 2.769 2.763 2.77.913 0 1.786-.382 2.28-.994l.12-.15-.753-.668-.132.166c-.282.354-.904.603-1.513.603-.843 0-1.476-.488-1.637-1.234h4.254l.017-.183c.09-.934-.12-1.71-.61-2.25-.474-.522-1.203-.808-2.055-.808-1.584 0-2.734 1.117-2.734 2.748zm4.348-.479h-3.217c.18-.797.769-1.264 1.612-1.264.89 0 1.5.49 1.605 1.264z"
        fill="#5B2AD8"
        fillRule="evenodd"
      />
      <path
        d="M43.722 22.707h-1.086V19.74c0-.914-.5-1.417-1.41-1.417-.82.009-1.42.638-1.42 1.496v2.887h-1.075v-5.337h1.04l.012.494c.404-.374.933-.574 1.533-.574 1.483 0 2.404.934 2.404 2.439v2.978l.002.002zM44.646 21.766c.494.672 1.33 1.041 2.355 1.041h.005c1.338 0 2.215-.643 2.234-1.64 0-1.354-1.307-1.545-2.213-1.677h-.003c-.722-.107-1.172-.245-1.179-.618a.388.388 0 01.117-.301c.179-.181.543-.288.984-.288.516.01.945.066 1.363.447l.15.139.659-.741-.146-.134c-.528-.486-1.183-.723-1.997-.723h-.037c-.718 0-1.349.217-1.736.6-.278.274-.424.629-.424 1.032.012 1.264 1.334 1.459 2.126 1.575.885.122 1.257.244 1.257.68 0 .581-.88.627-1.147.627-.694-.012-1.3-.28-1.623-.718l-.146-.198-.697.764.098.133z"
        fill="#5B2AD8"
      />
      <path
        clipRule="evenodd"
        d="M52.657 22.797c-1.629 0-2.765-1.137-2.765-2.769 0-1.631 1.15-2.748 2.734-2.748.852 0 1.581.286 2.055.807.49.54.7 1.317.608 2.251l-.016.183H51.02c.16.746.793 1.234 1.637 1.234.609 0 1.231-.25 1.513-.603l.134-.168.755.67-.12.15c-.494.612-1.368.993-2.28.993h-.002zm-1.634-3.248h3.216c-.103-.775-.714-1.264-1.604-1.264-.843 0-1.432.467-1.612 1.264z"
        fill="#5B2AD8"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M64.988 22.789c-1.591 0-2.745-1.151-2.745-2.739 0-1.587 1.128-2.768 2.745-2.768 1.617 0 2.745 1.164 2.745 2.768 0 1.605-1.128 2.739-2.745 2.739zm0-4.495c-.984 0-1.67.722-1.67 1.756s.67 1.706 1.67 1.706c1 0 1.67-.67 1.67-1.706 0-1.035-.688-1.756-1.67-1.756z"
        fill="#06FDB7"
        fillRule="evenodd"
      />
      <path
        d="M61.266 22.708h-1.084v-2.969c0-.913-.5-1.416-1.41-1.416-.822.008-1.42.638-1.42 1.496v2.887H56.28v-5.338h1.04l.011.495c.404-.375.933-.574 1.534-.574 1.483 0 2.404.934 2.404 2.438v2.98h-.002zM67.979 17.372l2.251 5.346h1.01l2.252-5.346h-1.18l-1.577 3.87-1.576-3.87h-1.18z"
        fill="#06FDB7"
      />
      <path
        clipRule="evenodd"
        d="M76.457 22.807c-1.58 0-2.725-1.164-2.725-2.769 0-1.604 1.15-2.738 2.735-2.738.675 0 1.306.247 1.74.659v-.59h1.035v5.338h-1.025v-.6c-.454.441-1.087.7-1.76.7zm.03-4.493c-.974 0-1.68.726-1.68 1.726s.706 1.736 1.68 1.736c.532 0 .976-.186 1.284-.534.277-.313.43-.738.43-1.197 0-.832-.537-1.731-1.714-1.731z"
        fill="#06FDB7"
        fillRule="evenodd"
      />
    </svg>
  );
});

export default Icon;
