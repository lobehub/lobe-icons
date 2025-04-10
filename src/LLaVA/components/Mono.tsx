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
      <path d="M10.881 9.923l.098.081c.52.457 1.009.74 1.313.758.451.028.898-.09 1.23-.323l.093-.066.095-.074c.34-.259.806-.616 1.42-.522.506.079.76.457 1.046.95l.399.687c.358.605.863 1.427 1.244 1.978.4.582.84 1.117 1.234 1.507.234.233.365.54.355.847-.006.204-.073.377-.182.475l-.064.045 3.745 4.954c.053.073.084.116.086.123.078.233-.496.57-1.237.896l-.239.097c-.94.357-3.235 1.048-4.665 1.285l-.208.032c-1.538.219-4.175.544-7.858.19l-.704-.072c-3.128-.355-4.17-.88-5.425-1.45l-.369-.173c-1.013-.495-1.226-.782-1.27-.89l-.01-.047c-.053-.102.281-.527.738-1.06l.743-.852c.274-.312.544-.625.771-.904l.162-.203c.087-.112.2-.26.332-.435l.387-.517 1.89-2.558a.5.5 0 01-.103-.215c-.079-.393.251-.925.459-1.178l.155-.18.443-.492c.18-.202.381-.436.596-.705.198-.248.369-.492.522-.719l.354-.529c.374-.542.724-.946 1.303-1.032.508-.072.826.058 1.121.291zm-.913.089l-.147.014c-.425.062-.696.374-1.027.857l-.454.676c-.132.191-.276.393-.44.6-.22.276-.427.514-.61.72l-.495.55-.096.111c-.212.26-.413.662-.377.849a.09.09 0 00.024.048l.019.014c.014.008.058.03.155-.002.253-.082.55-.417.644-.612.18-.379.359-.57.564-.602a.389.389 0 01.353.134c.133.14.201.322.189.514-.018.28-.193.562-.524.835L7.41 15c-.38.33-.746.7-.71.973.014.106.052.246.153.311.099.064.234.044.33.016.245-.069.973-.84 1.379-1.402l.186-.272.202-.298c.394-.572.738-.98 1.083-.98.17 0 .308.09.38.248.178.378-.06 1.048-.59 1.666-.752.877-1.153 1.234-1.95 1.947l-.287.253c-.66.59-.765.875-.767.99-.002.055.016.092.066.14.1.102.518.132 1.16-.412.68-.578 1.632-1.643 2.106-2.186l.49-.57c.345-.39.69-.71 1.112-.684.454.028.54.36.565.594l.017.229.033.153c.052.251.094.383.398.383.337 0 .609-.283.854-.89.035-.086.062-.18.086-.275l.09-.357c.08-.284.203-.548.507-.599a.707.707 0 01.11-.008c.281 0 .425.198.546.445l.19.414 1.102 2.274c.235.48.453.912.57 1.114l.283.46c.246.382.502.61.994.461.118-.036.153-.095.169-.143.098-.268-.122-.815-.651-1.626l-.155-.232c-.278-.41-1.07-1.777-1.384-2.722l-.102-.324c-.197-.657-.218-1.026.066-1.24a.344.344 0 01.284-.064c.194.04.445.213.983 1.203l.46.845c.238.427.462.784.658.953.24.207.441.217.532.136.054-.056.128-.429-.19-.742-.41-.408-.866-.964-1.283-1.566a43.963 43.963 0 01-1.496-2.408l-.083-.147-.178-.304c-.22-.36-.384-.544-.658-.585-.344-.053-.636.1-.896.283l-.417.31c-.407.284-.948.427-1.488.395-.445-.027-.97-.38-1.337-.673l-.218-.184c-.195-.169-.366-.274-.614-.29l-.131-.001zM5.352 11.13c.233.07 0 .417-.081 1.312-.08.895.205 1.887-.483 1.87-.655-.017-.574-.904-.315-1.888.294-1.112.645-1.365.879-1.294zm14.89-.209c.283-.04.49.534.62.957l.08.277c.113.375.299 1.612-.294 1.61-.384-.001-.45-.275-.483-.906l-.022-.495c-.042-.984-.195-1.401.099-1.443zm-10.006-.283l.098.026c.1.029.26.084.408.174l.116.08.199.145c.314.22.82.511 1.434.502.8-.01 1.245-.39 1.567-.576.323-.185.623-.154.623-.154l-.044.144c-.157.474-.756 1.957-2.107 2.009-2.105.082-2.294-2.35-2.294-2.35zm6.607-7.546l.2.009c1.203.097 1.692.534 2.171 1.068.48.534.411 1.022.135 1.214-.33.23-.699 0-.882-.194-.183-.193-.294-.46-.747-.74-.518-.318-1.692-.462-2.735.728-1.133 1.292-1.476 2.845-1.653 3.884l-.077.473c-.07.438-.137.55-.393.524-.183-.019-.243-.165-.255-.322l-.002-.183c.005-.296.032-.983.158-1.743.147-.887.613-2.196 1.251-3.119.568-.82 1.57-1.516 2.63-1.592l.199-.007zm-8.104.152c1.412.261 2.135 1.517 2.612 2.864.48 1.347.72 3.08.756 3.394.036.315-.002.518-.27.558-.123.018-.246-.06-.308-.22-.056-.151-.142-.532-.272-1.024l-.163-.594c-.17-.604-.425-1.432-.73-2.044l-.166-.33c-.341-.655-.751-1.28-1.497-1.51-.814-.249-1.335.139-1.66.469l-.066.07c-.318.34-.814.605-1.12.264-.306-.34-.05-.763.195-1.016l.117-.107c.352-.299 1.355-1 2.572-.774zm1.736 5.62c.091.224.11.389.018.479-.102.103-.284.077-.422-.068l-.23-.269c-.382-.425-1.175-1.171-2.187-1.08-1.374.123-1.638 1.223-1.7 1.435-.079.265-.28.554-.665.478-.302-.06-.41-.281-.425-.658-.016-.538.622-1.947 2.47-2.178 1.949-.245 3.047 1.622 3.141 1.861zm9.489-1.142c.481.638.433 1.172.106 1.35-.326.179-.668.065-.914-.363-.183-.319-.485-.841-.914-1.034-.808-.363-1.453-.315-2.31.121-.571.291-.975.794-1.208 1.135l-.324.503c-.08.114-.187.218-.354.164-.15-.049-.144-.247-.093-.454l.025-.088c.064-.204.727-2.334 3.184-2.577 1.543-.154 2.413.727 2.802 1.243zM3.047 6.552c.62-.516 1.43-.85 1.634-.661.153.141.014.388-.117.502l-.133.115c-.195.17-.503.456-.707.754-.149.22-.326.616-.582.813-.185.142-.451.21-.669.066-.241-.16-.245-.488-.143-.747.123-.305.421-.596.717-.842zm17.124-.432c.099-.195.463-.028.953.221.491.25.926.596 1.178.943.258.355.197.972-.322.917-.52-.056-.895-.796-1.15-1.096l-.19-.21c-.31-.328-.576-.562-.469-.775zM9.22 1.122c.223-.194.616-.222.966.041s.8.764 1.122 1.457l.08.178c.163.387.333.916.103.976-.288.076-.533-.333-1.05-.86-.52-.529-.982-.597-1.236-.918-.253-.32-.209-.68.015-.874zM16.554.015c.378-.055.608.04.715.291.113.263-.093.614-.322.708-.38.151-.73.151-1.473.652-.86.577-1.46 1.494-1.558 1.715l-.013.032c-.056.208-.21.305-.364.236-.128-.058-.14-.2-.124-.326l.037-.209c.06-.304.261-.997 1.124-1.919.864-.923 1.738-1.144 1.978-1.18z" />
    </svg>
  );
});

export default Icon;
