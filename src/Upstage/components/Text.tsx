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
      viewBox="0 0 87 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M43.583 14.44c0 .731 0 3.44 2.975 3.44a4.13 4.13 0 002.382-.654v-1.72h-.046a3.586 3.586 0 01-1.598.457c-1.141 0-1.415-.822-1.415-2.412V8.612h3.226V6.725h-3.226V2.944h-.046L43.59 4.686v2.04h-1.856v1.886h1.856v5.829h-.007zM66.486 17.454a4.339 4.339 0 002.093-.457 4.42 4.42 0 001.636-1.384v.875c0 2.275-1.378 3.515-3.387 3.515a7.316 7.316 0 01-4.58-1.606h-.046v2.085a7.636 7.636 0 004.802 1.514c3.249 0 5.493-1.97 5.493-5.942V6.725H70.74l-.252 1.864a4.305 4.305 0 00-1.613-1.628 4.196 4.196 0 00-2.222-.533c-2.792 0-5.15 2.177-5.15 5.51 0 3.332 2.29 5.508 4.983 5.508v.008zm.64-9.047c2.061 0 3.21 1.72 3.21 3.508s-1.148 3.56-3.21 3.56c-2.215 0-3.273-1.727-3.273-3.56 0-1.834.982-3.508 3.273-3.508zM11.245 2H6.078l-.525 1.857h5.152L11.245 2zM59.897 10.173c0-2.823-2.313-3.767-4.58-3.736a7.354 7.354 0 00-4.277 1.56l-.068 2.07h.045a6.07 6.07 0 014.147-1.606c1.53 0 2.496.479 2.496 1.552s-.944 1.172-2.61 1.172c-2.519 0-4.801.798-4.801 3.355 0 2.2 1.917 3.401 3.98 3.401a4.203 4.203 0 002.122-.479 4.195 4.195 0 001.59-1.484l.206 1.674h1.765v-7.48h-.015zm-2.123 3.081c0 .396-.091.784-.243 1.15-.16.357-.389.684-.678.95-.289.267-.624.48-.996.609a2.85 2.85 0 01-1.157.167c-1.103 0-2.214-.502-2.214-1.605s1.042-1.606 2.397-1.606c1.354 0 2.381-.144 2.891-.799v1.15-.016zM79.764 6.375c-.761 0-1.515.145-2.214.442a5.582 5.582 0 00-3.074 3.142 5.436 5.436 0 00-.366 2.199c0 3.455 2.39 5.768 5.821 5.768a6.563 6.563 0 004.375-1.583v-1.956h-.046a5.781 5.781 0 01-1.948 1.195 5.864 5.864 0 01-2.266.335c-2.116 0-3.478-1.164-3.478-2.283 0-.662.517-.753 1.18-.753h6.992v-2.268a4.735 4.735 0 00-1.651-3.081 4.88 4.88 0 00-3.333-1.15l.008-.007zm-1.69 4.824a2.621 2.621 0 00-1.689.502c.137-1.947 1.187-3.317 3.173-3.317a2.82 2.82 0 012.085.776c.274.259.487.578.624.936.145.35.213.73.198 1.103h-4.39zM27.323 6.352a4.746 4.746 0 00-1.933.464 4.642 4.642 0 00-1.567 1.225l.616-2.138h-4.954l-.54 1.872h2.572l-1.567 5.463c-2.511 1.43-3.592 1.903-4.132 1.903-.54 0-.723-.305-.54-.921l2.35-8.317h-2.35l-1.796 6.247c-2.016 2.169-3.036 2.99-4.109 2.99S7.92 14.297 8.3 12.943l1.963-7.039H2.525L2 7.768h5.478-.076l-1.529 5.394c-.662 2.306.365 4.018 2.32 4.018 1.477 0 2.8-.944 4.84-3.424l-.053.205c-.563 2.047.205 3.219 2.092 3.219.92 0 2.017-.365 4.193-1.545l-1.819 6.354h2.374l2.146-7.488c.198.86.64 1.636 1.27 2.253l.214.19.053.046.122.09c.73.518 1.605.785 2.495.77 3.204 0 5.631-2.71 5.631-6.293 0-3.059-1.758-5.212-4.436-5.212l.008.007zm-1.4 9.527c-1.644 0-2.839-1.172-2.839-3.173 0-2.313 1.576-4.383 3.66-4.383 1.667 0 2.77 1.255 2.77 3.211 0 2.45-1.53 4.337-3.584 4.337l-.007.008zM40.958 14.555c0-2.184-1.986-2.846-3.63-3.371-1.179-.373-2.183-.7-2.183-1.499 0-.799.76-1.309 2.008-1.309 1.142 0 2.245.365 3.166 1.035h.045V7.448a6.256 6.256 0 00-3.317-.959c-2.42 0-4.018 1.309-4.018 3.356 0 2.047 1.85 2.693 3.455 3.21 1.232.404 2.328.754 2.328 1.705 0 .83-.844 1.355-2.153 1.355a6.508 6.508 0 01-3.729-1.355h-.076v1.963a7.615 7.615 0 004.048 1.187c2.268 0 4.056-1.172 4.056-3.355z"></path>
    </svg>
  );
});

export default Icon;