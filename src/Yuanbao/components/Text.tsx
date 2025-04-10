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
      viewBox="0 0 92 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M89.215 4.058c.354 0 .62.051.796.154.177.089.28.236.31.443.03.206.03.428 0 .664l-.487 3.85h-2.588l.398-2.921c.015-.074 0-.133-.044-.177a.21.21 0 00-.177-.089H74.237l-.465 3.186h-2.589l.775-5.11h7.81A32.07 32.07 0 0179.325 2h2.633l.487 2.058h6.77zm-8.297 10.885l-.641 4.823h8.296l-.265 1.925h-19.05l.244-1.925h8.208l.642-4.823H72.09l.287-1.903h6.24l.42-3.142h-4.801l.243-1.902h12.346l-.266 1.902h-4.956l-.42 3.142h6.239l-.288 1.903h-6.217zm2.832 4.27c-.118-.34-.273-.797-.464-1.372a39.816 39.816 0 01-.62-2.345h2.456c.103.354.236.804.398 1.35.177.53.48 1.32.907 2.367H83.75zM66.891 3.15l-.332 2.036H51.47l.332-2.036h15.09zm.288 8.01h-4.89l-1.194 8.628h5.907l-.774 2.124h-8.164l1.593-10.752H56.58a21.26 21.26 0 01-1.15 4.026 15.79 15.79 0 01-1.925 3.451c-.767 1.063-1.807 2.154-3.12 3.275h-3.783c1.21-.93 2.183-1.763 2.92-2.5a15.07 15.07 0 001.97-2.301c.575-.811 1.069-1.711 1.482-2.7.413-.987.73-2.072.951-3.252h-4.978l.31-2.035h18.23l-.31 2.035zM32.134 6.822h-2.412l-.819-4.646h2.301l.93 4.646zM43.86 2.375c.649 0 1.062.111 1.239.332.191.222.236.612.132 1.173l-2.81 15.797h2.744l-.797 2.057H39.59c.324-1.8.693-3.901 1.106-6.305.428-2.42.649-3.688.663-3.806h-3.54l-1.77 10.111h-2.433l1.77-10.11h-3.031l.376-1.881h2.987l.84-4.735 2.147 1.593-.553 3.142h3.54c.339-2.006.626-3.6.862-4.779.044-.207.03-.361-.044-.465-.059-.118-.258-.177-.597-.177h-8.164l-.443-1.947H43.86zm-12.434 5.62l-1.682 9.447c.457-.34 1.43-1.099 2.92-2.279l-.53 2.877a46.925 46.925 0 01-2.766 2.035A65.854 65.854 0 0126.403 22l2.235-12.058h-2.279l.332-1.947h4.735zM20.142 9.566c.266.472.767.922 1.505 1.35.752.412 1.467.7 2.146.862l-.576 1.947a8.994 8.994 0 01-1.283-.376 9.385 9.385 0 01-1.504-.796l-.531 2.345h1.084c.546 0 .885.096 1.017.288.148.191.192.45.133.774-.133.87-.302 1.858-.509 2.965a661.593 661.593 0 01-.53 2.986h-5.996l-.399-1.792h4.293l.62-3.03c.058-.296-.067-.443-.377-.443h-7.544l.707-3.629a16.62 16.62 0 01-.796.31c-.383.148-.833.28-1.35.398l.465-2.212a9.915 9.915 0 002.058-.797c.663-.354 1.216-.737 1.659-1.15h-3.34l.353-1.726h4.16c.162-.28.317-.62.464-1.018h-4.447l.354-1.77h1.527l-.531-2.654h2.323c.088.486.265 1.371.53 2.655h.797c.192-.885.325-1.896.399-3.032h2.345c-.074 1.195-.207 2.206-.398 3.032h.862c.354-.738.701-1.623 1.04-2.655h2.323c-.162.457-.339.914-.53 1.371-.192.443-.392.87-.598 1.284h1.637l-.42 1.77h-4.845c-.015.073-.148.412-.399 1.017h5.93l-.42 1.726h-3.408zm-9.978-6.97c.442 0 .774.045.995.133.222.089.354.236.399.443a1.9 1.9 0 010 .708L8.35 21.91H6.093l1.305-6.925H5.894c-.089.472-.28 1.343-.575 2.611a82.428 82.428 0 01-1.107 4.314H2a71.505 71.505 0 001.77-7.057L5.96 2.597h4.204zm-.885 2.302c.03-.163.007-.273-.066-.332-.06-.06-.17-.089-.332-.089H7.774L7.177 7.84h1.549l.553-2.942zm8.562 4.668h-.819a8.087 8.087 0 01-1.57 1.615h3.429a7.028 7.028 0 01-.575-.774 6.109 6.109 0 01-.465-.841zm-10.11 3.606l.663-3.54H6.845l-.62 3.54H7.73zm6.614 1.726h3.275l.442-2.035H13.55l1.04.707-.244 1.328zm3.939 2.633l-.399 1.726h-7.633l-.31-1.726h8.342z" />
    </svg>
  );
});

export default Icon;
