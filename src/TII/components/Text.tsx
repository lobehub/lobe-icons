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
      viewBox="0 0 56 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M4.223.714H2V0h5.198v.714h-2.22V6.71h-.755V.714zM9.248 6.118a2.018 2.018 0 001.542-.692l.454.409a2.53 2.53 0 01-2.015.918c-1.344 0-2.44-1.033-2.44-2.559 0-1.416.992-2.56 2.345-2.56 1.447 0 2.28 1.157 2.28 2.597.002.086-.002.172-.01.257H7.52c.11 1.033.867 1.63 1.728 1.63zM10.677 3.9c-.087-.885-.597-1.65-1.561-1.65-.842 0-1.487.707-1.59 1.65h3.15zM12.2 4.212v-.017a2.558 2.558 0 011.65-2.397 2.542 2.542 0 012.816.708l-.482.512c-.388-.408-.823-.739-1.485-.739-.994 0-1.751.843-1.751 1.896v.02c0 1.062.777 1.906 1.797 1.906.625 0 1.107-.313 1.496-.73l.462.436c-.49.549-1.077.947-1.995.947a2.506 2.506 0 01-2.324-1.572 2.522 2.522 0 01-.183-.97zM17.719 0h.727v2.613c.165-.301.408-.55.703-.721.295-.17.631-.256.971-.246 1.183 0 1.873.804 1.873 1.982v3.075h-.727V3.818c0-.919-.493-1.494-1.352-1.494-.86 0-1.468.622-1.468 1.551V6.71h-.727V0zM23.358 1.736h.728v.843c.164-.295.408-.539.703-.705.295-.167.631-.25.97-.24 1.184 0 1.874.786 1.874 1.937v3.006h-.727V3.749c0-.898-.493-1.46-1.353-1.46s-1.467.608-1.467 1.516v2.772h-.728v-4.84zM28.695 4.21v-.018a2.555 2.555 0 012.54-2.563 2.548 2.548 0 012.559 2.544v.02a2.546 2.546 0 01-1.581 2.369 2.536 2.536 0 01-.983.187 2.503 2.503 0 01-2.35-1.563 2.513 2.513 0 01-.185-.976zm4.352 0v-.018c0-1.06-.786-1.913-1.817-1.913-1.06 0-1.789.861-1.789 1.894v.02c0 1.05.777 1.904 1.809 1.904 1.059 0 1.797-.854 1.797-1.887zM34.988 0h.729v6.71h-.73V0zM36.918 4.21v-.018a2.556 2.556 0 012.54-2.563 2.548 2.548 0 012.56 2.544v.02a2.545 2.545 0 01-2.565 2.556 2.503 2.503 0 01-2.35-1.563 2.513 2.513 0 01-.185-.976zm4.352 0v-.018c0-1.06-.786-1.913-1.817-1.913-1.06 0-1.787.861-1.787 1.894v.02c0 1.05.775 1.904 1.807 1.904 1.06 0 1.804-.854 1.804-1.887h-.007zM43.089 7.486l.33-.567a3.126 3.126 0 001.882.624c1.08 0 1.78-.596 1.78-1.742v-.578c-.427.568-1.022 1.033-1.92 1.033a2.261 2.261 0 01-2.296-2.298V3.94a2.32 2.32 0 011.619-2.206 2.313 2.313 0 012.59.879v-.884h.73v4.044c0 .757-.228 1.335-.626 1.733-.434.436-1.087.654-1.862.654a3.83 3.83 0 01-2.227-.674zm4.01-3.535v-.02c0-1.004-.87-1.656-1.798-1.656-.927 0-1.693.643-1.693 1.647v.02a1.656 1.656 0 001.693 1.665c.92.004 1.803-.66 1.803-1.653l-.005-.003zM48.955 7.851l.245-.57c.236.123.5.183.766.174.437 0 .707-.225 1.003-.907l-2.223-4.81h.805l1.779 4.028 1.57-4.029h.776L51.623 6.73c-.417 1-.883 1.365-1.627 1.365a2.25 2.25 0 01-1.041-.243zM4.126 8.61h.747v6.71h-.747V8.61zM6.5 10.34h.73v.841c.164-.294.408-.538.703-.705.295-.167.631-.25.971-.24 1.183 0 1.873.786 1.873 1.938v3.005h-.729v-2.827c0-.898-.49-1.46-1.352-1.46-.862 0-1.466.607-1.466 1.516v2.771H6.5v-4.84zM12.142 10.34h.73v.841a1.84 1.84 0 01.703-.701c.295-.166.63-.249.969-.239 1.183 0 1.873.787 1.873 1.938v3.006h-.729v-2.833c0-.898-.49-1.46-1.353-1.46-.861 0-1.465.607-1.465 1.516v2.771h-.728v-4.84zM17.479 12.814v-.02a2.555 2.555 0 012.54-2.562 2.548 2.548 0 012.559 2.543v.02a2.547 2.547 0 01-1.581 2.37 2.536 2.536 0 01-.983.187 2.5 2.5 0 01-2.35-1.562 2.513 2.513 0 01-.186-.976zm4.352 0v-.02c0-1.051-.786-1.912-1.817-1.912-1.06 0-1.789.86-1.789 1.893v.02c0 1.05.777 1.905 1.809 1.905 1.059 0 1.797-.855 1.797-1.886zM22.938 10.34h.805l1.646 4.073 1.656-4.073h.784l-2.119 4.944h-.644l-2.128-4.944zM28.182 13.845v-.017c0-1.07.852-1.615 2.091-1.615a5.044 5.044 0 011.494.21v-.153c0-.877-.53-1.337-1.446-1.337a3.382 3.382 0 00-1.487.356l-.217-.602a3.989 3.989 0 011.78-.421c.69 0 1.236.19 1.578.546.343.354.512.82.512 1.45v3.018h-.72v-.734a2.129 2.129 0 01-1.766.84c-.907-.002-1.819-.528-1.819-1.54zm3.596-.381v-.458a4.985 4.985 0 00-1.429-.21c-.91 0-1.428.4-1.428.992v.018c0 .62.566.984 1.236.984.891.002 1.62-.543 1.62-1.326zM34.05 14.004v-2.99h-.682v-.654h.682V8.864h.728v1.496h1.555v.654h-1.552v2.894c0 .605.332.825.825.825.246-.002.488-.063.706-.18v.633a1.806 1.806 0 01-.883.21c-.782.008-1.379-.384-1.379-1.392zM37.447 8.922h.828v.812h-.831l.003-.812zm.048 1.425h.727v4.932h-.727v-4.932zM39.425 12.814v-.02a2.555 2.555 0 012.54-2.562 2.548 2.548 0 012.56 2.543v.02a2.547 2.547 0 01-1.582 2.37 2.535 2.535 0 01-.982.187 2.5 2.5 0 01-2.351-1.561 2.51 2.51 0 01-.185-.977zm4.353 0v-.02c0-1.051-.786-1.912-1.817-1.912-1.06 0-1.79.86-1.79 1.893v.02c0 1.05.776 1.905 1.809 1.905s1.798-.855 1.798-1.886zM45.651 10.34h.73v.841c.164-.294.407-.538.702-.705.295-.167.631-.25.971-.24 1.183 0 1.874.786 1.874 1.938v3.005h-.73v-2.827c0-.898-.49-1.46-1.352-1.46-.862 0-1.466.607-1.466 1.516v2.771h-.729v-4.84zM4.126 17.212h.747v6.71h-.747v-6.71zM6.5 18.942h.73v.841a1.84 1.84 0 01.703-.705c.295-.166.631-.25.971-.24 1.183 0 1.873.786 1.873 1.937v3.007h-.729v-2.829c0-.897-.49-1.46-1.352-1.46-.862 0-1.466.608-1.466 1.516v2.773H6.5v-4.84zM11.735 23.248l.369-.524c.482.39 1.076.61 1.693.63.586 0 1.012-.305 1.012-.783v-.02c0-.495-.576-.685-1.22-.867-.767-.22-1.618-.486-1.618-1.393v-.02c0-.85.707-1.413 1.665-1.413a3.333 3.333 0 011.766.535l-.337.57a2.75 2.75 0 00-1.448-.478c-.576 0-.945.307-.945.713v.02c0 .466.604.648 1.257.85.758.227 1.57.523 1.57 1.41v.02c0 .936-.766 1.48-1.74 1.48a3.345 3.345 0 01-2.024-.73zM16.825 22.607v-2.99h-.681v-.654h.681v-1.496h.73v1.496h1.55v.653h-1.55v2.895c0 .605.33.825.822.825.246-.002.489-.063.707-.18v.634a1.842 1.842 0 01-.883.21c-.779.007-1.376-.385-1.376-1.393zM20.223 17.467h.833v.803h-.834v-.803zm.047 1.473h.728v4.883h-.733l.005-4.883zM22.758 22.607v-2.99h-.68v-.654h.68v-1.496h.73v1.496h1.544v.653H23.48v2.895c0 .605.33.825.823.825.246-.002.488-.063.706-.18v.634a1.836 1.836 0 01-.883.21c-.771.007-1.368-.385-1.368-1.393zM26.062 21.946v-3.003h.736v2.825c0 .9.493 1.46 1.353 1.46.833 0 1.467-.608 1.467-1.516v-2.77h.712v4.841h-.72v-.841c-.165.293-.409.536-.704.703-.295.166-.63.25-.97.241-1.184-.003-1.874-.789-1.874-1.94zM32.032 22.607v-2.99h-.68v-.654h.68v-1.496h.729v1.496h1.552v.653h-1.552v2.895c0 .605.33.825.823.825.246-.002.488-.063.706-.18v.634a1.837 1.837 0 01-.883.21c-.782.007-1.375-.385-1.375-1.393zM37.426 23.318a2.017 2.017 0 001.543-.692l.454.409a2.529 2.529 0 01-2.015.918c-1.343 0-2.442-1.033-2.442-2.559 0-1.416.995-2.56 2.347-2.56 1.448 0 2.28 1.157 2.28 2.597v.257h-3.885c.095 1.039.858 1.63 1.718 1.63zm1.429-2.218c-.085-.885-.595-1.649-1.561-1.649-.843 0-1.485.708-1.59 1.65h3.15z" />
    </svg>
  );
});

export default Icon;