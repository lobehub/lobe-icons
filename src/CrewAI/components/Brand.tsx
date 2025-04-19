'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 76 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M74.42 4.916v.004c-.35 1.4-1.353 2.415-2.074 3.055l-.018.016c-.112.097-.23.189-.353.273.053.11.099.222.134.338l.006.021c.138.461.172.947.103 1.424a11.454 11.454 0 01-.642 2.327c-.13.365-.254.71-.35 1.05-.261.908-.56 1.982-.8 3.08a8.92 8.92 0 00-.179 2.438 2.052 2.052 0 01-.879 1.866 6.622 6.622 0 01-1.922 1.03c-1.142.348-1.94.045-2.407-.271a2.191 2.191 0 01-.22-.169c-.577.362-1.222.6-1.896.698-.27.04-.541.061-.813.063a3.746 3.746 0 01-2.834-1.176 3.868 3.868 0 01-.27-.316c-.253.182-.52.346-.797.489a4.173 4.173 0 01-2.553.442 3.842 3.842 0 01-2.015-.848 3.752 3.752 0 01-1.222-2.26 5.388 5.388 0 01-.083-.657c-.39.557-.811 1.079-1.217 1.57a8.184 8.184 0 01-2.793 2.26 5.048 5.048 0 01-3.627.311 6.452 6.452 0 01-1.88-.797 3.837 3.837 0 01-.824-.724c-.237.245-.474.47-.7.687-.138.132-.278.264-.414.398a2.231 2.231 0 01-1.612.644c-.158 0-.316-.013-.473-.039a7.894 7.894 0 01-2.002-.574l-.02-.01a3.771 3.771 0 01-1.594-1.338 8.97 8.97 0 01-1.963 1.22 6.73 6.73 0 01-2.224.634c-.68.076-1.364.103-2.047.08a6.28 6.28 0 01-3.214-1.024 4.922 4.922 0 01-2.008-2.885c-.005-.025-.013-.05-.019-.075-.33.152-.676.265-1.032.335a4.93 4.93 0 01-2.783-.196 2.953 2.953 0 01-1.849-2.182 30.83 30.83 0 00-1.979 3.235c-.062.115-.124.255-.192.4a7.633 7.633 0 01-.457.886 3.226 3.226 0 01-2.838 1.564h-.01a3.707 3.707 0 01-1.75-.382 2.653 2.653 0 01-.18-.105 7.792 7.792 0 01-.254.124 7.506 7.506 0 01-2.489.75l-.14.016c-.358.035-.752.074-1.167.074-.118 0-.239-.004-.359-.01a5.62 5.62 0 01-3.274-1.227 5.244 5.244 0 01-1.824-3.042 7.06 7.06 0 01-.075-2.456c.174-1.19.56-2.338 1.138-3.392.441-.842.967-1.637 1.57-2.373a9.932 9.932 0 012.304-2.052 6.44 6.44 0 012.32-.933c1.127-.21 2.21.06 3.317.826A5.45 5.45 0 0113.155 9.5c.756-1.057 1.703-1.668 2.814-1.812a2.807 2.807 0 012.879 1.36 6.9 6.9 0 011.009-.574 5.043 5.043 0 012.378-.518c1.27.056 2.236.477 2.95 1.288.284.323.5.7.634 1.11.286-.347.599-.67.935-.967a6.409 6.409 0 013.216-1.606 6.049 6.049 0 011.333-.042l.281.01a5.062 5.062 0 011.944.469 4.254 4.254 0 011.891 1.596c.097-.16.202-.32.312-.473.66-.914 1.486-1.453 2.456-1.604a3.174 3.174 0 012.477.568 2.713 2.713 0 01.972 2.793c-.037.175-.076.351-.115.526.158-.336.319-.675.487-1.01.509-1.025 1.18-1.725 2.05-2.138a3.271 3.271 0 013.362.267c.439.3.976.883 1.05 1.97a5.179 5.179 0 01-.297 1.927l-.13.423.081-.186c.165-.376.332-.753.501-1.125.516-1.145 1.045-2.314 2.46-3.189a4.97 4.97 0 01.996-.497c1.096-.372 3.358-.28 4.157 1.17a5.82 5.82 0 011.428-.96 5.123 5.123 0 012.283-.534l.074.002a5.899 5.899 0 011.79.227c.374.115.723.299 1.03.542.87-.309 1.977-.29 2.793.353.161.128.305.278.427.444.248-.39.53-.759.842-1.1.35-.39.772-.707 1.243-.935a6.369 6.369 0 01-.39-1.3 7.3 7.3 0 01-.155-1.292V4.65a3.776 3.776 0 01.693-2.282A3.238 3.238 0 0170.868.984a4.07 4.07 0 012.073.452 3.05 3.05 0 011.478 3.48z"
        stroke="#fff"
        strokeWidth="1.959"
      />
      <path
        d="M74.42 4.916v.004c-.35 1.4-1.353 2.415-2.074 3.055l-.018.016c-.112.097-.23.189-.353.273.053.11.099.222.134.338l.006.021c.138.461.172.947.103 1.424a11.454 11.454 0 01-.642 2.327c-.13.365-.254.71-.35 1.05-.261.908-.56 1.982-.8 3.08a8.92 8.92 0 00-.179 2.438 2.052 2.052 0 01-.879 1.866 6.624 6.624 0 01-1.922 1.03c-1.142.348-1.94.045-2.407-.271a2.191 2.191 0 01-.22-.169c-.577.362-1.222.6-1.896.698-.27.04-.541.061-.813.063a3.746 3.746 0 01-2.834-1.176 3.868 3.868 0 01-.27-.316c-.253.182-.52.346-.797.489a4.173 4.173 0 01-2.553.442 3.842 3.842 0 01-2.015-.848 3.752 3.752 0 01-1.222-2.26 5.388 5.388 0 01-.083-.657c-.39.557-.811 1.079-1.217 1.57a8.184 8.184 0 01-2.793 2.26 5.048 5.048 0 01-3.627.311 6.452 6.452 0 01-1.88-.797 3.837 3.837 0 01-.824-.724c-.237.245-.474.47-.7.687-.138.132-.278.264-.414.398a2.231 2.231 0 01-1.612.644c-.158 0-.316-.013-.473-.039a7.894 7.894 0 01-2.002-.574l-.02-.01a3.771 3.771 0 01-1.594-1.338 8.97 8.97 0 01-1.963 1.22 6.73 6.73 0 01-2.224.634c-.68.076-1.364.103-2.047.08a6.28 6.28 0 01-3.214-1.024 4.922 4.922 0 01-2.008-2.885c-.005-.025-.013-.05-.019-.075-.33.152-.676.265-1.032.335a4.93 4.93 0 01-2.783-.196 2.953 2.953 0 01-1.849-2.182 30.83 30.83 0 00-1.979 3.235c-.062.115-.124.255-.192.4a7.624 7.624 0 01-.457.886 3.226 3.226 0 01-2.838 1.564h-.01a3.707 3.707 0 01-1.75-.382 2.653 2.653 0 01-.18-.105 7.792 7.792 0 01-.254.124 7.506 7.506 0 01-2.489.75l-.14.016c-.358.035-.752.074-1.167.074-.118 0-.239-.004-.359-.01a5.62 5.62 0 01-3.274-1.227 5.244 5.244 0 01-1.824-3.042 7.06 7.06 0 01-.075-2.456c.174-1.19.56-2.338 1.138-3.392.441-.842.967-1.637 1.57-2.373a9.932 9.932 0 012.304-2.052 6.44 6.44 0 012.32-.933c1.127-.21 2.21.06 3.317.826A5.45 5.45 0 0113.155 9.5c.756-1.057 1.703-1.668 2.814-1.812a2.807 2.807 0 012.879 1.36 6.9 6.9 0 011.009-.574 5.044 5.044 0 012.378-.518c1.27.056 2.236.477 2.95 1.288.284.323.5.7.634 1.11.286-.347.599-.67.935-.967a6.409 6.409 0 013.216-1.606 6.05 6.05 0 011.333-.042l.281.01a5.062 5.062 0 011.944.469 4.254 4.254 0 011.891 1.596c.097-.16.202-.32.312-.473.66-.914 1.486-1.453 2.456-1.604a3.174 3.174 0 012.477.568 2.713 2.713 0 01.972 2.793c-.037.175-.076.351-.115.526.158-.336.319-.675.487-1.01.509-1.025 1.18-1.725 2.05-2.138a3.271 3.271 0 013.362.267c.439.3.976.883 1.05 1.97a5.179 5.179 0 01-.297 1.927l-.13.423.081-.186c.165-.376.332-.753.501-1.125.516-1.145 1.045-2.314 2.46-3.189a4.97 4.97 0 01.996-.497c1.096-.372 3.358-.28 4.157 1.17a5.82 5.82 0 011.428-.96 5.123 5.123 0 012.283-.534l.074.002a5.899 5.899 0 011.79.227c.374.115.723.299 1.03.542.87-.309 1.977-.29 2.793.353.161.128.305.278.427.444.248-.39.53-.759.842-1.1.35-.39.772-.707 1.243-.935a6.369 6.369 0 01-.39-1.3 7.3 7.3 0 01-.155-1.292V4.65a3.776 3.776 0 01.693-2.282A3.238 3.238 0 0170.868.984a4.07 4.07 0 012.073.452 3.05 3.05 0 011.478 3.48z"
        fill="#000"
      />
      <path
        d="M73.005 4.568c-.233.933-.927 1.699-1.628 2.32a3.221 3.221 0 01-.83.517c-.364.161-.609.059-.828-.27a4.017 4.017 0 01-.538-1.45 5.74 5.74 0 01-.126-1.042 2.335 2.335 0 01.417-1.424 1.792 1.792 0 011.448-.78c.464-.025.928.073 1.342.286.665.345.918 1.138.743 1.843zM70.72 9.039c-.153-.487-.601-.574-1.034-.615-.71-.064-1.266.293-1.715.776a7.47 7.47 0 00-.96 1.35c-.562.973-.904 2.047-1.232 3.114-.213.693-.4 1.303-.665 2.204-.158.532-.335 1.353-.828 1.768a.68.68 0 01-.452.18c-.206-.029-.28-.246-.289-.448a6.917 6.917 0 01-.002-.669c.056-.684.2-1.358.425-2.006.33-1.066.685-2.126 1.004-3.196.137-.37.144-.775.018-1.149a.85.85 0 00-.252-.337c-.444-.35-1.25-.291-1.736.033-.161.11-.32.225-.489.341-.037-.06-.066-.103-.093-.15a1.782 1.782 0 00-1.05-.878 4.887 4.887 0 00-1.44-.159 3.706 3.706 0 00-1.644.394 5.184 5.184 0 00-1.98 1.761c-.55.75-1.04 1.544-1.462 2.372-.44.834-.762 1.725-.953 2.648-.065.338-.104.68-.116 1.024-.004.279.022.557.075.83.07.544.33 1.046.733 1.416.369.293.814.472 1.283.517a2.707 2.707 0 001.668-.291 5.33 5.33 0 001.472-1.143c.177-.19.363-.372.565-.582.023.122.04.2.052.278.072.58.32 1.124.708 1.561.655.69 1.495.805 2.38.675a3.486 3.486 0 001.367-.512c.216-.138.85-.882 1.099-.689.304.237.335.676.675.905a1.367 1.367 0 001.171.086 5.375 5.375 0 001.501-.824.615.615 0 00.27-.607c-.057-.947.013-1.897.21-2.825.234-1.064.522-2.118.822-3.165.303-1.067.801-2.077.953-3.189a1.86 1.86 0 00-.059-.8zm-9.786 3.352a8.749 8.749 0 01-1.76 3.544 4.608 4.608 0 01-1.054 1.016c-.24.16-.472.218-.604-.077a.828.828 0 01-.068-.256c-.052-.507.198-1.034.371-1.496.19-.52.403-1.029.638-1.527.34-.72.737-1.41 1.358-1.928.203-.153.429-.273.669-.357.165-.066.359.082.434.264.091.264.096.55.016.817zM24.547 15.085c-.345 1.073-1.033 1.77-2.162 1.996a3.478 3.478 0 01-1.975-.128 1.528 1.528 0 01-.982-1.389c-.046-.809.278-1.507.654-2.19.157-.283.32-.564.45-.86.056-.15.077-.308.062-.466a.35.35 0 00-.479-.272c-.28.13-.54.297-.776.497-.944.867-1.703 1.89-2.434 2.94a32.376 32.376 0 00-2.13 3.469c-.207.395-.363.822-.597 1.198a1.782 1.782 0 01-1.61.879 2.286 2.286 0 01-1.079-.217 1.2 1.2 0 01-.559-.65c-.386.215-.768.454-1.171.644-.63.32-1.31.53-2.01.619a9.147 9.147 0 01-1.437.073 4.165 4.165 0 01-2.444-.904 3.79 3.79 0 01-1.32-2.22 5.619 5.619 0 01-.053-1.958 8.607 8.607 0 01.981-2.904c.396-.755.868-1.468 1.408-2.127A8.518 8.518 0 016.851 9.36a5.038 5.038 0 011.804-.725c.832-.155 1.55.132 2.217.593.465.315.857.725 1.15 1.203.27.487.342 1.06.2 1.598a7.865 7.865 0 01-.63 1.697c-.252.56-.502 1.118-.76 1.675a.485.485 0 01-.617.296 2.16 2.16 0 01-1.455-1.583c-.06-.527.025-1.06.248-1.542.231-.595.497-1.177.753-1.76a.337.337 0 00-.13-.472c-.294.068-.56.224-.764.446-.361.357-.703.733-1.028 1.123a13.7 13.7 0 00-1.669 2.66 4.817 4.817 0 00-.52 1.749c-.06.47-.044.945.045 1.41a1.306 1.306 0 001.232 1.09 5.533 5.533 0 003.259-.843c.37-.255.726-.53 1.066-.823a.516.516 0 00.136-.213c.344-.918.666-1.843 1.03-2.75.268-.674.586-1.328.885-1.987.281-.648.625-1.266 1.028-1.847.454-.638 1.026-1.121 1.823-1.224.642-.083 1.234.132 1.54.858.27.638.115 1.25-.093 1.864-.054.157-.106.314-.174.516.374-.408.692-.796 1.051-1.137a7.418 7.418 0 011.986-1.437 3.65 3.65 0 011.703-.386c.732.033 1.414.217 1.927.797.223.262.37.58.424.92.12.63-.089 1.196-.322 1.762-.172.42-.349.838-.479 1.271-.104.351.082.6.454.694.083.022.167.036.252.041.138.006.157.084.125.19zM54.99 9.99c-.306-.686-1.815-.758-2.438-.546a3.487 3.487 0 00-.701.357c-1.042.645-1.412 1.472-1.901 2.553-.485 1.067-.931 2.153-1.45 3.203a16.012 16.012 0 01-1.176 1.943c-.25.403-.648.69-1.108.8-.274.054-.386-.069-.483-.307a2.26 2.26 0 01-.161-.687 5.471 5.471 0 01.258-2.002c.308-1.034.64-2.06.952-3.092.165-.448.245-.923.237-1.4a1.079 1.079 0 00-.417-.865 1.842 1.842 0 00-1.918-.157c-.644.306-1.065.853-1.374 1.474-.436.873-.83 1.767-1.257 2.644-.293.607-.609 1.204-.915 1.804a14.142 14.142 0 01-1.395 2.343c-.085.108-.237.26-.334.242-.116-.017-.21-.194-.308-.304a.17.17 0 01-.035-.07 3.696 3.696 0 01-.076-1.641c.1-.617.223-1.232.365-1.84.28-1.217.598-2.425.86-3.648a1.26 1.26 0 00-.435-1.332 1.739 1.739 0 00-1.368-.287c-.646.1-1.12.492-1.5 1.016a5.9 5.9 0 00-.965 2.15c-.15.64-.248 1.291-.355 1.943-.048.3-.05.607-.087.912a.42.42 0 01-.103.227c-.258.27-.52.533-.79.791-.51.492-1.095.9-1.733 1.21a3.281 3.281 0 01-2.728.171 1.8 1.8 0 01-1.128-1.325c.378 0 .742.004 1.107 0a5.255 5.255 0 002.467-.646 3.787 3.787 0 001.657-1.656c.41-.796.51-1.717.277-2.582a2.703 2.703 0 00-1.592-1.837 3.628 3.628 0 00-1.393-.345 6.964 6.964 0 00-1.334.013 4.988 4.988 0 00-2.493 1.26 8.107 8.107 0 00-1.798 2.34 8.439 8.439 0 00-.947 3.16c-.062.632-.01 1.27.154 1.884.2.84.706 1.575 1.418 2.064.74.48 1.597.75 2.478.778a12.98 12.98 0 001.841-.076 5.375 5.375 0 001.754-.512 7.69 7.69 0 002.409-1.73c.213-.224.417-.458.6-.662.174.425.331.865.53 1.284.242.545.675.982 1.217 1.228.525.23 1.078.388 1.645.471a.918.918 0 00.842-.203c.374-.369.764-.724 1.129-1.102.204-.226.396-.462.576-.708.266-.34.527-.685.805-1.046.03.177.052.326.085.474.173.75.493 1.402 1.162 1.843.454.279.95.484 1.468.609a3.613 3.613 0 002.611-.22 6.783 6.783 0 002.299-1.875 20.56 20.56 0 001.387-1.833 63.664 63.664 0 001.856-3.057c.302-.526.596-1.057.887-1.589.239-.434.877-1.2.915-1.687a.65.65 0 00-.052-.322zm-25.708 3.8c.2-.547.502-1.05.889-1.484.233-.292.555-.5.917-.59a.722.722 0 01.811.912c-.277 1.179-1.059 1.846-2.196 2.137a5.306 5.306 0 01-.75.072c.12-.388.213-.722.33-1.048z"
        fill="#fff"
      />
    </svg>
  );
});

export default Icon;
