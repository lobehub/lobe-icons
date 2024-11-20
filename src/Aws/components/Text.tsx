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
      viewBox="0 0 65 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M9.409 15.585l-.375.001c-.138 0-.313.092-.356.24L7.541 19.78l-1.125-3.945c-.034-.123-.152-.249-.313-.249H5.66c-.16 0-.276.127-.308.252L4.304 19.74l-1.081-3.915c-.043-.143-.223-.24-.363-.24h-.54a.347.347 0 00-.28.127.182.182 0 00-.032.166l1.67 5.834c.038.123.145.246.303.246h.536a.323.323 0 00.309-.252l1.028-3.886 1.119 3.89c.034.12.142.248.3.248h.528c.147 0 .27-.1.307-.248l1.608-5.83a.187.187 0 00-.03-.17.343.343 0 00-.277-.126zm4.638 2.477h-2.834c.066-.785.582-1.598 1.457-1.63.931.03 1.357.825 1.377 1.63zm-1.38-2.519c-1.913 0-2.785 1.67-2.785 3.221 0 1.936 1.084 3.187 2.76 3.187 1.201 0 2.117-.599 2.512-1.644a.218.218 0 00-.019-.183.313.313 0 00-.207-.143l-.53-.1c-.144-.023-.307.06-.361.182-.258.58-.729.91-1.32.927a1.533 1.533 0 01-1.328-.848c-.194-.406-.223-.806-.226-1.214l3.847-.001c.08 0 .164-.035.223-.094a.239.239 0 00.076-.17c-.01-1.508-.708-3.12-2.641-3.12zm7.374 3.153l-.003.245c-.026.564-.204 1.978-1.346 2.019a1.437 1.437 0 01-1.108-.635c-.18-.28-.284-.665-.31-1.143v-1.049c.02-.804.594-1.686 1.414-1.72 1.217.048 1.343 1.767 1.353 2.283zm-1.147-3.207h-.102c-.636 0-1.135.26-1.519.794v-2.459c0-.138-.145-.264-.304-.264h-.554c-.144 0-.306.113-.306.264v7.677c0 .14.145.266.304.266h.163c.153 0 .262-.122.3-.236l.172-.542c.402.564 1.008.894 1.656.894h.1c1.707 0 2.47-1.638 2.47-3.261 0-.808-.201-1.58-.553-2.12-.407-.625-1.107-1.013-1.827-1.013zm8.44 3.112c-.36-.255-.793-.34-1.226-.426l-.831-.152c-.597-.097-.942-.254-.942-.773 0-.549.577-.758 1.065-.772.597.015 1.046.278 1.264.74a.323.323 0 00.286.182l.06-.006.519-.113a.322.322 0 00.206-.15.217.217 0 00.02-.182c-.316-.911-1.122-1.393-2.34-1.393-1.102.002-2.278.485-2.278 1.834 0 .922.587 1.508 1.746 1.74l.93.175c.511.097 1.033.268 1.033.81 0 .8-.944.881-1.23.887-.64-.013-1.366-.295-1.542-.892-.035-.131-.202-.224-.35-.194l-.542.11a.313.313 0 00-.2.14.232.232 0 00-.03.185c.262.925 1.124 1.507 2.33 1.588l.293.01c1.2 0 2.482-.507 2.482-1.928a1.71 1.71 0 00-.724-1.42zm5.484-.533h-2.835c.065-.786.582-1.6 1.457-1.63.93.03 1.357.825 1.378 1.63zm-1.38-2.52c-1.915 0-2.787 1.67-2.787 3.222 0 1.935 1.084 3.186 2.762 3.186 1.2 0 2.116-.599 2.511-1.644a.22.22 0 00-.018-.183.311.311 0 00-.207-.143l-.532-.1c-.125-.02-.299.043-.36.182-.258.58-.729.91-1.319.928a1.532 1.532 0 01-1.328-.848c-.195-.406-.224-.806-.227-1.215h3.847c.08 0 .164-.036.222-.094a.24.24 0 00.076-.171c-.009-1.508-.707-3.12-2.64-3.12zm6.273.072a2.01 2.01 0 00-.217-.012c-.646 0-1.17.346-1.534 1.008l.001-.58c0-.14-.142-.263-.303-.263h-.48c-.159 0-.298.123-.299.266v5.628c0 .141.139.265.297.265h.561c.146 0 .31-.113.311-.265v-2.838c0-.468.045-.82.272-1.237.323-.594.775-.886 1.381-.89a.292.292 0 00.286-.28v-.527c0-.138-.121-.259-.276-.275zm5.887-.11h-.443c-.139 0-.317.098-.36.242l-1.435 4.45-1.466-4.446c-.043-.147-.221-.246-.36-.246l-.633-.001a.36.36 0 00-.285.13.181.181 0 00-.03.168l2.005 5.87c.039.116.141.252.303.252h.765c.14 0 .255-.094.308-.252l1.946-5.868a.18.18 0 00-.03-.168.359.359 0 00-.285-.132zm1.454-2.257a.736.736 0 00-.74.732c0 .403.332.731.74.731s.74-.328.74-.731a.737.737 0 00-.74-.732zm.305 2.22h-.608c-.165 0-.315.132-.315.276l-.003 5.976a.26.26 0 00.103.198c.06.048.136.076.213.076l.612.001c.168-.001.315-.13.315-.274v-5.977c0-.147-.149-.275-.317-.275zm5.673 4.053l-.507.002a.327.327 0 00-.312.23c-.186.788-.605 1.196-1.241 1.214-1.239-.036-1.335-1.74-1.335-2.26 0-1.04.365-2.162 1.383-2.191.615.018 1.063.453 1.197 1.162a.33.33 0 00.291.273l.543.005c.162-.017.29-.138.288-.288-.192-1.281-1.091-2.109-2.294-2.109h-.088c-1.75 0-2.532 1.61-2.532 3.206 0 1.462.66 3.17 2.522 3.17h.089c1.172 0 2.057-.81 2.31-2.125a.234.234 0 00-.06-.176.36.36 0 00-.254-.113zm5.008-1.458h-2.836c.065-.786.582-1.6 1.457-1.63.931.03 1.357.825 1.379 1.63zm-1.38-2.52c-1.915 0-2.787 1.67-2.787 3.222 0 1.935 1.084 3.186 2.762 3.186 1.2 0 2.114-.598 2.51-1.643a.222.222 0 00-.019-.184.31.31 0 00-.206-.143l-.532-.1c-.125-.02-.298.043-.36.182-.258.58-.73.91-1.319.928a1.532 1.532 0 01-1.328-.848c-.195-.406-.224-.807-.227-1.215H57c.08 0 .164-.036.223-.095.05-.049.076-.11.075-.17-.009-1.508-.707-3.12-2.64-3.12zm7.46 3.053c-.36-.256-.794-.34-1.226-.426l-.831-.152c-.596-.097-.94-.254-.94-.773 0-.708.89-.767 1.063-.772.598.015 1.046.278 1.264.74a.324.324 0 00.287.182l.06-.006.519-.113a.322.322 0 00.206-.15.217.217 0 00.02-.182c-.316-.911-1.122-1.393-2.341-1.393-1.101.002-2.277.485-2.277 1.834 0 .922.587 1.508 1.746 1.74l.93.175c.511.097 1.033.268 1.033.81 0 .8-.944.881-1.23.887-.594-.012-1.354-.254-1.542-.891-.034-.132-.201-.225-.35-.195l-.542.11a.315.315 0 00-.2.141.23.23 0 00-.03.184c.26.925 1.122 1.507 2.328 1.588l.294.01c1.2 0 2.482-.507 2.482-1.928 0-.58-.264-1.097-.723-1.42zM37.436 3.968V2.61c.001-.206.16-.344.35-.344h6.163c.196 0 .355.141.355.342v1.164c-.001.14-.087.309-.243.542l-3.413 4.808c1.184-.028 2.438.147 3.514.744.244.135.308.335.328.53v1.448c0 .2-.221.43-.454.31-1.897-.98-4.414-1.088-6.512.011-.215.113-.439-.114-.439-.314v-1.376c0-.22.005-.597.23-.932l3.698-5.234-3.22-.001c-.197 0-.355-.139-.357-.341zM31.506 2c.912 0 2.106.24 2.825.92.716.662.815 1.495.825 2.415l-.001 3.65c0 .868.365 1.248.708 1.715.119.169.146.368-.007.492-.383.316-1.063.899-1.437 1.228a.409.409 0 01-.448.04c-.622-.511-.734-.748-1.075-1.234-1.029 1.035-1.758 1.345-3.09 1.345-1.58 0-2.807-.961-2.807-2.883 0-1.501.824-2.522 2-3.023 1.017-.44 2.438-.521 3.525-.641v-.632c-.005-.335-.04-.678-.229-.95-.227-.34-.665-.48-1.052-.48-.656 0-1.244.304-1.458.932l-.05.18c-.03.166-.155.33-.325.339l-1.816-.194c-.154-.034-.325-.155-.28-.386C27.73 2.657 29.722 2 31.507 2zM6.927 2c.913 0 2.106.24 2.825.92.717.662.816 1.495.826 2.415l-.002 3.65c0 .868.366 1.248.708 1.715.12.169.146.368-.006.492A75.1 75.1 0 009.84 12.42a.41.41 0 01-.447.04c-.623-.511-.735-.748-1.075-1.234-1.029 1.035-1.758 1.345-3.092 1.345-1.578 0-2.806-.961-2.806-2.883 0-1.501.825-2.522 2-3.023 1.017-.44 2.438-.521 3.525-.641l.001-.632c-.005-.335-.04-.678-.229-.95-.228-.34-.666-.48-1.052-.48-.655 0-1.245.304-1.458.932l-.05.18c-.032.166-.155.33-.325.339l-1.817-.194c-.154-.034-.324-.155-.28-.386C3.15 2.657 5.143 2 6.927 2zm15.796.093c.788 0 1.644.319 2.17 1.038.595.8.472 1.957.472 2.976l-.001 5.991c0 .19-.162.342-.361.342h-1.873a.35.35 0 01-.337-.34V7.065c0-.4.035-1.399-.053-1.778-.14-.64-.56-.818-1.102-.818-.456 0-.928.3-1.121.778-.137.343-.168.848-.174 1.306v5.544c0 .19-.163.342-.362.342h-1.873a.35.35 0 01-.337-.34l.002-5.365c.016-1.024.038-2.285-1.158-2.285-1.213 0-1.292 1.229-1.296 2.276v5.372c0 .19-.162.342-.362.342H13.08a.351.351 0 01-.335-.313l.002-9.493c0-.19.162-.342.361-.342h1.747c.182.01.329.145.341.318v1.24h.035c.455-1.199 1.312-1.757 2.467-1.757 1.173 0 1.908.558 2.433 1.757.455-1.199 1.488-1.757 2.591-1.757zm9.802 6.078v-.665l-.388.008c-1.228.058-2.4.429-2.4 1.854 0 .8.42 1.341 1.138 1.341.527 0 1-.32 1.299-.84.322-.561.35-1.091.35-1.698zM7.94 8.427l.003-.921-.388.008c-1.228.058-2.4.429-2.4 1.854 0 .8.42 1.341 1.14 1.341.526 0 1-.32 1.298-.84.276-.481.335-.94.347-1.442zM49.627 4.03c-1.252 0-1.442 1.52-1.467 2.668l-.003.663c.007 1.24.105 3.32 1.453 3.32 1.453 0 1.523-1.997 1.523-3.215 0-.8-.035-1.758-.28-2.517-.19-.594-.548-.863-1.053-.911l-.173-.008zm-.017-1.937c2.783 0 4.288 2.357 4.288 5.352 0 2.897-1.663 5.195-4.288 5.195-2.73 0-4.219-2.358-4.219-5.294 0-2.957 1.505-5.253 4.22-5.253zm7.897 10.347H55.64a.35.35 0 01-.336-.34L55.3 2.601a.353.353 0 01.36-.31h1.739a.356.356 0 01.333.265V4.01h.035c.525-1.299 1.26-1.917 2.555-1.917.84 0 1.663.298 2.188 1.118.49.759.49 2.037.49 2.956v5.974a.354.354 0 01-.358.3h-1.88a.353.353 0 01-.335-.3l.003-5.82c-.01-.92-.139-1.892-1.176-1.892-.454 0-.874.3-1.084.76-.263.578-.298 1.157-.298 1.797v5.112a.357.357 0 01-.365.342z"></path>
    </svg>
  );
});

export default Icon;
